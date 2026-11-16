export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  contribution: string;
  technologies: string[];
  slug: string;
  status: string;
};

export const projects: Project[] = [
  {
    number: '01',
    title: 'Interactive Coding Practice Platform',
    category: 'Full-stack Java application',
    description:
      'A coding practice platform where users can solve programming problems, write and execute Java solutions, submit code against test cases, and track their progress.',
    contribution:
      'Designed and developed the platform, including its backend architecture, authentication, coding workflow, asynchronous execution design, and persistent virtual workspace for algorithm dry-runs and notes.',
    technologies: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'PostgreSQL',
      'RabbitMQ',
      'Redis',
      'Docker',
      'WebSockets',
    ],
    slug: 'online-code-editor',
    status: 'In development',
  },
  {
    number: '02',
    title: 'Pharma ComplaintAI',
    category: 'AI-powered complaint management',
    description:
      'An AI-assisted platform that transforms pharmaceutical complaints and PDF documents into structured records with risk assessment.',
    contribution:
      'Built complaint extraction, risk assessment, correction workflows, and audit tracking using an agent-based processing pipeline.',
    technologies: [
      'React',
      'Redux Toolkit',
      'FastAPI',
      'PostgreSQL',
      'Gemini API',
      'LangGraph',
    ],
    slug: 'pharma-complaint-ai',
    status: 'Completed',
  },
  {
    number: '03',
    title: 'GestureLearn',
    category: 'Real-time collaborative learning',
    description:
      'A collaborative learning platform with live video, audio, chat, and touch-free drawing using hand gestures.',
    contribution:
      'Developed the landing page, dashboard, meeting room interface, authentication APIs, and room creation and joining APIs.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.IO',
      'WebRTC',
      'MediaPipe',
    ],
    slug: 'gesture-learn',
    status: 'Completed',
  },
];
