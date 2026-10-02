import { JobApplication, CandidateProfile, ReminderItem } from '../types/job-os';

export const INITIAL_APPLICATIONS: JobApplication[] = [
  {
    id: 'app-1',
    company: 'Stripe',
    role: 'Staff Frontend Engineer',
    location: 'Remote (US/Americas)',
    status: 'INTERVIEW',
    appliedDate: '2026-09-18',
    updatedDate: '2026-09-28',
    salaryRange: '$210k - $265k',
    activeProfileUsed: 'Staff Systems & UI',
    notes: 'System design completed with Sarah. Recruiter scheduled round 2 on architecture.',
    atsType: 'Greenhouse',
    url: 'stripe.com/jobs/staff-frontend',
  },
  {
    id: 'app-2',
    company: 'Figma',
    role: 'Senior Product Engineer',
    location: 'San Francisco, CA / Hybrid',
    status: 'APPLIED',
    appliedDate: '2026-09-24',
    updatedDate: '2026-09-24',
    salaryRange: '$195k - $240k',
    activeProfileUsed: 'Product Engineer',
    notes: 'Submitted via Ashby. Saved answers for portfolio and recent design system case study.',
    atsType: 'Ashby',
    url: 'figma.com/careers/sr-product-eng',
  },
  {
    id: 'app-3',
    company: 'Vercel',
    role: 'Next.js Framework Engineer',
    location: 'Remote (Global)',
    status: 'OFFER',
    appliedDate: '2026-09-02',
    updatedDate: '2026-09-30',
    salaryRange: '$200k - $250k',
    activeProfileUsed: 'Full-Stack & Systems',
    notes: 'Offer letter received. Team discussion scheduled for Friday regarding start date.',
    atsType: 'Lever',
    url: 'vercel.com/careers/nextjs-framework',
  },
  {
    id: 'app-4',
    company: 'Linear',
    role: 'Desktop & Client Engineer',
    location: 'Remote',
    status: 'SAVED',
    updatedDate: '2026-10-01',
    salaryRange: '$180k - $230k',
    activeProfileUsed: 'Product Engineer',
    notes: 'Extension captured role requirements. Preparing updated desktop app project case study.',
    atsType: 'Generic',
    url: 'linear.app/careers/desktop-client',
  },
  {
    id: 'app-5',
    company: 'Retool',
    role: 'Full-Stack Software Engineer',
    location: 'San Francisco, CA',
    status: 'REJECTED',
    appliedDate: '2026-08-20',
    updatedDate: '2026-09-10',
    activeProfileUsed: 'Full-Stack & Systems',
    notes: 'Role closed internally after position realignment.',
    atsType: 'Greenhouse',
  },
  {
    id: 'app-6',
    company: 'Datadog',
    role: 'Senior Frontend Engineer - Dashboards',
    location: 'New York, NY',
    status: 'WITHDRAWN',
    appliedDate: '2026-08-29',
    updatedDate: '2026-09-15',
    activeProfileUsed: 'Staff Systems & UI',
    notes: 'Withdrawn after Vercel final offer stage.',
    atsType: 'Greenhouse',
  }
];

export const MOCK_PROFILES: CandidateProfile[] = [
  {
    id: 'prof-1',
    name: 'Full-Stack & Systems',
    isDefault: true,
    headline: 'Senior Full-Stack Engineer · Distributed Systems & Web Platforms',
    basics: {
      fullName: 'Alex Vance',
      email: 'alex.vance@quinnverse.dev',
      phone: '+1 (415) 890-4421',
      location: 'San Francisco, CA (US Citizen)',
      website: 'alexvance.dev',
      linkedin: 'linkedin.com/in/alexvance',
      github: 'github.com/alexvance',
    },
    education: [
      {
        school: 'University of Washington',
        degree: 'B.S. Computer Science',
        field: 'Distributed Systems',
        gradYear: '2020',
      }
    ],
    experience: [
      {
        company: 'Cloudflare',
        title: 'Senior Software Engineer',
        period: '2022 - 2025',
        highlights: [
          'Engineered global edge configuration streaming serving 40B requests daily',
          'Reduced p99 client hydration latency by 34% across web workspace'
        ],
      },
      {
        company: 'Square',
        title: 'Software Engineer II',
        period: '2020 - 2022',
        highlights: [
          'Built transaction settlement UI handling $12M daily volume',
          'Authored internal design token library adopted by 25 engineers'
        ],
      }
    ],
    projects: [
      {
        name: 'Deterministic Autofill Engine',
        description: 'AST-based form inspector matching standard ATS fields with strict privacy boundaries.',
        tech: ['TypeScript', 'DOM MutationObserver', 'Chrome Ext V3'],
        link: 'github.com/alexvance/form-engine',
      }
    ],
    skills: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Go', 'Tailwind CSS', 'Docker', 'GraphQL']
  },
  {
    id: 'prof-2',
    name: 'Product Engineer',
    isDefault: false,
    headline: 'Product Engineer · High-Craft Frontend & Human-Centered Tools',
    basics: {
      fullName: 'Alex Vance',
      email: 'alex.vance@quinnverse.dev',
      phone: '+1 (415) 890-4421',
      location: 'San Francisco, CA',
      website: 'alexvance.design',
      linkedin: 'linkedin.com/in/alexvance',
      github: 'github.com/alexvance',
    },
    education: [
      {
        school: 'University of Washington',
        degree: 'B.S. Computer Science',
        field: 'HCI & Software Engineering',
        gradYear: '2020',
      }
    ],
    experience: [
      {
        company: 'Design Systems Lab',
        title: 'Staff Product Engineer',
        period: '2023 - Present',
        highlights: [
          'Led user research and UI implementation for canvas-based layout tools',
          'Achieved 99.8% crash-free sessions across 140k monthly active users'
        ],
      }
    ],
    projects: [
      {
        name: 'Keyboard-First Workspace',
        description: 'Ultra-fast productivity application with command-palette navigation.',
        tech: ['React', 'Zustand', 'Web Worker'],
        link: 'alexvance.design/workspace',
      }
    ],
    skills: ['React', 'TypeScript', 'UI Engineering', 'Accessibility (WCAG)', 'Figma Tokens', 'Next.js']
  }
];

export const MOCK_REMINDERS: ReminderItem[] = [
  {
    id: 'rem-1',
    type: 'INTERVIEW',
    company: 'Stripe',
    role: 'Staff Frontend Engineer',
    dueDate: 'Tomorrow at 10:00 AM PST',
    isCompleted: false,
  },
  {
    id: 'rem-2',
    type: 'FOLLOW_UP',
    company: 'Figma',
    role: 'Senior Product Engineer',
    dueDate: 'Oct 04, 2026 (7 days after apply)',
    isCompleted: false,
  },
  {
    id: 'rem-3',
    type: 'APPLICATION_DEADLINE',
    company: 'Linear',
    role: 'Desktop & Client Engineer',
    dueDate: 'Oct 08, 2026',
    isCompleted: false,
  }
];

export const SAFE_FIELDS = [
  { label: 'First Name', source: 'Basics > Legal First Name', example: 'Alex' },
  { label: 'Last Name', source: 'Basics > Legal Last Name', example: 'Vance' },
  { label: 'Email Address', source: 'Basics > Primary Contact', example: 'alex.vance@quinnverse.dev' },
  { label: 'Phone Number', source: 'Basics > Mobile Phone', example: '+1 (415) 890-4421' },
  { label: 'City & Location', source: 'Basics > Current Residence', example: 'San Francisco, CA' },
  { label: 'LinkedIn Profile', source: 'Basics > Verified Socials', example: 'linkedin.com/in/alexvance' },
  { label: 'GitHub Profile', source: 'Basics > Developer Link', example: 'github.com/alexvance' },
  { label: 'Portfolio URL', source: 'Basics > Personal Website', example: 'alexvance.dev' },
  { label: 'Most Recent Employer', source: 'Experience[0] > Company', example: 'Cloudflare' },
  { label: 'Most Recent Title', source: 'Experience[0] > Title', example: 'Senior Software Engineer' },
  { label: 'Degree & University', source: 'Education[0] > Degree', example: 'B.S. Computer Science, UW' },
  { label: 'Graduation Year', source: 'Education[0] > Year', example: '2020' },
];

export const PROTECTED_FIELDS = [
  { 
    name: 'Demographic & Diversity Surveys', 
    reason: 'Voluntary identity questions (gender, race, veteran status) must never be filled automatically.',
    action: 'Left strictly empty for applicant discretion'
  },
  { 
    name: 'Visa Status & Work Sponsorship', 
    reason: 'Legal authorization requirements vary per region and must be explicitly reviewed and confirmed.',
    action: 'Bypassed by autofill engine; requires manual selection'
  },
  { 
    name: 'Salary Expectations & Currency', 
    reason: 'Negotiation position and local compensation packages require intentional human strategy.',
    action: 'Never pre-filled with automated values'
  },
  { 
    name: 'Criminal & Background Declarations', 
    reason: 'Legally binding compliance declarations require conscious applicant review.',
    action: 'Untouched; manual applicant confirmation'
  },
  { 
    name: 'File Uploads (Resume & Cover Letter PDF)', 
    reason: 'Browser security sandbox strictly restricts automated file system access; ensures correct document version.',
    action: 'Applicant selects file from local device'
  },
  { 
    name: 'Captchas & Human Verification', 
    reason: 'Anti-bot challenges must be solved directly by the candidate.',
    action: 'Strictly manual interaction'
  }
];
