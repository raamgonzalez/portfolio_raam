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
      description:
        'A website created for performance practice, utilizing hooks such as useCallback and React.memo, as well as API data retrieval. It is a movie search application.',
      soft: ['html', 'css', 'javascript', 'reactjs', 'tailwindcss'],
      media: '/media/projects/project_movmovies.webp',
      urlgit: 'https://github.com/raamgonzalez/movmovies.git',
      urldeploy: 'https://movmovies.vercel.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'quiz app',
      description:
        'A website created as a practice project, utilizing hooks for point summation and featuring a PlayStation 1 aesthetic. The site includes an API query for questions and was developed using React.',
      soft: ['html', 'css', 'javascript', 'reactjs', 'tailwindcss'],
      media: '/media/projects/project_quizapp.webp',
      urlgit: 'https://github.com/raamgonzalez/quiz-app_react',
      urldeploy: 'https://quiz-app-react-ebon.vercel.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'api cat',
      description:
        'A web created as a practice of combining two separate API queries, one for cat images and another for facts. Developed using React and styled with Tailwind CSS for the design.',
      soft: ['html', 'css', 'javascript', 'reactjs', 'tailwindcss'],
      media: '/media/projects/project_apicat.webp',
      urlgit: 'https://github.com/raamgonzalez/apiCat',
      urldeploy: 'https://api-cat-eight.vercel.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'tente lab',
      description:
        'Branding, Rebranding, and Product Photography Agency called Tente Lab. The website is a static page with a form connected to the clients email. I work with a team of UX/UI designers and programmers.',
      soft: ['html', 'css', 'javascript', 'reactjs', 'sass'],
      media: '/media/projects/project_tentelab.webp',
      urlgit: '',
      urldeploy: 'https://tente-lab.vercel.app/',
      state: true,
      important: true
    },
    {
      id: uuidv4(),
      name: 'tienda de tecnología',
      description:
        'Online store selling technological products, took advantage of incorporating mock async.',
      // "Tienda de venta de productos tecnologicos, aproveche para incorporar mock async",
      soft: ['html', 'css', 'javascript', 'reactjs', 'firebase', 'axios', 'sass'],
      media: '/media/projects/project_tecnophil.webp',
      urlgit: 'https://github.com/raamgonzalez/Ecommerce-Tecnophil_Gonzalez',
      urldeploy: 'https://ecommerce-react-34850.vercel.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'website portfolio',
      description:
        'Website created to showcase my work and development as a programmer.',
      // "Web realizada con el fin de mostrar mis trabajos y desarrollo como programador",
      soft: ['html', 'css', 'javascript', 'reactjs', 'sass'],
      media: '/media/projects/project_portfolio.webp',
      urlgit: 'https://github.com/raamgonzalez/portfolio-profile_RG.git',
      urldeploy: 'https://portfolio-profile-rg.vercel.app',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'api met',
      description:
        'Website that retrieves data from the API of the Metropolitan Mstateum of, Art in New York. Project built for practicing API requests.',
      // "Web que toma los datos de la API del mstateo Met, de New York, proyecto realizado para practicar peticiones",
      soft: ['html', 'css', 'javascript', 'react', 'tailwindcss'],
      media: '/media/projects/project_apimet.webp',
      urlgit: 'https://github.com/raamgonzalez/apiMET.git',
      urldeploy:
        'https://api-met.vercel.app/',
      state: true,
      important: true
    },
    {
      id: uuidv4(),
      name: 'landing-page lamparas',
      description:
        'Website created for a full-stack Python programming course.',
      soft: ['html', 'css'],
      media: '/media/projects/project_regulux.webp',
      urlgit:
        'https://github.com/FerBarreyro/TPO-Desarrollo-WEB-Equipo-14-Comisi-n-22523.github.io',
      urldeploy: 'https://reguluxlamp.netlify.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'tienda de camiseta',
      description:
        'Football shirt store website built with vanilla JavaScript.',
      // "Web para tienda de camisetas de futbol realizada en javascript vanilla",
      soft: ['html', 'css', 'javascript'],
      media: '/media/projects/project_camisetasdprimera.webp',
      urlgit: 'https://github.com/raamgonzalez/Ecommerce-Camisetas_Javascript',
      urldeploy: 'https://ecommerce-camisetasde1.netlify.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'todolist',
      description:
        'Todo list application built with Vue and Vite. Works as an app to track tasks.',
      // "Todolist realizado en Vue con Vite. Trabaja como una app para seguir tareas",
      soft: ['html', 'css', 'javascript', 'vue', 'vite'],
      media: '/media/projects/project_todolist.webp',
      urlgit: 'https://weather-app-react-seven-zeta.vercel.app/',
      urldeploy:
        'https://github.com/raamgonzalez/weather-app_react.git',
      state: true
    },
    {
      id: uuidv4(),
      name: 'weather app',
      description:
        'Weather application built with Vue and Vite. It has synchronization with a weather API.',
      // "Aplicación del clima realizado en Vue con Vite. Tiene sincronización con API de clima.",
      soft: ['html', 'css', 'javascript', 'vue', 'vite'],
      media: '/media/projects/project_appclima.webp',
      urlgit: 'https://github.com/raamgonzalez/weather-app_react.git',
      urldeploy:
        'https://weather-app-react-seven-zeta.vercel.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'writeperminute',
      description:
        'Application for practicing writing.',
      // "Aplicación para practicar escritura",
      soft: ['html', 'css', 'javascript', 'react', 'vite', 'framer-motion'],
      media: '/media/projects/project_writeperminute.webp',
      urlgit: 'https://github.com/raamgonzalez/writeperminute',
      urldeploy:
        'https://wordsperminute.vercel.app/',
      state: true,
      important: false
    },
    {
      id: uuidv4(),
      name: 'gifshooot',
      description:
        'GIF search engine that works with the Giphy API.',
      // "Buscador de gifs, trabaja con APi de Giphy",
      soft: ['html', 'css', 'javascript', 'react', 'vite', 'framer-motion'],
      media: '/media/projects/project_gifshooot.webp',
      urlgit: 'https://github.com/raamgonzalez/gifshoot',
      urldeploy:
        'https://gifshoot.vercel.app/',
      state: true,
      important: true
    },
    {
      id: uuidv4(),
      name: 'blog arquitectura',
      description:
        'Architecture blog that includes an admin console and cards featuring architectural works and architects.',
      // "Blog de Arquitectura que contiene una consola de admin y cards con obras de arquitectura y arquitectos.",
      soft: ['html', 'css', 'python', 'django'],
      media: '/media/projects/project_test.webp',
      urlgit: 'https://github.com/raamgonzalez/Ecommerce-Tecnophil_Gonzalez',
      urldeploy:
        '',
      state: false
    },
    {
      id: uuidv4(),
      name: 'timetracking',
      description:
        'Time tracking app, front end mentor challenge',
      soft: ['html', 'css', 'react', 'tailwindcss', 'nextjs'],
      media: './media/projects/project_timetracking.webp',
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
