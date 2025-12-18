
import { Project, Experience, Skill, Education, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: 'Premchand',
  role: 'Full Stack Developer',
  tagline: 'Building robust, scalable web applications with modern technologies.',
  about: 'I am a dedicated Full Stack Developer with a strong foundation in frontend technologies and evolving expertise in backend systems. I specialize in building performant, user-centric applications using the Next.js ecosystem.',
  email: 'premdevelopments8@gmail.com',
  socials: {
    github: 'https://github.com/Prem-developments',
    linkedin: 'https://linkedin.com/in/premchand',
    twitter: 'https://twitter.com/premchand_dev'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'cleaning',
    title: 'Elite Cleaning Solutions',
    description: 'A premium residential and commercial cleaning platform with real-time booking, service customization, and high-conversion UI.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React Hook Form'],
    imageUrl: 'https://www.rbcclean.com/wp-content/uploads/2025/03/shutterstock_2453839265-1.jpg',
    liveUrl: '#cleaning'
  },
  {
    id: 'plumber',
    title: 'Rapid Flow Plumbing',
    description: 'Modern plumbing service interface featuring 24/7 emergency scheduling, service calculators, and interactive maintenance guides.',
    tech: ['Next.js', 'TypeScript', 'Stripe API', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800&auto=format&fit=crop',
    liveUrl: '#plumber'
  },
  {
    id: 'electrician',
    title: 'Volt Master Electricians',
    description: 'High-end electrical contractor landing page emphasizing safety compliance, industrial capability, and smart home integration.',
    tech: ['Next.js', 'Sanity.io', 'Tailwind', 'Google Maps API'],
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
    liveUrl: '#electrician'
  },
  {
    id: 'roofing',
    title: 'Summit Peak Roofing',
    description: 'Premium roofing website showcasing multi-layered durability, advanced material visualizers, and project estimation tools.',
    tech: ['Next.js', 'Three.js', 'Tailwind CSS', 'Node.js'],
    imageUrl: 'https://info.firstqualityroof.com/hs-fs/hubfs/Blog_images/5%20Benefits%20of%20a%20professional%20roofing%20contractor.jpg?width=900&name=5%20Benefits%20of%20a%20professional%20roofing%20contractor.jpg',
    liveUrl: '#roofing'
  },
  {
    id: 'detailing',
    title: 'AutoGlow Detailing',
    description: 'Luxury automotive detailing landing page featuring ceramic coating visualizers, mobile booking, and premium service tiers.',
    tech: ['Next.js', 'Shadcn UI', 'Prisma', 'Supabase'],
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop',
    liveUrl: '#detailing'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    company: 'Tech Solutions',
    role: 'Full Stack Developer',
    duration: '2023 – Present',
    description: [
      'Working as a full stack developer using Next.js, Node.js, Express, MongoDB, and REST APIs.',
      'Responsible for both frontend and backend development, integrating databases, and deploying production-ready web applications.'
    ]
  },
  {
    id: 'e2',
    company: 'Creative Web Agency',
    role: 'Frontend Developer',
    duration: '2021 – 2023',
    description: [
      'Worked on building responsive, user-friendly web interfaces using React.js, Next.js, HTML, CSS, and JavaScript.',
      'Collaborated with designers and backend developers to implement UI/UX designs.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express.js', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 85, category: 'backend' },
  { name: 'REST APIs', level: 90, category: 'backend' }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'BBSUL',
    year: '2023 - Present',
    description: 'Currently pursuing advanced studies in software engineering principles and modern web architecture.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Lead',
    content: 'Premchand is a talented developer who delivers clean, efficient code and understands the full product lifecycle.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];
