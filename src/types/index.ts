export type ProjectCategory =
  | 'all'
  | 'woodwork-interior'
  | 'tools-automation'
  | 'landing'
  | 'business'
  | 'ecommerce'
  | 'content-media'
  | 'service';

export interface ProjectImage {
  url: string;
  caption: string;
  tag?: string;
  isCover?: boolean;
}

export interface SiteMapNode {
  name: string;
  description: string;
  children?: SiteMapNode[];
}

export interface UserFlowStep {
  stepNumber: number;
  action: string;
  screen: string;
  outcome: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  category: ProjectCategory;
  categoryLabel: string;
  badge?: string;
  isRealProject: boolean;
  statusLabel: string;
  shortDescription: string;
  targetAudience: string;
  keyHighlight: string;
  coverImage: string;
  mobileImage?: string;
  gallery: ProjectImage[];
  purpose: string;
  problemSolved: string;
  coreFeatures: Array<{ title: string; description: string }>;
  myWork: string[];
  technologies?: string[];
  techStack?: string[];
  features?: string[];
  tagline?: string;
  problem?: string;
  solution?: string;
  date?: string;
  siteMapTree?: SiteMapNode[];
  userFlow?: UserFlowStep[];
  demoUrl?: string;
  sourceUrl?: string;
  relatedProjectSlugs?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  benefits: string[];
  deliverables: string[];
  idealFor: string;
  tag: string;
}

export interface WorkStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface ContactFormData {
  fullName: string;
  phone?: string;
  email: string;
  service: string;
  budget?: string;
  message: string;
  referralSource?: string;
  sourceChannel?: 'Website' | 'Chatbot';
  pageSource?: string;
}

export interface ContactSubmissionPayload extends ContactFormData {
  requestId: string;
  submittedAt: string;
  status: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  actions?: Array<{
    label: string;
    actionType: 'scroll_to' | 'copy_text' | 'open_lead_form' | 'navigate_to';
    payload: string;
  }>;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}
