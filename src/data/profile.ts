// All profile content lives here. Edit this file to update the site.

export interface Link {
  label: string;
  href: string;
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  summary: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  href?: string;
}

export const profile = {
  name: 'Your Name',
  title: 'Software Developer',
  location: 'City, Country',
  bio: 'A short introduction: what you work on, what you care about, and what you are looking for. Keep it to two or three sentences.',
  links: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Email', href: 'mailto:you@example.com' },
  ] satisfies Link[],
  skills: ['TypeScript', 'Astro', 'HTML & CSS', 'Node.js', 'Git'],
  experience: [
    {
      role: 'Developer',
      org: 'Company A',
      period: '2023 — Present',
      summary: 'What you built, owned or improved. One or two lines with concrete outcomes.',
    },
    {
      role: 'Junior Developer',
      org: 'Company B',
      period: '2020 — 2023',
      summary: 'Earlier role: responsibilities and a highlight or two.',
    },
  ] satisfies Experience[],
  projects: [
    {
      name: 'Project One',
      description: 'A one-line description of the problem and your solution.',
      tags: ['Astro', 'TypeScript'],
      href: 'https://github.com/',
    },
    {
      name: 'Project Two',
      description: 'Another project worth showing, with what makes it interesting.',
      tags: ['Node.js'],
    },
  ] satisfies Project[],
};
