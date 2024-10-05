// projectsData.ts
import conf1 from '../assets/imgs/conf1.png'
import conf2 from '../assets/imgs/conf2.png'
import conf3 from '../assets/imgs/conf3.png'
import conf4 from '../assets/imgs/conf4.png'
import conf5 from '../assets/imgs/conf5.png'
import conf6 from '../assets/imgs/conf6.png'
import conf7 from '../assets/imgs/conf7.png'
import conf8 from '../assets/imgs/conf8.png'
import conf9 from '../assets/imgs/conf9.png'
import conf10 from '../assets/imgs/conf10.png'

import web_pet1 from '../assets/imgs/petshop_web1.png'
import web_pet2 from '../assets/imgs/petshop_web2.png'
import web_pet3 from '../assets/imgs/petshop_web3.png'
import web_pet4 from '../assets/imgs/petshop_web4.png'
import web_pet5 from '../assets/imgs/petshop_web5.png'
import web_pet6 from '../assets/imgs/petshop_web6.png'
import web_pet7 from '../assets/imgs/petshop_web7.png'
import web_pet_gif7 from '../assets/imgs/petshop_web7.gif'
import web_pet8 from '../assets/imgs/petshop_web8.png'
import web_pet9 from '../assets/imgs/petshop_web9.png'
import web_pet10 from '../assets/imgs/petshop_web10.png'


import app_pet from '../assets/imgs/petshop_app1.png'
import petshop_app1 from '../assets/imgs/petshop_app1.gif'
import petshop_app2 from '../assets/imgs/petshop_app2.png'
import petshop_app3 from '../assets/imgs/petshop_app3.png'
import petshop_app4 from '../assets/imgs/petshop_app4.png'
import petshop_app5 from '../assets/imgs/petshop_app5.gif'

export interface ContentSection {
  title: string;
  paragraphs: string[];
  image: {
    full: boolean,
    src: string
  };
}


export interface ProjectDetail {
  name: string;
  link: string;
  introduction: string;
  process: {
    image: string[],
    content: string[],
    isProcess: boolean,
  },
  image1: string;
  image2: string;
  sketch: {
    isSketch: boolean,
    image: string,
    content: string[],
  };
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
    name: "Conference Searching Website",
    link: "conferensearching",
    introduction: 'The graduation project focuses on creating a comprehensive Conference Searching website.',
    image1: conf1,
    image2: conf1,
    sketch: {
      isSketch: false,
      image: '',
      content: [],
    },
    process: {
      content: [
        "Explore and evaluate existing scientific conference search tools, noting their strengths and weaknesses. Develop criteria for a survey targeting both users of these tools and those interested in finding scientific conferences.",
        "Choose suitable technologies for development, using Agile methodology and Client-Server architecture. Focus on scientific conferences, gathering key information such as dates, locations, and submission deadlines from the ICORE Conference Portal. Design a structured database and define essential features based on survey feedback.",
        "Program the user interface and gather ongoing feedback from team members and instructors until the final version is completed."
      ],
      image: [conf10],
      isProcess: true
    },
    overview: {
      overview: "The project is a web design for a pet shop website that helps pet owners find, browse, and purchase products, register for services, and enroll in reputable training programs. The app also enables users to update health information for their pets, schedule vet appointments, and track health records remotely.",
      role: 'UXUI Designer and Frontend Developer in a team of five',
      scope: 'The graduation project spans 6 months, for in-depth exploration, design, development, and testing.',
      tools: 'Figma, ReactJS, Bootstrap'
    },
    contentSections: [
      
      {
        title: "Homepage",
        paragraphs: [
          "The homepage allows users to search for conferences by keyword or criteria such as location, submission date, and event date. Users can click `Show more advanced search` for additional search options..",
          "Clicking in a conference will lead to the conference detail screen, providing more information"
        ],
        image: {
          src: conf2,
          full: true
        }
      },
      {
        title: "Conference detail information ",
        paragraphs: [
          "The conference detail screen includes basic information about the conference, such as its title, description, and location. It features a list of important dates, including submission deadlines and event dates. Additionally, a `Call for Papers` section outlines submission guidelines for potential presenters.",
          "Registered users can leave comments and ratings, as well as follow the conference to receive updates on changes and related news."
        ],
        image: {
          src: conf3,
          full: true
        }
      },
      {
        title: "Log in & Sign up",
        paragraphs: [
          "Login Screen: Users enter their email and password to access their accounts, with options for Forgot Password and Login with Google.",

          "Registration Screen: New users can create an account by providing their name, email, and password, with an option to sign up via Google for quicker registration. The interface is user-friendly with clear instructions and form validation."
        ],
        image: {
          src: conf9,
          full: false
        }
      },
      {
        title: "Calendar note screen",
        paragraphs: [
          "The screen  displays a list of conferences that users are following, along with upcoming event details. It features a timeline for users to track important dates and deadlines.",
          " Additionally, users can leave notes or reminders related to each conference, ensuring they stay organized and informed about their interests."
        ],
        image: {
          src: conf4,
          full: false
        }
      },
      {
        title: "Add conference",
        paragraphs: [
          "Users can add a conference themselves by filling out a submission form with details",
        ],
        image: {
          src: conf5,
          full: false
        }
      },
      {
        title: "Admin role - Dashboard",
        paragraphs: [
          "The Admin Dashboard directs administrators to an overview management screen that displays key metrics, including the total number of conferences, user accounts, and the number of currently logged-in users. This centralized interface provides a quick snapshot of platform activity, allowing admins to monitor engagement and manage resources effectively.",
          "The screen includes a line chart tracking data crawling progress over time and a column chart monitoring user access, showing visit numbers and engagement trends. These visuals help admins analyze data and make informed management decisions."
        ],
        image: {
          src: conf6,
          full: false
        }
      },
      {
        title: "Admin role - Conference Management",
        paragraphs: [
          "The Conference Management section enables admins to manage the list of conferences, including options to edit, delete, or hide entries.",
          "Admins can also approve or reject user submissions to ensure the quality and relevance of the content on the platform. "
        ],
        image: {
          src: conf7,
          full: false
        }
      },
      {
        title: "Section 8",
        paragraphs: [
          "This import feature allows admins to upload a list of conference information for the system to crawl. After uploading a file, the admin selects the necessary data columns for import.",
          "During the crawling process, a progress table tracks the status, displaying descriptions and an error column for any encountered issues. The admin can pause the crawling for conferences in a waiting state.",
          "Once the process is complete, the newly added conferences are automatically included in the system's conference list.",
        ],
        image: {
          src: conf8,
          full: false
        }
      }
    ]
  },
  {
    name: "Pet Shop Web Design Project",
    link: "petshopweb",
    introduction: 'Petshop LoveLy Paws website design project course',
    image1: web_pet1,
    image2: web_pet1,
    sketch: {
      isSketch: true,
      image: web_pet2,
      content: [
        'After brainstorming and sketching individual ideas, we held a collaborative discussion to evaluate and rank each concept from members. From this, we selected the most feasible ideas to move forward with for the interface design.',
        'Here are some of my paper prototypes created during the project.'
      ]
    },
    process: {
      content: [
        "Research and Ideation: Conduct research to understand pet owners' needs, analyze competitors, and identify key problems. Use this insight to brainstorm and generate design ideas.",

      "Sketching and Wireframing: Create initial sketches and wireframes to map out the structure of key features, like pet adoption, services, and product purchases, focusing on smooth user navigation.",

      "UI Design: Develop high-fidelity designs that reflect the brand, ensuring a visually appealing and user-friendly interface across all screens.",

      "Testing and Evaluation: Test the website with real users, gather feedback, and iterate to enhance usability and functionality, ensuring an intuitive experience for pet owners.",

      "Here is the use case diagram and the process from sketch to final design."
      ],
      image: [web_pet3, web_pet4],
      isProcess: true
    },
    overview: {
      overview: "The project is a web design for a pet shop website that helps pet owners find, and purchase products, book services, and enroll in reputable training programs. The app also enables users to update health information for their pets, schedule vet appointments, and track health records remotely.",
      role: 'Product Designer, UX/UI Researcher on a team of five',
      scope: '3 months for the project in a design course',
      tools: 'Figma, AdobeXD'
    },
    contentSections: [
      {
        title: "Homepage",
        paragraphs: [
          "The homepage features a header, including links to the shopping cart, account button, notification bell, and a search bar.",
          "It also includes a prominent emergency rescue button, alongside a poster, a summary of the pet adoption process, a list of pets available for adoption, various services and veterinarians, a product catalog, and blog articles."
        ],
        image: {
          src: web_pet5,
          full: true
        }
      },
      
      {
        title: "Adoption & Service page",
        paragraphs: [
          "The pet adoption interface includes a filter and search bar.",
          "Users can view a list of available pets, each linked to a detailed page containing basic information, a gallery of images, health details, and background information about the pet’s circumstances. Additionally, there is a section suggesting other pets available for adoption.",
          "Here is some design of other members in team.",
        ],
        image: {
          src: web_pet6,
          full: false
        }
      },
      {
        title: "Products & Blog article",
        paragraphs: [
          "My responsibility in designing the homepage includes the products and blog sections. Since the project only requires implementing three flows on the website, I focused specifically on designing the product purchase flow.",
          "The Products section on the homepage features the names of available items, showcasing a selection of products along with a button that directs users to the full product listing page.",
          " The Blog section displays a list of posts, including the title of each article and a brief excerpt, with a button that leads to the complete blog page.",
        ],
        image: {
          src: web_pet7,
          full: false
        }
      },
      {
        title: "Products Page",
        paragraphs: [
          "The Products page features a filter and search bar. Users can browse a list of available items, each linked to a detailed product page that includes essential information, a gallery of images, and pricing details. ",
          "Additionally, there is a section recommending related products to enhance the shopping experience.",
        ],
        image: {
          src: web_pet_gif7,
          full: false
        }
      },
      {
        title: "",
        paragraphs: [],
        image: {
          src: web_pet8,
          full: false
        }
      },
      {
        title: "Cart Page & Purchasing products feature",
        paragraphs: [
          "The Add to Cart feature allows users to easily select products they wish to purchase and store them in their virtual shopping cart for later review or checkout. This function enables users to continue browsing without losing their selections.",
          "The Buy Now option provides a streamlined purchasing process, allowing users to skip the cart and directly proceed to checkout for immediate payment, enhancing convenience for those who want to complete their purchase quickly. Both functions are designed to facilitate a smooth and efficient shopping experience on the site.",
          
        ],
        image: {
          src: web_pet9,
          full: false
        }
      },
      {
        title: "",
        paragraphs: [
          "The Direct Payment feature allows users to make immediate purchases through a streamlined checkout process, ensuring a quick and efficient transaction.",
          "Additionally, the Online Payment via QR Code functionality enables users to complete their payments conveniently by scanning a generated QR code with their mobile devices",
          
          
        ],
        image: {
          src: web_pet10,
          full: false
        }
      }
    ]
  },
  {
    name: "Pet Shop App",
    link: "petshopapp",
    image1: app_pet,
    image2: petshop_app1,
    sketch: {
      isSketch: false,
      image: '',
      content: []
    },
    process: {
      content: [],
      image: [],
      isProcess: true
    },
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
        image: {
          src: petshop_app2,
          full: false
        }
      },

      {
        title: "Pet products sell interface",
        paragraphs: [
          "Product List Screen: Displays a grid of pet products with images, prices, and brief descriptions.",

          "Product Detail Screen: Shows detailed product info, with images, features, and reviews.",

          "Action Buttons: Includes `Add to Cart` and `Buy Now` buttons for easy purchasing.",
        ],
        image: {
          src: petshop_app3,
          full: false
        }
      },
      {
        title: "Services Interface",
        paragraphs: [
          "The Services Interface provides options for pet grooming, training, vaccination, boarding, treatment, and routine check-ups, allowing users to browse and book these services easily."
        ],
        image: {
          src: petshop_app4,
          full: false
        }
      },
      {
        title: "Chat and Booking Screen",
        paragraphs: [
          "The Chat and Booking Screen allows users to communicate with service providers and easily schedule appointments for pet care services like grooming or veterinary visits."
        ],
        image: {
          src: petshop_app5,
          full: false
        }
      },
    ]
  },
  // Thêm nhiều dự án khác tại đây
];

export default projectsData