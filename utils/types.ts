export type Login = {
  email: string;
  password: string;
};

export type Location = {
  city: string | null;
  province: string | null;
  country: string | null;
};

export type UserProfile= {
  fullName: string | null;
  title: string | null;
  location: Location | null;
  photo: string | null;
  url: string | null;
};

export type Experience= {
  title: string | null;
  company: string | null;
  employmentType: string | null; // You might want to specify the type for employmentType
  location: Location | null;
  startDate: string | null;
  endDate: string | null;
  endDateIsPresent: boolean;
  description: string | null;
  duration: string | null;
};

export type Education= {
  schoolName: string;
  degreeName: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  durationInDays: number;
};

export type Skill= {
  skillName: string;
  endorsementCount: number;
};

export type LinkedInProfile= {
  userProfile: UserProfile;
  experiences: Experience[];
  education: Education[];
  volunteerExperiences: any[]; // You might want to specify the type for volunteerExperiences
  skills: Skill[];
};

export type BasicProfileSelectors = {
  fullName: string;
  title: string;
  location: string;
  photo: string;
};

export type ExperienceSelectors = {
  title: string;
  company: string;
  employmentType: string; 
  location: string; 
  date:string;
  description: string;
};

