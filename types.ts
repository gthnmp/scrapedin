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
  title: string;
  company: string;
  employmentType: string | null; // You might want to specify the type for employmentType
  location: Location | null;
  startDate: string;
  endDate: string;
  endDateIsPresent: boolean;
  description: string | null;
  durationInDays: number;
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
