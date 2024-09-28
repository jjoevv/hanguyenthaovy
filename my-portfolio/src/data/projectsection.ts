import conf from '../assets/imgs/conf1.png'
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  }

  export const projectsData: Project[] = [
    {
      id: 1,
      title: "Project 1",
      description: "This is a description for Project 1",
      image: conf, // Đường dẫn tới ảnh
      link: "/projects/1", // Đường dẫn tới chi tiết project
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a description for Project 2",
      image: conf, // Đường dẫn tới ảnh
      link: "/projects/2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is a description for Project 3",
      image: conf, // Đường dẫn tới ảnh
      link: "/projects/3",
    },
  ];
  