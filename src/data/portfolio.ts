import {
  Check,
  Code2,
  Layers3,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import type {
  Achievement,
  EducationEntry,
  ExperienceEntry,
  NavigationItem,
  Project,
  SkillGroup,
} from '../types/portfolio'

export const personal = {
  name: 'Pardeep Kumar',
  title: 'Senior Full Stack Engineer',
  experience: '9+ years',
  email: 'devpardeepkumar60@gmail.com',
  linkedin: 'https://linkedin.com/in/pardeep-kumar-423351330',
  github: 'https://github.com/devpardeepkumar',
  location: 'India',
  resume: '/Pardeep-Kumar-Resume.pdf',
}
export const currentYear = new Date().getFullYear()

export const navigation: NavigationItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
]

export const projects: Project[] = [
  {
    name: 'Noodle Factory',
    type: 'AI · Education',
    number: '01',
    description:
      'AI-powered education platform serving students and educators.',
    outcomes: [
      'Led a team of 7 developers',
      'Built scalable dashboards and analytics',
      'Integrated AI-driven workflows for 10,000+ active users',
    ],
    technologies: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    tone: 'violet',
    image: '/images/noodle-factory.jpg',
    link: 'https://www.noodlefactory.ai/',
  },
  {
    name: 'The Auto Parts Shop',
    type: 'E-commerce',
    number: '04',
    description:
      'Automotive e-commerce platform providing product catalogs, search, filtering, and online shopping functionality.',
    outcomes: [
      'Built scalable product catalog architecture',
      'Optimized search and filtering performance',
      'Enhanced checkout workflows and API integrations across 48 US states',
    ],
    technologies: [
      'React',
      'TypeScript',
      'CSS',
      'HTML',
      'Webpack',
      'Node.js',
      'MongoDB',
    ],
    tone: 'orange',
    image: '/images/auto.jpg',
    link: 'https://www.theautopartsshop.com/',
  },
  {
    name: 'Ancestry',
    type: 'Genealogy · Family History',
    number: '05',
    description:
      'Genealogy and historical records platform that helps users explore family history, build family trees, and discover ancestral origins.',
    outcomes: [
      'Developed family history discovery experiences',
      'Built interactive family tree interfaces',
      'Integrated historical records and genealogy data workflows',
    ],
    technologies: ['React', 'Node.js', 'MongoDB'],
    tone: 'violet',
    image: '/images/ancestry.png',
    link: 'https://www.ancestry.com/',
  },
  {
    name: 'Well Suited',
    type: 'AI · Recruitment',
    number: '06',
    description:
      'AI-powered recruitment platform designed to streamline hiring workflows and improve candidate management.',
    outcomes: [
      'Built candidate evaluation workflows and recruiter/employer dashboards',
      'Automated onboarding and hiring pipelines',
      'Reduced recruitment bias through AI-assisted evaluation',
    ],
    technologies: ['React', 'JavaScript', 'Supabase'],
    tone: 'blue',
    image: '/images/suited.png',
    link: 'https://wellsuited.com/',
  },
  {
    name: 'Style Me Pretty',
    type: 'Content · Lifestyle',
    number: '07',
    description:
      'Lifestyle and wedding inspiration platform focused on content discovery and user engagement.',
    outcomes: [
      'Built content discovery and browsing experiences',
      'Developed responsive lifestyle content interfaces',
      'Improved content engagement and user experience',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'MySQL',
    ],
    tone: 'violet',
    image: '/images/stylemepretty.png',
    link: 'https://www.stylemepretty.com/',
  },
 
  {
    name: 'Shadowfax',
    type: 'Logistics',
    number: '09',
    description:
      'Logistics and delivery management platform.',
    outcomes: [
      'Built real-time tracking interfaces',
      'Improved delivery workflow efficiency',
      'Reduced query times by 40% and optimized frontend performance',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
    tone: 'orange',
    image: '/images/shadowfax.png',
    link: 'https://shadowfax.in/',
  },
   {
    name: 'Needs Grocery Shopping & Delivery App',
    type: 'Mobile · E-commerce',
    number: '02',
    description:
      'Grocery shopping and delivery mobile application built using React Native for iOS and Android, providing product browsing, cart management, order placement, delivery tracking, and secure payments.',
    outcomes: [
      'Handled complete end-to-end mobile application development',
      'Built intuitive grocery shopping and checkout experiences',
      'Integrated REST APIs, Redux state management, and Firebase services',
      'Managed application architecture, frontend UI, and app store deployment',
    ],
    technologies: [
      'React Native',
      'JavaScript',
      'Redux',
      'REST API',
      'Firebase',
    ],
    tone: 'orange',
     image: '/images/needss.jpg',
    link: 'https://play.google.com/store/apps/details?id=app.needscustomer&hl=en_IN',
  },
  {
    name: 'Guild',
    type: 'Web3 · Community Management',
    number: '03',
    description:
      'Token-gated community management platform that enables communities to manage memberships, access control, and community engagement through blockchain-based integrations.',
    outcomes: [
      'Developed responsive community dashboards using React',
      'Collaborated with frontend and backend developers on platform enhancements',
      'Integrated Cloudflare services for website performance and security',
      'Implemented Open Graph metadata and Cloudflare Browser Insights',
    ],
    technologies: [
      'React',
      'Cloudflare',
      'Cloudflare Browser Insights',
      'Open Graph',
    ],
    tone: 'blue',
    image: '/images/guild.png',
    link: 'https://guild.xyz/',
  },
  {
    name: 'Dune Analytics',
    type: 'Web3 · Data Analytics',
    number: '08',
    description:
      'Blockchain analytics and reporting platform providing interactive data visualizations, analytics dashboards, and insights into blockchain activity.',
    outcomes: [
      'Developed interactive data visualization interfaces and analytics dashboards',
      'Collaborated with frontend and backend developers on platform enhancements',
      'Optimized frontend performance for large datasets',
      'Integrated AWS, HubSpot, and Cloudflare services',
    ],
    technologies: [
      'React',
      'Next.js',
      'Cloudflare',
      'Cloudflare Browser Insights',
      'Open Graph',
      'AWS',
      'HubSpot',
    ],
    tone: 'blue',
    image: '/images/dune.png',
    link: 'https://dune.com/home',
  },
  {
    name: 'Juicebox',
    type: 'Web3 · Decentralized Finance',
    number: '10',
    description:
      'Decentralized fundraising and treasury management platform built around the Juicebox Protocol, enabling projects to manage funding, treasuries, and blockchain-based financial workflows.',
    outcomes: [
      'Developed responsive interfaces using React and Next.js',
      'Collaborated with frontend and backend developers on platform enhancements',
      'Integrated wallet connectivity and smart contract functionalities',
      'Built treasury tracking dashboards to improve blockchain transaction workflows',
    ],
    technologies: [
      'React',
      'Next.js',
      'Open Graph',
    ],
    tone: 'violet',
    image: '/images/juice.jpg',
    link: 'https://juicebox.money/',
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: 'Independent Consultant',
    role: 'Freelance Full Stack Engineer · Remote',
    date: 'Jun 2024 — Present',
    detail: 'Architects and develops SaaS platforms, mobile applications, AI-powered products, and enterprise web applications. Works directly with startup founders and business stakeholders on product roadmaps and technical architecture, delivering full-cycle development from discovery through deployment and scaling. Builds AI integrations using OpenAI and modern LLM tooling.',
    tags: ['SaaS platforms', 'Mobile applications', 'OpenAI integrations'],
  },
  {
    company: 'Neebha Technologies',
    role: 'Full Stack Developer',
    date: 'Sep 2020 — Jun 2024',
    detail: 'Led enterprise web application development with React, Next.js, Node.js, and MongoDB, and designed scalable backend services and APIs supporting thousands of users. Implemented payment gateways, CRM integrations, and automation workflows; mentored junior developers and collaborated with UI/UX, QA, and project management teams across healthcare, logistics, eCommerce, education, and HR projects.',
    tags: ['React · Next.js · Node.js · MongoDB', 'Payments and CRM', 'Mentoring'],
  },
  {
    company: 'PROGIS',
    role: 'Full Stack Developer',
    date: 'Jan 2016 — Aug 2020',
    detail: 'Built full-stack software solutions for domestic and international clients, including frontend applications, backend services, and database architectures. Worked across the software development lifecycle from planning to deployment, optimizing performance and improving system scalability.',
    tags: ['Frontend applications', 'Backend services', 'Database architecture'],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    name: 'Frontend',
    icon: Code2,
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'TanStack Query', 'Tailwind CSS', 'Chakra UI', 'Material UI', 'shadcn/ui', 'React Native', 'Expo'],
  },
  {
    name: 'Backend',
    icon: Layers3,
    skills: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'Laravel', '.NET', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'Databases & BaaS',
    icon: Sparkles,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase', 'Appwrite'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Layers3,
    skills: ['AWS', 'Google Cloud Platform', 'Vercel', 'Docker', 'GitHub Actions', 'CI/CD', 'Sentry'],
  },
  {
    name: 'AI',
    icon: Sparkles,
    skills: ['OpenAI API', 'LangChain', 'Pinecone', 'Vector Databases', 'RAG Systems', 'AI Agents'],
  },
  {
    name: 'Web3',
    icon: MessageCircle,
    skills: ['Ethereum', 'Ethers.js', 'Web3.js', 'WalletConnect', 'Wagmi', 'RainbowKit', 'ERC-20', 'ERC-721', 'Smart Contract Integrations', 'Token-Gated Systems'],
  },
  {
    name: 'Testing',
    icon: Check,
    skills: ['Jest', 'React Testing Library'],
  },
  {
    name: 'Integrations & Payments',
    icon: MessageCircle,
    skills: ['Stripe', 'PayPal', 'Twilio', 'SendGrid', 'HubSpot', 'GoHighLevel'],
  },
]

export const achievements: Achievement[] = [
  { value: '1M+', count: 1, label: 'products in an enterprise catalog' },
  { value: '48', count: 48, label: 'US states served by commerce operations' },
  { value: '10K+', count: 10, label: 'daily active users across applications' },
  { value: '7', count: 7, label: 'developers led on a product team' },
  { value: '40%', count: 40, label: 'reduction in query times' },
  { value: '35%', count: 35, label: 'improvement in Medical Dialogues retention' },
]

export const education: EducationEntry[] = [
  {
    date: '2014 — 2016',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Thapar Institute of Engineering & Technology',
  },
  {
    date: '2011 — 2014',
    degree: 'Bachelor of Computer Science',
    institution: 'Kurukshetra University',
  },
]

export const industries = [
  'FinTech', 'AI', 'SaaS', 'Web3', 'Healthcare', 'HRTech', 'Logistics',
  'E-Commerce', 'EdTech', 'Real Estate', 'Travel', 'Social Platforms',
  'Cybersecurity', 'Crowdfunding', 'Automotive', 'Food & Grocery',
]
