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
    name: 'Auto Parts Shop',
    type: 'Enterprise commerce',
    number: '01',
    description: 'Enterprise eCommerce platform managing over 1 million automotive products.',
    outcomes: ['Built scalable product catalog architecture', 'Optimized search and filtering performance', 'Enhanced checkout workflows and API integrations across 48 US states'],
    technologies: ['React', 'Node.js', 'MongoDB', 'APIs'],
    tone: 'lime',
  },
  {
    name: 'WellSuited',
    type: 'AI · Recruitment',
    number: '02',
    description: 'AI-powered recruitment platform designed to improve hiring outcomes.',
    outcomes: ['Built candidate evaluation workflows and recruiter/employer dashboards', 'Automated onboarding and hiring pipelines', 'Reduced recruitment bias through AI-assisted evaluation'],
    technologies: ['Next.js', 'Node.js', 'OpenAI', 'PostgreSQL'],
    tone: 'blue',
  },
  {
    name: 'Noodle Factory',
    type: 'AI · Education',
    number: '03',
    description: 'AI-powered education platform serving students and educators.',
    outcomes: ['Led a team of 7 developers', 'Built scalable dashboards and analytics', 'Integrated AI-driven workflows for 10,000+ active users'],
    technologies: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    tone: 'violet',
  },
  {
    name: 'Shadowfax',
    type: 'Logistics',
    number: '04',
    description: 'Logistics and delivery management platform.',
    outcomes: ['Built real-time tracking interfaces', 'Improved delivery workflow efficiency', 'Reduced query times by 40% and optimized frontend performance'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    tone: 'orange',
  },
  {
    name: 'Guild.xyz',
    type: 'Web3 · Community',
    number: '05',
    description: 'Token-gated community management platform.',
    outcomes: ['Integrated wallet authentication', 'Built token-based access control systems', 'Integrated blockchain data and developed community dashboards'],
    technologies: ['React', 'Next.js', 'Ethers.js', 'Ethereum'],
    tone: 'blue',
  },
  {
    name: 'Dune Analytics',
    type: 'Web3 · Analytics',
    number: '06',
    description: 'Blockchain analytics and reporting platform.',
    outcomes: ['Built data visualization interfaces and analytics dashboard components', 'Optimized performance for large datasets', 'Developed blockchain reporting experiences'],
    technologies: ['React', 'PostgreSQL', 'Analytics Systems'],
    tone: 'violet',
  },
  {
    name: 'Juicebox Protocol',
    type: 'Web3 · Fintech',
    number: '07',
    description: 'Decentralized fundraising and treasury management platform.',
    outcomes: ['Integrated wallet connectivity and smart contracts', 'Built treasury tracking dashboards', 'Implemented blockchain transaction workflows'],
    technologies: ['Next.js', 'Ethereum', 'Ethers.js'],
    tone: 'orange',
  },
  {
    name: 'Viva Life',
    type: 'Healthcare · Mobile',
    number: '08',
    description: 'Healthcare mobile application for medical records and diagnostics.',
    outcomes: ['HIPAA-compliant architecture', 'Secure storage and biometric authentication', 'Real-time synchronization with healthcare systems'],
    technologies: [],
    tone: 'lime',
  },
  {
    name: 'Ask Mom',
    type: 'Consumer · Discovery',
    number: '09',
    description: 'Restaurant recommendation platform scaled to 100K+ users.',
    outcomes: ['Built location-aware recommendations', 'Created a conversational user experience'],
    technologies: [],
    tone: 'orange',
  },
  {
    name: 'Voizo',
    type: 'Social · Real time',
    number: '10',
    description: 'Voice-first social networking application.',
    outcomes: ['Implemented real-time WebRTC communication', 'Built low-latency voice chat architecture', 'Led frontend and backend development'],
    technologies: [],
    tone: 'blue',
  },
  {
    name: 'Medical Dialogues',
    type: 'Healthcare · Media',
    number: '11',
    description: 'Healthcare media platform.',
    outcomes: ['Integrated video streaming', 'Built personalized content feeds', 'Improved user retention by 35%'],
    technologies: [],
    tone: 'violet',
  },
]

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
