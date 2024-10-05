import mailIcon from '../assets/imgs/mail.png'
import phoneIcon from '../assets/imgs/phone.png'
import githubIcon from '../assets/imgs/github.png'
import figmaIcon from '../assets/imgs/figma.png'
import sketchIcon from '../assets/imgs/sketch.png'
import illustratorIcon from '../assets/imgs/illustrator.png'
import adobexdIcon from '../assets/imgs/adobexd.png'

// information.ts
export interface Information {
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  objectives: string;
  education: {
    school: string;
    major: string;
    gpa: string;
    courses: string[];
  };
  tools: string[];
  softSkills: string[];
  skillSet: string[];
  icons: {
    name: string;
    icon: string;
    info: string;
  }[];
}

export const informationData: Information = {
  contactInfo: {
    phone: "+123 456 789",
    email: "contact@example.com",
    address: "123 Main Street, City, Country",
  },
  objectives: "As an IT student about to graduate, I am seeking a UX/UI Designer internship in a dynamic environment where I can apply my design expertise and research skills to craft intuitive and engaging user experiences. I am committed to continuous learning and professional growth, with a clear goal to enhance my abilities and contribute to the UX/UI field over the next 6 months.",
  education: {
    school: " Ho Chi Minh City University of Science (HCMUS)",
    major: "Information Technology",
    gpa: "7.0/10",
    courses: ["Web Development", "UX/UI Design", "Project Management"],
  },
  tools: [figmaIcon, illustratorIcon, sketchIcon, adobexdIcon],
  softSkills: ["Communication", "Problem-solving", "Teamwork"],
  skillSet: ["Front-end development", "UI/UX Design", "Graphic Design" ],
  icons: [
    { name: "Mail", icon: mailIcon, info: "contact@example.com" },
    { name: "Phone", icon: phoneIcon, info: "+123 456 789" },
    { name: "GitHub", icon: githubIcon, info: "github.com/your-profile" },
  ],
};
