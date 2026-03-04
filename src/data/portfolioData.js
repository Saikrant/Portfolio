import {
    FiCode,
    FiBarChart2,
    FiPenTool,
    FiCpu,
} from 'react-icons/fi';

export const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

export const roleRotatorItems = [
    'Full-Stack Engineer',
    'Data Analyst',
    'UI/UX Designer',
    'AI Builder',
];

export const marqueeItems = [
    'REACT', 'TYPESCRIPT', 'ASP.NET CORE', 'PYTHON', 'POWER BI',
    'FIGMA', 'LANGCHAIN', 'SQL', 'AZURE', 'DOCKER', 'TABLEAU',
    'VUE.JS', 'STORYBOOK', 'RAG PIPELINES', 'KUBERNETES', 'ADOBE XD',
];

export const statsData = [
    { number: 4, suffix: '+', label: 'Years' },
    { number: 15, suffix: '+', label: 'Projects' },
    { number: 3.8, suffix: '', label: 'GPA' },
    { number: 4, suffix: '', label: 'Domains' },
];

export const pillarsData = [
    {
        number: '01',
        icon: FiCode,
        title: 'Software Engineering',
        description: 'Enterprise React + TypeScript component libraries, ASP.NET Core REST APIs, design systems serving 5+ product teams.',
        tools: ['React', 'C#', 'ASP.NET'],
    },
    {
        number: '02',
        icon: FiBarChart2,
        title: 'Data Analytics',
        description: 'End-to-end SQL pipelines, Python analytics, Power BI dashboards. 500K+ record anomaly detection. 30% reporting accuracy improvement.',
        tools: ['Python', 'Power BI', 'SQL'],
    },
    {
        number: '03',
        icon: FiPenTool,
        title: 'UI/UX Design',
        description: 'Figma design systems, pixel-perfect Dev Mode handoffs, WCAG 2.1 AA accessibility, Storybook documentation for 20+ components.',
        tools: ['Figma', 'Storybook', 'SCSS'],
    },
    {
        number: '04',
        icon: FiCpu,
        title: 'AI & LLM Engineering',
        description: 'RAG pipelines with LangChain, vector + SQL hybrid search, contextual AI engines. Published research on AI-driven analytics.',
        tools: ['LangChain', 'Python', 'BigQuery'],
    },
];

export const projectsData = [
    {
        number: '01',
        category: 'Mobile App',
        title: 'Cricket Scorer',
        description: 'Real-time cricket scoring mobile application with ball-by-ball tracking, live scoreboard, player statistics, and match analytics. Built for seamless on-field scoring during club and tournament matches.',
        tags: ['React Native', 'JavaScript', 'Mobile', 'Real-time'],
        gradient: 'linear-gradient(135deg, #0a2e1a, #134d2e, #1a6b3a)',
        icon: '🏏',
        image: '/projects/cricket-scorer.png',
        github: 'https://github.com/Saikrant/cricket-scorer-mobile',
        featured: true,
    },
    {
        number: '02',
        category: 'Business Website',
        title: 'Sri Sampatti Enterprises',
        description: 'Professional business website for a leading uPVC manufacturing company. Responsive design with product showcases, service catalogs, and contact integration — driving real client inquiries and brand visibility.',
        tags: ['React', 'Tailwind CSS', 'Responsive', 'SEO'],
        gradient: 'linear-gradient(135deg, #2d1810, #5c3420, #8b4c30)',
        icon: '🏗️',
        image: '/projects/sri-sampatti.png',
        github: 'https://github.com/Saikrant/SriSampattiEnterprises',
        live: 'https://srisampattienterprises.pages.dev/',
        featured: true,
    },
    {
        number: '03',
        category: 'SaaS / Startup',
        title: 'ThrivvSkale',
        description: 'High-performance SaaS startup website with fluid Framer Motion animations, modern glassmorphism UI, and conversion-optimized landing pages. Showcasing business growth services with a premium digital presence.',
        tags: ['React', 'Framer Motion', 'Tailwind CSS', 'UI/UX'],
        gradient: 'linear-gradient(135deg, #1a0a2e, #2d1854, #4a2080)',
        icon: '🚀',
        image: '/projects/thrivscale.png',
        github: 'https://github.com/Saikrant/thriveskale',
        live: 'https://thrivvskale.com',
        featured: true,
    },
    {
        number: '04',
        category: 'Data Analytics',
        title: 'Power BI Sales Dashboard',
        description: 'Interactive analytics dashboard processing sales data with dynamic KPI cards, revenue trend analysis, customer demographics segmentation, and geographic heat maps. Reduced manual reporting effort by 30%.',
        tags: ['Power BI', 'SQL', 'DAX', 'Data Viz'],
        gradient: 'linear-gradient(135deg, #0d1b2a, #1b3a5c, #2a5a8c)',
        icon: '📊',
        github: 'https://github.com/Saikrant/PowerBI-Dashboard',
        featured: false,
    },
    {
        number: '05',
        category: 'Machine Learning',
        title: 'Lead Scoring Case Study',
        description: 'End-to-end ML pipeline for predictive lead scoring — EDA, feature engineering, model training, and evaluation. Logistic regression achieving 80%+ accuracy with interpretable feature importance analysis.',
        tags: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
        gradient: 'linear-gradient(135deg, #1a1a2e, #2e2e4a, #424266)',
        icon: '🧠',
        github: 'https://github.com/Saikrant/Lead_Score_Casestudy',
        featured: false,
    },
];

export const experienceData = [
    {
        company: 'Collins Aerospace',
        role: 'Software Engineer / Data Analyst',
        date: 'Nov 2022 – Aug 2024',
        location: 'Bangalore, India',
        bullets: [
            'Built React + TypeScript UI component library for 5+ enterprise teams',
            'Translated Figma Dev Mode specs to pixel-perfect SASS/SCSS components',
            'Built ASP.NET Core + SQL Server REST APIs for production workflows',
            'Power BI dashboards + Python analytics reducing data lookup by 30%',
        ],
        chips: ['React', 'TypeScript', 'C#', 'ASP.NET', 'Power BI', 'Figma', 'Azure'],
    },
    {
        company: 'Starmark Software',
        role: 'Associate Software Engineer',
        date: 'Aug 2021 – Nov 2022',
        location: 'Bangalore, India',
        bullets: [
            'Reusable React + TypeScript UI libraries across 3+ client projects',
            'Figma prototype review, technical feasibility, design handoffs',
            'REST APIs in C# + SQL Server integrated with frontend',
        ],
        chips: ['React', 'SCSS', 'C#', 'SQL', 'Figma'],
    },
    {
        company: 'Traxeat',
        role: 'UI Engineer Intern',
        date: 'June 2020 – May 2021',
        location: 'Bangalore, India',
        bullets: [
            'Figma Inspect → pixel-accurate HTML5/CSS3/React components',
            'All interactive states: hover, focus, active, disabled',
        ],
        chips: ['Figma', 'HTML5', 'CSS3', 'React'],
    },
];

export const educationData = [
    {
        school: 'Colorado State University',
        degree: 'M.S. Computer Information Systems',
        gpa: 'GPA: 3.8',
        date: 'Aug 2024 – Dec 2025',
        location: 'Fort Collins, CO',
    },
    {
        school: 'KLE Institute of Technology',
        degree: 'B.S. Information Science',
        gpa: '',
        date: 'May 2017 – June 2021',
        location: 'Hubli, India',
    },
];

export const skillsData = [
    {
        category: 'Languages & Frontend',
        skills: ['TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'SASS/SCSS', 'Python', 'C#', 'SQL'],
    },
    {
        category: 'Frameworks & Libraries',
        skills: ['React', 'Angular', 'Vue.js', 'ASP.NET Core', 'Node.js', 'LangChain', 'Web Components', 'Redux', 'Express.js'],
    },
    {
        category: 'Data & AI',
        skills: ['Power BI', 'Tableau', 'Pandas', 'Scikit-learn', 'BigQuery', 'Snowflake', 'RAG Pipelines', 'Vector Search'],
    },
    {
        category: 'Design & DevOps',
        skills: ['Figma (Dev Mode)', 'Adobe XD', 'Storybook', 'WCAG 2.1 AA', 'Azure DevOps', 'Docker', 'Kubernetes', 'Git', 'Jest'],
    },
];
