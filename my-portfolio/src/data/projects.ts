// projectsData.ts
import web_pet from '../assets/imgs/petshop_web12.png'

import app_pet from '../assets/imgs/petshop_app1.png'
import petshop_app1 from '../assets/imgs/petshop_app1.gif'
import petshop_app2 from '../assets/imgs/petshop_app2.png'
import petshop_app3 from '../assets/imgs/petshop_app3.png'
import petshop_app4 from '../assets/imgs/petshop_app4.png'
import petshop_app5 from '../assets/imgs/petshop_app5.gif'

export interface ContentSection {
  title: string;
  paragraphs: string[];
  image: string;
}

export interface ProjectDetail {
  name: string;
  link: string;
  introduction: string;
  image1: string;
  image2: string;
  sketch: boolean;
  contentSections: ContentSection[];
  overview: {
    overview: string;
    role: string;
    scope: string;
    tools: string;
  },
}

export const projectsData: ProjectDetail[] = [
  {
    name: "Pet Shop Web Design Project",
    link: "petshopweb",
    introduction: 'Petshop LoveLy Paws website design project course',
    image1: web_pet,
    image2: web_pet,
    sketch: false,
    overview: {
      overview: "The project is a web design for a pet shop website that helps pet owners find, browse, and purchase products, register for services, and enroll in reputable training programs. The app also enables users to update health information for their pets, schedule vet appointments, and track health records remotely.",
      role: 'Product Designer, UX/UI Researcher on a team of five',
      scope: '3 months for the project in a design course',
      tools: 'Figma, AdobeXD'
    },
    contentSections: [
      {
        title: "Section 1",
        paragraphs: [
          "This is the first paragraph of section 1.",
          "Here is another paragraph of section 1."
        ],
        image: web_pet
      },
      {
        title: "Section 2",
        paragraphs: [
          "This is the content of section 2.",
        ],
        image:web_pet,
      }
    ]
  },
  {
    name: "Pet Shop App",
    link: "petshopapp",
    image1: app_pet,
    image2: petshop_app1,
    sketch: false,
    introduction: 'Petshop LoveLy Paws app design project course',
    overview: {
      overview: "This project is a web design for a pet shop application, created as part of a pet shop project design course. It focuses on providing a user-friendly experience with features like pet adoption, care services, and product purchases. This is a personal project where I apply the skills and knowledge gained throughout the course, focusing on delivering an intuitive and visually appealing interface.",
      role: 'UX/UI Designer',
      scope: '2 weeks',
      tools: 'Figma'
    },
    contentSections: [
      {
        title: "Pet adoption interface",
        paragraphs: [
          "Pet Listing & Filter Screen: Displays a grid of adoptable pets with a filter bar for users to search by breed, age, size, gender, etc.",
          "Pet Detail Screen: Showcases detailed information about a selected pet, including images, personality traits, and health history.",
          "Adoption Form Screen: A simple form where users can fill out personal details and preferences to start the pet adoption process."
        ],
        image: petshop_app2,
      },

      {
        title: "Pet products sell interface",
        paragraphs: [
          "Product List Screen: Displays a grid of pet products with images, prices, and brief descriptions.",

          "Product Detail Screen: Shows detailed product info, with images, features, and reviews.",

          "Action Buttons: Includes `Add to Cart` and `Buy Now` buttons for easy purchasing.",
        ],
        image: petshop_app3,
      },
      {
        title: "Services Interface",
        paragraphs: [
          "The Services Interface provides options for pet grooming, training, vaccination, boarding, treatment, and routine check-ups, allowing users to browse and book these services easily."
        ],
        image: petshop_app4,
      },
      {
        title: "Chat and Booking Screen",
        paragraphs: [
          "The Chat and Booking Screen allows users to communicate with service providers and easily schedule appointments for pet care services like grooming or veterinary visits."
        ],
        image: petshop_app5,
      },
    ]
  },
  // Thêm nhiều dự án khác tại đây
];

export default projectsData