export type OptionalValue<T> = T | null | undefined

export type Project = {
  title: string
  description?: OptionalValue<string>
  details?: OptionalValue<string>
  status?: OptionalValue<string>
  technologies?: OptionalValue<string[]>
  screenshot?: OptionalValue<{
    src?: OptionalValue<string>
    alt?: OptionalValue<string>
  }>
  githubUrl?: OptionalValue<string>
  liveUrl?: OptionalValue<string>
  highlights?: OptionalValue<string[]>
  challenges?: OptionalValue<string[]>
  featured?: boolean
}

export type SkillGroup = {
  category: string
  skills: OptionalValue<string[]>
}

export type EducationEntry = {
  institution: string
  period: string
  qualification?: OptionalValue<string>
  details?: OptionalValue<string>
}

export type WorkExperience = {
  role: string
  organization: string
  period: string
  description?: OptionalValue<string>
  type?: 'work' | 'internship' | 'freelance' | 'open-source'
}

export type PortfolioConfig = {
  profile: {
    name: string
    title: string
    initials?: OptionalValue<string>
    shortBio: string
    careerGoal: string
    interests: string[]
    email?: OptionalValue<string>
    githubUrl?: OptionalValue<string>
    linkedinUrl?: OptionalValue<string>
    cvPath?: OptionalValue<string>
    location?: OptionalValue<string>
  }
  seo: {
    title: string
    description: string
  }
  copy: {
    heroHeadline: string
    heroAccent: string
    aboutHeadline: string
    aboutBiography: OptionalValue<string[]>
    aboutInterestLabel: string
    aboutValues: OptionalValue<Array<{ title: string; description: string }>>
    skillsHeadline: string
    skillsDescription: string
    projectsHeadline: string
    projectsDescription: string
    educationHeadline: string
    educationDescription: string
    experienceHeadline: string
    experienceDescription: string
    contactHeadline: string
    contactMessage: string
  }
  skills: OptionalValue<SkillGroup[]>
  education: OptionalValue<EducationEntry[]>
  experience: OptionalValue<WorkExperience[]>
  projects: OptionalValue<Project[]>
}

export const portfolio: PortfolioConfig = {
  profile: {
    name: 'Oleksandr Dmytruk',
    title: 'Junior Full-Stack Developer',
    initials: 'OD',
    shortBio:
      'I’m interested in modern JavaScript and TypeScript development, React, Tailwind CSS, and building full-stack web applications.',
    careerGoal:
      'Seeking junior software engineering opportunities in Europe and internationally.',
    interests: [
      'Modern JavaScript and TypeScript',
      'React',
      'Tailwind CSS',
      'Full-stack web applications',
    ],
    email: null,
    githubUrl: 'https://github.com/runpy21',
    linkedinUrl: null,
    cvPath: null,
    location: null,
  },
  seo: {
    title: 'Oleksandr Dmytruk — Junior Full-Stack Developer',
    description:
      'Portfolio of Oleksandr Dmytruk, a junior full-stack developer interested in JavaScript, TypeScript, React, and web application development.',
  },
  copy: {
    heroHeadline: 'Hi, I’m Oleksandr',
    heroAccent: 'Dmytruk.',
    aboutHeadline: 'Learning by building for the web.',
    aboutBiography: [
      'I’m a junior full-stack developer focused on modern JavaScript and TypeScript web development. I’m interested in building web applications with React and contemporary frontend tooling.',
      'I’m continuing to develop my skills through personal projects and learning, including participation in Full Stack Open. I’m looking for a software development opportunity in Europe or with an international team.',
    ],
    aboutInterestLabel: 'Areas of interest',
    aboutValues: [
      {
        title: 'Keep learning',
        description:
          'Build understanding through study, experimentation, and personal projects.',
      },
      {
        title: 'Build with care',
        description:
          'Focus on clear, maintainable code and thoughtful user experiences.',
      },
      {
        title: 'Work collaboratively',
        description:
          'Contribute with curiosity, communication, and an open mind.',
      },
    ],
    skillsHeadline: 'Technologies in my current toolkit.',
    skillsDescription:
      'A focused selection of languages, frameworks, data tools, and testing practices from my current toolkit.',
    projectsHeadline: 'A project in progress.',
    projectsDescription:
      'I’m currently developing a Job Tracker application. I’ll add verified implementation details as the project takes shape.',
    educationHeadline: 'Education & ongoing learning.',
    educationDescription:
      'Institutions and dates are shown as provided. No degree titles or completion status have been inferred.',
    experienceHeadline: 'Professional experience.',
    experienceDescription:
      'Work history can be added here when you choose to share verified details.',
    contactHeadline: 'Let’s connect.',
    contactMessage:
      'For now, GitHub is the contact destination I have chosen to share.',
  },
  skills: [
    {
      category: 'Languages & web',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      category: 'Frontend',
      skills: [
        'React',
        'React Hooks',
        'React Context API',
        'Zustand',
        'TanStack Query',
        'React Router',
        'Tailwind CSS',
      ],
    },
    {
      category: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Data',
      skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'SQL'],
    },
    {
      category: 'Testing & tools',
      skills: [
        'Jest',
        'React Testing Library',
        'Playwright',
        'ESLint',
        'Vite / esbuild',
        'Git',
        'GitHub',
        'GitHub Actions',
        'Docker',
      ],
    },
  ],
  education: [
    {
      institution: 'Full Stack Open, University of Helsinki',
      period: '2026',
    },
    {
      institution: 'Khmelnytskyi National University',
      period: '2021–2024',
    },
    {
      institution: 'Khmelnytskyi Polytechnic College',
      period: '2017–2021',
    },
  ],
  experience: [],
  projects: [
    {
      title: 'Job Tracker',
      description:
        'A personal project currently in development. Details about features, implementation, and technologies will be added when confirmed.',
      status: 'In development',
      technologies: [],
      screenshot: null,
      githubUrl: null,
      liveUrl: null,
      highlights: [],
      challenges: [],
      featured: true,
    },
  ],
}

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
