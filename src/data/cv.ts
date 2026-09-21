/**
 * CV Structured Data Configuration
 *
 * Centralized data store for CV sections including Education, Internships,
 * Honors & Fellowships, Academic Service, and Skills.
 * Text fields (except `period`) support full inline Markdown formatting (links, bold, italics, KaTeX math).
 */

export interface EducationItem {
  period: string;
  institution: string;
  degree: string;
  advisor?: string;
}

export interface InternshipItem {
  period: string;
  organization: string;
  role: string;
  project?: string;
  advisor?: string;
}

export interface HonorItem {
  period: string;
  title: string;
  institution?: string;
}

export interface ServiceItem {
  period: string;
  role: string;
  event: string;
  institution: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const cvPdfUrl = 'https://cdn.arghyac.com/cv.pdf';

export const education: EducationItem[] = [
  {
    period: 'July 2024 – Present',
    institution: 'Indian Institute of Technology Bombay',
    degree: 'Master of Science by Research, Computer Science & Engineering',
    advisor: '[Prof. Mythili Vutukuru](https://www.cse.iitb.ac.in/~mythili/)',
  },
  {
    period: 'July 2022 – May 2024',
    institution: 'Chennai Mathematical Institute',
    degree: 'Master of Science, Computer Science',
    advisor: '[Prof. Prajakta Nimbhorkar](https://www.cmi.ac.in/~prajakta/)',
  },
  {
    period: 'July 2019 – May 2022',
    institution: 'Indian Statistical Institute, Bangalore Centre',
    degree: 'Bachelor of Mathematics (Honours)',
  },
];

export const internships: InternshipItem[] = [
  {
    period: 'Summer 2025',
    organization: 'National University of Singapore (NUS)',
    role: 'Research Intern',
    project:
      '[Modular MAC Scheduling in OpenAirInterface 5G RAN](/portfolio/mac-scheduling/)',
    advisor: '[Prof. Chan Mun Choon](https://www.comp.nus.edu.sg/~chanmc/)',
  },
  {
    period: 'Summer 2024',
    organization: 'Subconscious Compute',
    role: 'Systems Engineering Intern',
    project: '[Shepherd Browser Extension](/portfolio/shepherd-extension/)',
  },
  {
    period: 'Summer 2023',
    organization: 'Subconscious Compute',
    role: 'Systems Engineering Intern',
    project: '[Summer at Subconscious Compute](/portfolio/summer-at-subcom/)',
  },
  {
    period: 'Summer 2022',
    organization: 'Willis Towers Watson',
    role: 'Software Engineering Intern',
    project:
      '[Automated Ticket Classification & Triaging](/portfolio/ticket-classification/)',
  },
];

export const honors: HonorItem[] = [
  {
    period: '2025 – 2026',
    title: 'Mirae Asset Foundation Scholarship',
    institution: 'IIT Bombay',
  },
  {
    period: '2025',
    title: 'Ranked 2nd in Class, First Year of MS',
    institution: 'IIT Bombay',
  },
  {
    period: '2022 – 2024',
    title: 'Infosys Foundation and Shriram Group Scholarships',
    institution: 'CMI',
  },
];

export const service: ServiceItem[] = [
  {
    period: '2024 – 2025',
    role: 'Technical Programme Committee',
    event:
      '[RISC](https://www.cse.iitb.ac.in/~risc/2025/) (CSE Research Symposium)',
    institution: 'IIT Bombay',
  },
  {
    period: '2023 – 2024',
    role: 'Tech Lead',
    event:
      '[STEMS](https://tessellate.cmi.ac.in/stems/) (National Math & CS Contest)',
    institution: 'CMI',
  },
  {
    period: '2019 – 2022',
    role: 'Tech Lead & Organizer',
    event: '[LIMIT](https://www.limitisi.in) (National Math Competition)',
    institution: 'ISI Bangalore',
  },
];

export const skills: SkillCategory[] = [
  {
    category: 'Cellular Systems',
    skills: [
      'OpenAirInterface (OAI)',
      'srsRAN (OCUDU)',
      'Open5GS',
      'GNU Radio',
    ],
  },
  {
    category: 'Systems & Networking',
    skills: [
      'Linux Kernel Programming',
      'eBPF',
      'AF_XDP',
      'Docker',
      'Kubernetes',
      'Wireshark',
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      'Rust',
      'C/C++',
      'Go',
      'Python',
      'Haskell',
      'Coq',
      'TypeScript/JavaScript',
      'Bash',
      'SQL',
      'LaTeX',
    ],
  },
  {
    category: 'Spoken Languages',
    skills: [
      'English (Fluent)',
      'Bengali (Native)',
      'Hindi (Fluent)',
      'German (Elementary)',
    ],
  },
];
