import {
  RiReactjsLine,
  RiNextjsLine,
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNodejsLine
} from 'react-icons/ri'

import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel
} from 'react-icons/si'

export const skills = [
  {
    category: 'Frontend',
    technologies: [
      {
        name: 'React',
        icon: RiReactjsLine
      },
      {
        name: 'Next.js',
        icon: RiNextjsLine
      },
      {
        name: 'TypeScript',
        icon: SiTypescript
      },
      {
        name: 'JavaScript',
        icon: RiJavascriptFill
      },
      {
        name: 'Tailwind CSS',
        icon: RiTailwindCssFill
      }
    ]
  },

  {
    category: 'Backend',
    technologies: [
      {
        name: 'Node.js',
        icon: RiNodejsLine
      },
      {
        name: 'Express',
        icon: SiExpress
      },
      {
        name: 'MongoDB',
        icon: SiMongodb
      }
    ]
  },

  {
    category: 'Herramientas',
    technologies: [
      {
        name: 'Git',
        icon: SiGit
      },
      {
        name: 'GitHub',
        icon: SiGithub
      },
      {
        name: 'Postman',
        icon: SiPostman
      },
      {
        name: 'Vercel',
        icon: SiVercel
      }
    ]
  }
]
