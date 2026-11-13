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
    title: 'Pharma ComplaintAI',
    category: 'AI-powered complaint management',
    description:
      'A complaint management platform for pharmaceutical quality teams, designed to turn natural-language complaints and PDF documents into structured, actionable records.',
    contribution:
      'Built complaint extraction, risk assessment, and correction workflows using an agent-based pipeline with structured outputs and audit tracking.',
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
    number: '02',
    title: 'Online Code Editor',
    category: 'Developer tools',
    description:
      'An online coding platform being extended with a virtual workspace, giving users a more persistent environment to work on their code.',
    contribution:
      'Working on the virtual workspace feature, with a focus on workspace persistence and reliable background processing.',
    technologies: [
      'Virtual workspace',
      'Workspace persistence',
      'Background processing',
    ],
    slug: 'online-code-editor',
    status: 'In development',
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
    slug: 'gesturelearn',
    status: 'In development',
  },
];
