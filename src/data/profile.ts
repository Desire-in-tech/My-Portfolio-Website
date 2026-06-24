export interface Profile {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  available: boolean;
}

export const profile: Profile = {
  name: 'Desire Eyotaru',
  title: 'Software Engineer & AI Developer',
  headline: 'Software Engineer & AI Developer',
  subheadline:
    'Building machine learning applications, APIs and data-driven solutions with Python, React, Django and FastAPI.',
  tagline:
    'Building intelligent applications and data-driven solutions that solve real business problems.',
  email: 'desireintech@gmail.com',
  phone: '+256777418190',
  location: 'Kampala, Uganda (Remote – GMT+3)',
  available: true,
};
