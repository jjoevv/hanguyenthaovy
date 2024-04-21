import { Button, Card, CardGroup, Col, Container, Image, Row } from 'react-bootstrap'
import App1 from './../assets/imgs/app1.png'
import App2 from './../assets/imgs/app2.png'
import App3 from './../assets/imgs/app3.png'
import App4 from './../assets/imgs/app4.png'

import Pet1 from './../assets/imgs/pet1.png'
import Pet2 from './../assets/imgs/pet2.png'
import Pet3 from './../assets/imgs/pet3.png'
import Pet4 from './../assets/imgs/pet4.png'

import Conf1 from './../assets/imgs/conf2.png'
import Conf2 from './../assets/imgs/conf2.png'
import Conf3 from './../assets/imgs/conf3.png'
import Conf4 from './../assets/imgs/conf4.png'

import Chat1 from './../assets/imgs/chat1.png'
import Chat2 from './../assets/imgs/chat2.png'
import Chat3 from './../assets/imgs/chat3.png'

import Arrow from './../assets/imgs/arrow.png'

import { useNavigate } from 'react-router-dom'
const Detail = () => {
  const data = [
    {
      title: "E-learning app",
      id: "elearning",
      imageMain: App1,
      introduction: "My e-learning app offers interactive English lessons, quizzes, and progress tracking, making learning enjoyable and effective for primary and secondary school students.",
      idea: "Recognizing the demand for engaging English learning tools, my app provides a unique, interactive experience tailored to students of all levels.",
      role: ["UX/UI Designer", "Research"],
      screen: "Some screens in app interface",
      describes: [
        { image: App2, describe: "The main screen consists of a slide showcasing the app's general courses such as Listening, Reading, etc. Following that is a list of exercises/tests that need to be completed." },
        { image: App3, describe: "Upon entering a course, such as Listening, users will find a series of small exercises to practice and enhance their skills." },
        { image: App4, describe: "Another example, like Reading, includes exercises designed for easy comprehension of passages and questions. Results are displayed promptly afterward." }
      ]
    },
    {
      title: "Petshop",
      id: "petshop",
      imageMain: Pet1,
      introduction: "This project designs a website for pet care and rescue, providing information and support for pet owners and facilitating pet adoption.",
      idea: "My idea stemmed from recognizing the increasing demand among primary and secondary school students for effective and engaging English language learning. Through research and exploration of similar applications, this app is designed to provide a unique and interactive English learning experience tailored to students of all levels.",
      role: ["UX/UI Designer", "Research", "Prototyping", "Business Analyst", "Wireframe drawing"],
      screen: "Some screens in website interface",
      describes: [
        { image: Pet4, describe: "The project starts with gathering and analyzing information for services, as well as business domain analysis. Below is one of the sketches for the homepage" },
        { image: Pet2, describe: "The homepage of the website provides an overview of the services and features it offers. Each member of the team contributes to creating different content for the homepage." },
        { image: Pet3, describe: "For the main services section, I am primarily responsible for designing the product selling flow for pets, which includes a product listing page and a product detail page." },
        
      ]
    },
    {
      title: "Conference Searching",
      id: "conferencesearch",
      imageMain: Conf1,
      introduction: "This is my graduation project, a website focused on searching for conference/journal information. Its key features include a multi-criteria search filter and a follow function for receiving conference updates.",
      idea: "The project addresses the lack of comprehensive search features on existing conference-related platforms, aiming to provide users with more essential and diverse services.",
      role: ["UX/UI Designer", "Research", "Prototyping", "Business Analyst", "Frontend developer"],
      screen: "Some screens in website interface",
      describes: [
        { image: Conf2, describe: "Below is the homepage with a multi-functional filter and a list of conferences/journals. There's also a function to suggest conferences/journals to users." },
        { image: Conf3, describe: "Here is the design of the detailed information page of the conference/journal, including information about the conference and the schedule of events throughout the conference." },
        { image: Conf4, describe: "Here is the admin interface, which includes pages for managing conference lists and user lists. Admin can perform editing operations and check statistics related to quantities here." }
      ]
    },
    {
      title: "Chatapp",
      id: "chatapp",
      imageMain: Chat1,
      introduction: "This is a course project on ChatApp, developed using ReactJS and Socket.io. The website facilitates real-time online chatting and messaging among users.",
      idea: "This project, part of the Software Project Management course, encompasses the entire software development lifecycle, from ideation to product completion.",
      role: ["Research", "Frontend developer"],
      screen: "Some screens in website interface",
      describes: [
        { image: Chat1, describe: "The ChatApp project is part of a software project management course, where students learn about the principles and practices of managing software projects effectively. " },
        { image: Chat2, describe: " Throughout the course, students are guided through the entire software development lifecycle, from ideation to product completion. " },
        { image: Chat3, describe: "The ChatApp project serves as a practical application of the concepts learned in the course, allowing students to demonstrate their project management skills in a real-world context." }
      ]
    }
  ];
  const navigate = useNavigate()
  const currentData = data.find(item => item.id ===  window.location.hash.substring( window.location.hash.lastIndexOf('/') + 1));
  let nextItemIndex = -1;
  if (currentData) {
    const currentIndex = data.findIndex(item => item.id === currentData.id);
    if (currentIndex !== -1) {
      if (currentIndex < data.length - 1) {
        nextItemIndex = currentIndex + 1;
      } else {
        nextItemIndex = 0; // Phần tử hiện tại là phần tử cuối cùng, lưu giá trị của phần tử đầu tiên làm phần tử tiếp theo
      }
    }
  }

  let nextItem = null;
  if (nextItemIndex !== -1) {
    nextItem = data[nextItemIndex];
  }

  if (!currentData) {
    return <div>Error page</div>;
  }
  return (
    <Container fluid className="p-5 m-0 mt-5 blue-normal text-white w-100 overflow-hidden ">
      
      <h1 className='mt-1 text-center'>{currentData.title}</h1>
      <Row className="justify-content-center my-5 px-5 blue-dark">
        <Col xs={12} md={6} className='d-flex justify-content-center'>
          <Image src={currentData.imageMain} />
        </Col>
        <Col xs={12} md={6} className='py-5'>
          <h3>Introduction</h3>
          <div className="my-2 d-flex">
            <div className="me-2 text-tertiary fs-medium"><span>&#8226;</span> </div>
            <div>{currentData.introduction}</div>
          </div>
          <div className="my-2 d-flex">
            <div className="me-2 text-tertiary fs-medium">&#8226; </div>
            <div>{currentData.idea}</div>
          </div>
          <Row className=" my-3">

            <h4>My role</h4>
            <Col md={4}>
            {currentData.role.slice(0, Math.ceil(currentData.role.length / 2)).map((item, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                <span className="me-2 text-tertiary">&#8226;</span>
                <span>{item}</span>
              </div>
            ))}
          </Col>
          <Col md={4}>
            {currentData.role.slice(Math.ceil(currentData.role.length / 2)).map((item, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                <span className="me-2 text-tertiary">&#8226;</span>
                <span>{item}</span>
              </div>
            ))}
          </Col>
          </Row>
        </Col>
      </Row>
      <div className='mt-5 pt-3'>
        <h5 className='mt-5 mb-3 text-start'>{currentData.screen}</h5>
      </div>
      {Array.isArray(currentData.describes) && currentData.describes.length > 1 &&
        <CardGroup className='mb-5 mx-2'>
          {currentData.describes.map((item, index) => (
            <Card key={index} className='m-4'>
            <Card.Body className='bg-white tex-secondary'>
              <Card.Text>
                {item.describe}
              </Card.Text>
            </Card.Body>
            <div style={{ position: 'relative', width: '100%', paddingTop: 'calc(440 / 340 * 100%)' }}>
              <Card.Img 
                variant="top" 
                src={item.image} 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} 
              />
            </div>
          </Card>
          
          ))}
        </CardGroup>
      }
      <div className='w-100 d-flex justify-content-center py-5'>

        <Button className='primary-normal rounded-0 ' onClick={() => navigate(`/project/${nextItem.id}`)}>
          Next project
          <Image src={Arrow} width={20} className='ms-3' />
        </Button>
      </div>

    </Container>
  )
}

export default Detail