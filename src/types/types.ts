
// ======= Secondary Types =======
type SocialMediaTypes = Partial<Record<string, string>>

export type Endpoints =
  | "/tracks"
  | `/tracks/${string}`
  | "/values"
  | "/formats"
  | "/journey"
  | "/roles"
  | "/inquiry-categories"
  | "/faqs"
  | "/stats"
  | "/navigation";

// ======= MAIN TYPES ========

export type ApiResponse<T> = {
    success: boolean;
    count?: number;
    data: T;
};

export type TrackTypes = {
    id: string;
    name: string;
    tagline: string;
    description: string;
    icon: string;
    color: string;
    skills: string[];
    whatYouDo: string;
    exploreLink: string;
    open: boolean;
}

export type ValuesTypes = {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
}

export type FormatsTypes = {
    id: string;
    name: string;
    description: string;
    icon: string;
    cta: string;
}

export type JourneyTypes = {
    step: number;
    id: string;
    title: string;
    description: string;
}

export type RolesTypes = {
    id: string;
    title: string;
    description: string;
    icon: string;
    cta: string;
}

export type InquiryCategoryTypes = {
    id: string;
    label: string;
    description: string;
    icon: string;
    guidance: string;
}

export type FaqsTypes = {
    id: string;
    question: string;
    answer: string;
    category: "joining-learning" | "collaboration" | "speaking-sharing" | "general-inquiry" ;
}

export type StatsTypes = {
    communityMembers: number;
    workshopsHeld : number;
    projectsShipped: number;
    activeTracks: number;
    university: string;
    city: string;
    foundedYear: number;
    social: SocialMediaTypes;
    tagline: string;
}

export type NavigationTypes = {
    label: "Home" | "About" | "Overview" | "Contact";
    href: "/" | "/about" | "/overview" | "/contact";
}