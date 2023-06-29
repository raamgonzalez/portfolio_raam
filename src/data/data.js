import { v4 as uuidv4 } from 'uuid'

export const data = {

  rrss: [
    {
      id: uuidv4(),
      name: 'whatsapp',
      href: 'https://wa.me/1155789343',
      state: true
    },
    {
      id: uuidv4(),
      name: 'facebook',
      href: 'https://www.facebook.com/raam.gonzalez/',
      state: false

    },
    {
      id: uuidv4(),
      name: 'github',
      href: 'https://github.com/raamgonzalez',
      state: true
    },
    {
      id: uuidv4(),
      name: 'behance',
      href: 'https://www.behance.net/ramsesgonzale',
      state: true
    },
    {
      id: uuidv4(),
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/ramsesoctaviogonzalez/',
      state: true
    },
    {
      id: uuidv4(),
      name: 'instagram',
      href: 'https://www.instagram.com/raam.gonzalez/',
      state: false
    }
  ],

  projects: [

    {
      id: uuidv4(),
      name: 'mov movies',
      descriptionEN:
        'A website created for performance practice. It is a movie search application.',
      descriptionES:
        'Una web creada para practicar el rendimiento. Es una aplicación de búsqueda de películas.',
      soft: ['html', 'css', 'javascript', 'reactjs', 'tailwindcss'],
      media: '/media/projects/project_movmovies.jpg',
      urlgit: 'https://github.com/raamgonzalez/movmovies.git',
      urldeploy: 'https://movmovies.vercel.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'quiz app',
      descriptionEN:
        'A website created as a practice project, the site includes an API query for questions and was developed using React.',
      descriptionES:
        'Una web creada como proyecto de práctica, el sitio incluye una consulta de API para preguntas y fue desarrollado usando React.',
      soft: ['html', 'css', 'javascript', 'reactjs', 'tailwindcss'],
      media: '/media/projects/project_quizapp.jpg',
      urlgit: 'https://github.com/raamgonzalez/quiz-app_react',
      urldeploy: 'https://quiz-app-react-ebon.vercel.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'api cat',
      descriptionEN:
        'A web created as a practice of combining two separate API queries, developed using React.',
      descriptionES:
        'Una web creada como práctica de combinar dos consultas de API separadas, desarrollada usando React.',
      soft: ['html', 'css', 'javascript', 'reactjs', 'tailwindcss'],
      media: '/media/projects/project_apicat.jpg',
      urlgit: 'https://github.com/raamgonzalez/apiCat',
      urldeploy: 'https://api-cat-eight.vercel.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'tente lab',
      descriptionEN:
        'Branding, Rebranding, and Product Photography Agency called Tente Lab. The website is a static page with a form connected to the clients email. I work with a team of UX/UI designers and programmers.',
      descriptionES:
        'Agencia de Branding, Rebranding y Fotografía de Productos llamada Tente Lab. La web es una página estática con un formulario conectado al email del cliente. Trabajo con un equipo de diseñadores UX/UI y programadores.',
      soft: ['html', 'css', 'javascript', 'reactjs', 'sass'],
      media: '/media/projects/project_tentelab.jpg',
      urlgit: '',
      urldeploy: 'https://tente-lab.vercel.app/',
      state: true,
      important: true
    },
    {
      id: uuidv4(),
      name: 'tienda de tecnología',
      descriptionEN:
        'Online store selling technological products, took advantage of incorporating mock async.',
      descriptionES:
      'Tienda de venta de productos tecnologicos, aproveche para incorporar mock async',
      soft: ['html', 'css', 'javascript', 'reactjs', 'firebase', 'axios', 'sass'],
      media: '/media/projects/project_tecnophil.jpg',
      urlgit: 'https://github.com/raamgonzalez/Ecommerce-Tecnophil_Gonzalez',
      urldeploy: 'https://ecommerce-react-34850.vercel.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'website portfolio',
      descriptionEN:
        'Website created to showcase my work and development as a programmer.',
      descriptionES:
      'Web realizada con el fin de mostrar mis trabajos y desarrollo como programador',
      soft: ['html', 'css', 'javascript', 'reactjs', 'sass'],
      media: '/media/projects/project_portfolio.jpg',
      urlgit: 'https://github.com/raamgonzalez/portfolio-profile_RG.git',
      urldeploy: 'https://portfolio-profile-rg.vercel.app',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'api met',
      descriptionEN:
        'Website that retrieves data from the API of the Metropolitan Mstateum of, Art in New York. Project built for practicing API requests.',
      descriptionES:
        'Web que toma los datos de la API del mstateo Met, de New York, proyecto realizado para practicar peticiones',
      soft: ['html', 'css', 'javascript', 'react', 'tailwindcss'],
      media: '/media/projects/project_apimet.jpg',
      urlgit: 'https://github.com/raamgonzalez/apiMET.git',
      urldeploy:
        'https://api-met.vercel.app/',
      state: true,
      important: true
    },
    {
      id: uuidv4(),
      name: 'landing-page lamparas',
      descriptionEN:
        'Website created for a full-stack Python programming course.',
      descriptionES:
        'Web creada para un curso de programación full-stack en Python.',
      soft: ['html', 'css'],
      media: '/media/projects/project_regulux.jpg',
      urlgit:
        'https://github.com/FerBarreyro/TPO-Desarrollo-WEB-Equipo-14-Comisi-n-22523.github.io',
      urldeploy: 'https://reguluxlamp.netlify.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'tienda de camiseta',
      descriptionEN:
        'Football shirt store website built with vanilla JavaScript.',
      descriptionES:
        'Web para tienda de camisetas de futbol realizada en javascript vanilla',
      soft: ['html', 'css', 'javascript'],
      media: '/media/projects/project_camisetasdprimera.jpg',
      urlgit: 'https://github.com/raamgonzalez/Ecommerce-Camisetas_Javascript',
      urldeploy: 'https://ecommerce-camisetasde1.netlify.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'todolist',
      descriptionEN:
        'Todo list application built with Vue and Vite. Works as an app to track tasks.',
      descriptionES:
        'Todolist realizado en Vue con Vite. Trabaja como una app para seguir tareas',
      soft: ['html', 'css', 'javascript', 'vue', 'vite'],
      media: '/media/projects/project_todolist.jpg',
      urlgit: 'https://weather-app-react-seven-zeta.vercel.app/',
      urldeploy:
        'https://github.com/raamgonzalez/weather-app_react.git',
      state: true
    },
    {
      id: uuidv4(),
      name: 'weather app',
      descriptionEN:
        'Weather application built with Vue and Vite. It has synchronization with a weather API.',
      descriptionES:
        'Aplicación del clima realizado en Vue con Vite. Tiene sincronización con API de clima.',
      soft: ['html', 'css', 'javascript', 'vue', 'vite'],
      media: '/media/projects/project_appclima.jpg',
      urlgit: 'https://github.com/raamgonzalez/weather-app_react.git',
      urldeploy:
        'https://weather-app-react-seven-zeta.vercel.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'write per minute',
      descriptionEN:
        'Application for practicing writing.',
      descriptionES:
        'Aplicación para practicar escritura',
      soft: ['html', 'css', 'javascript', 'react', 'vite', 'framer-motion'],
      media: '/media/projects/project_writeperminute.jpg',
      urlgit: 'https://github.com/raamgonzalez/writeperminute',
      urldeploy:
        'https://wordsperminute.vercel.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'gifshooot',
      descriptionEN:
        'GIF search engine that works with the Giphy API.',
      descriptionES:
        'Buscador de gifs, trabaja con APi de Giphy',
      soft: ['html', 'css', 'javascript', 'react', 'vite', 'framer-motion'],
      media: '/media/projects/project_gifshooot.jpg',
      urlgit: 'https://github.com/raamgonzalez/gifshoot',
      urldeploy:
        'https://gifshoot.vercel.app/',
      state: true,
      important: true
    },
    {
      id: uuidv4(),
      name: 'blog arquitectura',
      descriptionEN:
        'Architecture blog that includes an admin console and cards featuring architectural works and architects.',
      descriptionES:
        'Blog de Arquitectura que contiene una consola de admin y cards con obras de arquitectura y arquitectos.',
      soft: ['html', 'css', 'python', 'django'],
      media: '/media/projects/project_test.jpg',
      urlgit: 'https://github.com/raamgonzalez/Ecommerce-Tecnophil_Gonzalez',
      urldeploy:
        '',
      state: false
    },
    {
      id: uuidv4(),
      name: 'time tracking',
      descriptionEN:
        'Time tracking app, front end mentor challenge.',
      descriptionES:
        'App de seguimiento de tiempo, desafío de front end mentor.',
      soft: ['html', 'css', 'react', 'tailwindcss', 'nextjs'],
      media: './media/projects/project_timetracking.jpg',
      urlgit: 'https://github.com/raamgonzalez/timetracking-mentor.git',
      urldeploy:
        'https://timetracking-mentor.vercel.app/',
      state: true,
      important: false
    }
  ],

  softwares: [
    {
      id: uuidv4(),
      title: 'html',
      img: './media/skills/softs/soft_html.svg',
      state: true
    },
    {
      id: uuidv4(),
      title: 'css',
      img: './media/skills/softs/soft_css.svg ',
      state: true
    },
    {
      id: uuidv4(),
      title: 'javascript',
      img: './media/skills/softs/soft_javascript.svg',
      state: true
    },
    {
      id: uuidv4(),
      title: 'python',
      img: './media/skills/softs/soft_python.svg',
      state: true
    },
    {
      id: uuidv4(),
      title: 'django',
      img: './media/skills/softs/soft_django.svg',
      state: true
    },
    {
      id: uuidv4(),
      title: 'sass',
      img: './media/skills/softs/soft_sass.svg',
      state: true
    },
    {
      id: uuidv4(),
      title: 'reactjs',
      img: './media/skills/softs/soft_react.svg',
      state: true
    },
    {
      id: uuidv4(),
      title: 'cli',
      img: './media/skills/softs/soft_cli.svg',
      state: true
    },
    {
      id: uuidv4(),
      title: 'figma',
      img: './media/skills/softs/soft_figma.svg',
      state: true
    },
    {
      id: uuidv4(),
      title: 'photoshop',
      img: './media/skills/softs/soft_photoshop.svg',
      state: true
    },
    {
      id: uuidv4(),
      title: 'typescript',
      img: './media/skills/softs/soft_typescript.svg',
      state: true
    },
    {
      id: uuidv4(),
      title: 'astro',
      img: '#',
      state: false
    },
    {
      id: uuidv4(),
      title: 'firebase',
      img: '#',
      state: false
    },
    {
      id: uuidv4(),
      title: 'jquery',
      img: '#',
      state: false
    },
    {
      id: uuidv4(),
      title: 'jest',
      img: '#',
      state: false
    }
  ]
}
