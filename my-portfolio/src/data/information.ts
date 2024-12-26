import mailIcon from '../assets/imgs/mail.png'
import phoneIcon from '../assets/imgs/phone.png'
import githubIcon from '../assets/imgs/github.png'
import figmaIcon from '../assets/imgs/figma.png'
import illustratorIcon from '../assets/imgs/illustrator.png'

// information.ts
export interface Information {
  contactInfo: {
    name: string;
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
    type: string;
  }[];
}

export const informationData: Information = {
  contactInfo: {
    name: "Ha Nguyen Thao Vy",
    phone: "+84 794 996 247",
    email: "hhnnttvy@gmail.com",
    address: "Thu Duc City, Ho Chi Minh City",
  },
  objectives: "Hello! I am Thao Vy - an IT student about to graduate, I am seeking a UX/UI Designer internship in a dynamic environment where I can apply my design expertise and research skills to craft intuitive and engaging user experiences. I am committed to continuous learning and professional growth, with a clear goal to enhance my abilities and contribute to the UX/UI field over the next 6 months.",
  education: {
    school: "Ho Chi Minh City University of Science (HCMUS)",
    major: "Information Technology",
    gpa: "3.0",
    courses: ["Web Development", "UX/UI Design", "Project Management"],
  },
  tools: [figmaIcon, illustratorIcon],
  softSkills: ["Communication","Teamwork","Problem-Solving", "Time Management"],
  skillSet: ["Front-end development", "UI/UX Design", "Graphic Design" ],
  icons: [
    { name: "Mail", icon: mailIcon, info: "hhnnttvy@gmail.com", type: "email" },
    { name: "Phone", icon: phoneIcon, info: "+84 794 996 247", type: "phone" },
    { name: "GitHub", icon: githubIcon, info: "https://github.com/jjoevv", type: "link" },
  ],
};
