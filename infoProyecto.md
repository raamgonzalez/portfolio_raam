# Análisis y Mejoras: Responsive + Rendimiento

El portfolio usa React + Vite + SCSS con Tailwind CDN, Three.js/R3F, Framer Motion y GSAP. Después de revisar todos los archivos, encontré problemas significativos tanto en responsive design como en rendimiento.

---

## 🔴 Problemas Críticos de Rendimiento

### 1. Imágenes sin optimizar (mayor impacto)

Las imágenes de proyectos tienen tamaños enormes:
- `project_apimet.jpg` → **2.5 MB**
- `project_movmovies.jpg` → **2.5 MB**
- `project_appclima.jpg` → **1.8 MB**
- `project_gifshooot.jpg` → **1.5 MB** (+ video .webm de 8.2 MB)
- `project_webwriter.webm` → **12.3 MB**
- `profile_picture_v2.jpg` → **633 KB**
- `v2.gif` → **5.6 MB** (GIF enorme, ¿se usa?)

**Solución**: Convertir todas las imágenes a WebP con compresión, añadir `loading="lazy"` en las imágenes que están debajo del fold, y usar `width`/`height` explícitos para evitar CLS.

### 2. Tailwind CDN en producción

```html
<!-- index.html línea 7 -->
<script src="https://cdn.tailwindcss.com"></script>
```
Tailwind CDN carga **~300KB** del framework completo en runtime. Ya está instalado como devDependency. Esto es doblemente malo: bloquea el render y es redundante.

**Solución**: Eliminar el `<script>` CDN del index.html. Tailwind ya está configurado en `tailwind.config.js` y se procesa en build-time por Vite.

### 3. DaisyUI CDN innecesario

```html
<!-- index.html línea 6 -->
<link href="https://cdn.jsdelivr.net/npm/daisyui@3.1.0/dist/full.css" rel="stylesheet" />
```
DaisyUI solo se usa para el tooltip (clase `.tooltip`). Esto carga **~200KB** de CSS externo.

**Solución**: Implementar el tooltip manualmente con CSS nativo (ya existe un `_tooltip.scss`), o limitar DaisyUI al plugin de Tailwind que ya está en devDependencies.

### 4. Videos autoplay sin `preload="none"` ni lazy load

En `Project.jsx` y `MoreProjects.jsx`, todos los videos tienen `autoPlay loop muted` pero sin control de cuando se cargan. Los videos de proyectos como `project_webwriter.webm` pesan **12.3 MB**.

**Solución**: Añadir `preload="none"` a todos los videos. Usar Intersection Observer o la prop `loading` para no cargar videos hasta que sean visibles.

### 5. Dos fuentes de Google Fonts cargadas en `@import` CSS (no `<link>`)

```scss
// _settings.scss líneas 1-2
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black...');
@import url('https://fonts.googleapis.com/css2?family=Belleza...');
```
Los `@import` en CSS/SCSS bloquean el render. La fuente Archivo Black probablemente se puede reemplazar por las fuentes locales `Formular` que ya están disponibles.

**Solución**: Mover las fuentes de Google a `<link rel="preconnect">` + `<link rel="stylesheet">` en el `index.html`, o usar solo las fuentes locales ya descargadas.

### 6. Vite sin chunk splitting ni compresión

El `vite.config.js` está vacío (solo el plugin de React). Con dependencias pesadas como Three.js, R3F, Framer Motion y GSAP, el bundle final será enorme sin tree-shaking configurado.

**Solución**: Configurar `build.rollupOptions` para separar vendors por chunks (three, react, framer-motion).

---

## 🟡 Problemas de Responsive Design

### 7. Márgenes hardcodeados en `rem` para posicionar secciones

El sistema de layout usa márgenes absolutos gigantes para separar secciones en lugar de usar `gap` en un contenedor flex/grid:

```scss
// _listofprojects.scss
.ListOfProjects { margin: 70rem 0 0 0; } // ← Esto es frágil

// _about.scss  
.About { margin: 25rem 0 0 0; }

// _skills.scss
.Skills { margin: 25rem 0 0 0; }
```

Esto causa que en pantallas intermedias (768-1000px), la sección de "Proyectos" tenga un margen superior de 40rem que puede sobrepasar o quedar corto dependiendo del contenido dinámico.

**Solución**: Reemplazar el sistema de márgenes absolutos por `gap` en el contenedor `.wrapper o usar `padding-block` en cada sección.

### 8. Mixin `tab()` no cubre el rango 480-768px correctamente

El mixin `tab` cubre `480px → 768px` y `mob` cubre `240px → 480px`. Esto deja sin cobertura tablets modernas (768-900px) y no hay breakpoint para pantallas grandes (>1629px).

**Falta el mixin `gl`** (1260px-1629px) para pantallas 2K+ y tampoco hay cobertura de `xl` para >1629px.

### 9. Navbar móvil en posición `bottom` sin cobertura para `tab`

```scss
// _header.scss
.NavBar {
  @include tab() { top: 93%; } // hover en 93% desde top = bottom
  @include mob() { top: 90%; }
}
```
En tablet (480-768px), la navbar se mueve al 93% pero `Button_Language` y `Button_Resume` no se adaptan, quedando superpuestos en tablet.

**Solución**: En tablet, esconder `Button_Resume` igual que en móvil, o reorganizar los 3 elementos del header en un layout coherente.

### 10. `.About-p` usa posición `absolute` con `left: 30%` arbitrario

```scss
// _about.scss
.About-p {
  position: absolute;
  left: 30%;  // ← No fluye naturalmente
  width: 65rem; // ← Puede desbordarse en tablets
}
```

En tablet, el texto cambia a `top: 100%` pero como es `position: absolute`, no expande el contenedor padre y el texto puede solaparse con la sección siguiente.

**Solución**: Cambiar el About a un layout flexbox/grid, eliminando el posicionamiento absoluto del texto.

### 11. `.Project-content` usa `margin-left: 240px` hardcoded

```scss
// _listofprojects.scss
.Project-content { margin: 0 0 0 240px; }
```

Este margen no es responsivo y en desktop intermedio (1000-1260px) con `margin: 2rem 0 0 80px` hay un salto brusco de layout.

### 12. `Button_Language` no tiene breakpoint `tab()`

El botón de idioma solo tiene estilos para desktop. En tablet (480-768px) puede quedar solapado con la navbar que se mueve al 93%.

### 13. `Logo` sin altura responsiva en mobile

```scss
.Logo { height: 54rem; } // Desktop
@include mob() { height: auto; } // OK en mobile
// Pero no hay breakpoint para tab() ni middle()
```

En tablet/middle, el SVG del logo puede quedar demasiado grande.

---

## 🟢 Mejoras Adicionales (Bonus)

### 14. `<html lang="en">` incorrecto

El portfolio está en español/inglés pero el idioma base del HTML es `"en"`. Debería ser `lang="es"` o dinámico.

### 15. Fuente `back_01.svg` de 231KB sin usar en ningún componente

El archivo `public/media/back_01.svg` pesa 231KB y no se referencia en ningún componente. Se puede eliminar.

### 16. Dependencia `zsh` innecesaria en package.json

```json
"zsh": "^0.0.1" // ← ¿Qué hace esto aquí?
```

### 17. `v2.gif` de 5.6MB en la carpeta `about`

El archivo existe pero referencias en el código usan `profile_picture_v2.jpg`. El GIF parece no usarse.

---

## Propuesta de Cambios

### Fase 1 — Rendimiento Crítico (impacto inmediato)

#### [MODIFY] [index.html](file:///d:/ProyectosGit/portfolio_raam/index.html)
- Eliminar Tailwind CDN `<script>`
- Eliminar DaisyUI CDN `<link>`
- Mover Google Fonts a `<link rel="preconnect">` + `<link rel="stylesheet">` (evita bloqueo de render)
- Añadir `<meta name="description">` para SEO

#### [MODIFY] [vite.config.js](file:///d:/ProyectosGit/portfolio_raam/vite.config.js)
- Añadir `build.rollupOptions.output.manualChunks` para separar: `three`, `react-vendor`, `framer-motion`

#### [MODIFY] [Project.jsx](file:///d:/ProyectosGit/portfolio_raam/src/components/Project.jsx)
- Añadir `loading="lazy"` a todas las imágenes de proyectos
- Añadir `preload="none"` a todos los videos
- Añadir atributos `width` y `height` a `<img>` para evitar CLS

#### [MODIFY] [MoreProjects.jsx](file:///d:/ProyectosGit/portfolio_raam/src/components/MoreProjects.jsx)
- Igual que Project.jsx: `loading="lazy"` + `preload="none"`

#### [MODIFY] [About.jsx](file:///d:/ProyectosGit/portfolio_raam/src/components/About.jsx)
- Añadir `loading="eager"` (está en el primer viewport) + `width`/`height` explícitos

#### [MODIFY] [_settings.scss](file:///d:/ProyectosGit/portfolio_raam/src/styles/base/_settings.scss)
- Eliminar `@import url(...)` de Google Fonts (se mueven a index.html)

---

### Fase 2 — Responsive Design

#### [MODIFY] [_mixins.scss](file:///d:/ProyectosGit/portfolio_raam/src/styles/base/_mixins.scss)
- Añadir mixin `xl()` para pantallas >1629px
- Revisar rango `middle()` para cubrir tablets grandes (768-900px)

#### [MODIFY] [_header.scss](file:///d:/ProyectosGit/portfolio_raam/src/styles/components/_header.scss)
- Añadir breakpoint `tab()` a `.Button_Language`
- Esconder `.Button_Resume` en `tab()` también
- Ajustar posición de navbar en tablet para evitar solapamiento

#### [MODIFY] [_about.scss](file:///d:/ProyectosGit/portfolio_raam/src/styles/components/_about.scss)
- Reemplazar `position: absolute` en `.About-p` por un layout flex/grid natural que expanda el contenedor

#### [MODIFY] [_listofprojects.scss](file:///d:/ProyectosGit/portfolio_raam/src/styles/components/_listofprojects.scss)
- Reemplazar `margin: 70rem 0 0 0` por una solución más fluida con `padding-block`
- Mejorar el comportamiento de `.Project-content` en breakpoints intermedios

#### [MODIFY] [_home.scss](file:///d:/ProyectosGit/portfolio_raam/src/styles/components/_home.scss)
- Añadir breakpoints `tab()` y `middle()` para la altura del `.Logo`

---

## Open Questions

> [!IMPORTANT]
> **¿Optimizar imágenes automáticamente?** Vite tiene el plugin `vite-plugin-imagemin` que puede comprimir JPGs automáticamente durante el build. ¿Te gustaría que lo configure? Esto eliminaría la necesidad de convertir imágenes manualmente.

> [!IMPORTANT]  
> **¿Reemplazar el About con layout flex o mantener el estilo actual de posicionamiento absoluto?** El cambio de `position: absolute` en `.About-p` a un layout flex cambia visualmente el efecto del texto superpuesto sobre la imagen. ¿Quieres mantener ese efecto visual?

> [!WARNING]
> **Tailwind + DaisyUI CDN**: Al eliminar el CDN de Tailwind del HTML, cualquier clase de Tailwind usada directamente en JSX (no en SCSS) dejará de funcionar. Revisé el código y no encontré clases Tailwind directas en JSX (solo `tooltip` de DaisyUI en SkillsSofts). ¿Está usando Tailwind en algún lugar no visible?

---

## Verification Plan

### Automated
- `npm run build` — verificar que el bundle compila sin errores y revisar tamaño de chunks
- Análisis de bundles con `npx vite-bundle-visualizer`

### Manual
- Lighthouse audit antes y después en Chrome DevTools (Performance + Best Practices)
- Probar en viewport 375px (iPhone), 768px (iPad), 1024px, 1440px
- Verificar que NavBar no se solapa en tablet
- Verificar que la sección About fluye correctamente en mobile
