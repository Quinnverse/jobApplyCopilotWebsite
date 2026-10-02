export type ApplicationStatus = 
  | 'SAVED' 
  | 'APPLIED' 
  | 'INTERVIEW' 
  | 'OFFER' 
  | 'REJECTED' 
  | 'WITHDRAWN';

export type ReminderType = 
  | 'FOLLOW_UP' 
  | 'APPLICATION_DEADLINE' 
  | 'INTERVIEW';

export interface JobApplication {
  id: string;
  company: string;
  role: string;
  location: string;
  status: ApplicationStatus;
  appliedDate?: string;
  updatedDate: string;
  salaryRange?: string;
  activeProfileUsed: string;
  notes?: string;
  atsType?: 'Greenhouse' | 'Lever' | 'Ashby' | 'Generic';
  url?: string;
}

export interface CandidateProfile {
  id: string;
  name: string;
  isDefault: boolean;
  basics: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
  };
  headline: string;
  education: Array<{
    school: string;
    degree: string;
    field: string;
    gradYear: string;
  }>;
  experience: Array<{
    company: string;
    title: string;
    period: string;
    highlights: string[];
  }>;
  projects: Array<{
    name: string;
    description: string;
    tech: string[];
    link: string;
  }>;
  skills: string[];
}

export interface ReminderItem {
  id: string;
  type: ReminderType;
  company: string;
  role: string;
  dueDate: string;
  isCompleted: boolean;
}
