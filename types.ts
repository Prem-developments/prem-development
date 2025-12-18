
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'devops' | 'soft';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
