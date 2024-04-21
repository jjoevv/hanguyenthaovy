import { Button, Col, Container, Image, Overlay, Row, Tooltip } from "react-bootstrap"
import MailIcon from './../assets/imgs/mail.png'
import GithubIcon from './../assets/imgs/github.png'
import Avatar from './../assets/imgs/avatar.jpg'
import CodeIllustration from './../assets/imgs/code.png'


import FigmaIcon from '../assets/imgs/figma.png'
import AiIcon from '../assets/imgs/illustrator.png'
import SketchIcon from '../assets/imgs/sketch.png'
import CssIcon from '../assets/imgs/css.png'
import HTMLIcon from '../assets/imgs/html.png'
import JavascriptIcon from '../assets/imgs/javascript.png'
import ReactJSIcon from '../assets/imgs/reactjs.png'
import PythonIcon from '../assets/imgs/python.png'
import { useRef, useState } from "react"

const About = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const expertise = [
    "UX design",
    "UI design",
    "Prototyping",
    "Research",
    "Business Analyst",
    "Atomic design",
    "Visual design",
    "Frontend developer"
  ];
  const dev = [
    "HTML/CSS",
    "Javascript",
    "ReactJS",
    "Testing và Debugging",
  ]
  
  const imageList = [
    { fileName: FigmaIcon, title: 'Figma' },
    { fileName: AiIcon, title: 'Ai' },
    { fileName: SketchIcon, title: 'Sketch' },
    { fileName: CssIcon, title: 'CSS' },
    { fileName: HTMLIcon, title: 'HTML' },
    { fileName: JavascriptIcon, title: 'Javascript' },
    { fileName: ReactJSIcon, title: 'ReactJS' },
    { fileName: PythonIcon, title: 'Python' }
  ];
  const renderList = (list) => (
    <Row className="justify-content-center px-4">
      <Col md={2} xs={12}>
        {list.slice(0, Math.ceil(list.length / 2)).map((item, index) => (
          <div key={index} className="d-flex align-items-center mb-2">
            <span className="me-2">&#8226;</span>
            <span>{item}</span>
          </div>
        ))}
      </Col>
      <Col md={2} xs={12}>
        {list.slice(Math.ceil(list.length / 2)).map((item, index) => (
          <div key={index} className="d-flex align-items-center mb-2">
            <span className="me-2">&#8226;</span>
            <span>{item}</span>
          </div>
        ))}
      </Col>
    </Row>
  )
  return (
    <Container fluid className="p-0 m-0 mt-5 pb-5 blue-normal  text-white w-100 overflow-hidden ">
      <Row className="justify-content-center my-2 mb-5 mt-5">
        <Col md={5} xs={12}>
          <div className="p-5 text-justify">
            <h2>Xin chào!</h2>
            <div className="my-3 "> {`I'm Vy, currently a fourth-year student majoring in Information Technology at Ho Chi Minh City University of Science (HCMUS).`} <br /></div>
            <div className="my-3 ">
              With a profound passion for UX/UI design, I am always eager to explore and contribute to this industry. Creativity and user-centricity have always been my driving forces, and I constantly seek opportunities to apply my knowledge and skills to real-world projects.
              Working in a diverse and exciting environment and learning from talented peers are some of the things I look forward to in my career journey.<br />
            </div>
            <div className="my-3">After spending countless hours as a designer (feel free to ask me about my favorite medium!), I enjoy unwinding with recreational games and indulging in movies as a small hobby.</div>
          </div>
          <Button className="bg-blue-main border border-0 button-gradient ms-5">
            <a href="hanguyenthaovy/HaNguyenThaoVy.pdf" target="_blank" className="text-decoration-none text-white">
              VIEW RESUME
            </a>
          </Button>
        </Col>
        <Col md={4} className="my-5">
          <div className="p-5 d-flex justify-content-center align-items-center">
            <Image src={Avatar} width={300} height={400} />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center my-2 mb-3  blue-dark py-5">
        <Col md={4} className="">
          <div className="d-flex justify-content-center align-items-center">
            <Image src={CodeIllustration} width={200} height={200} />
          </div>
        </Col>
        <Col md={5}>
          <div className="text-justify px-4">
            <h2 className="color-light-blue mt-2">Education</h2>
            <div className="my-3 "> University: Ho Chi Minh City University of Science (HCMUS)</div>
            <div className="my-3 "> Major: Information Technology</div>
            <div className="my-3 "> Acedamic year: 2020 - 2024</div>
            <div className="my-3 "> English - TOEFL iTP: 487 score </div>
          </div>
          <div className="d-flex px-4">
            <a href="https://github.com/jjoevv" target="_blank" title="View my github" className="me-4">
              <Image src={GithubIcon} width={30} />
            </a>
            <a href="mailto:hhnnttvy@gmail.com" title="Send me email">
             
              <>
            <Button ref={target} onClick={() => setShow(!show)} className="bg-transparent border-0">
              <Image src={MailIcon} width={30} />
            </Button>
            <Overlay target={target.current} show={show} placement="right">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  Send me email at hhnnttvy@gmail.com
                </Tooltip>
              )}
            </Overlay>
          </>
            </a>


          </div>
        </Col>

      </Row>
      <div className=" py-4">
        <div className="my-4">
          <h3 className="text-center mb-4 color-light-blue me-5">Expertise</h3>
          {renderList(expertise)}
        </div>
        <div className="my-4">
          <h3 className="text-center mb-4 color-light-blue">Language programing/Technology</h3>
          {renderList(dev)}
        </div>
      </div>
      <div className="text-center pt-5 d-flex flex-column justify-content-center align-items-center bg-light-gray">
        <span className="fs-semi fw-semibold text-white mt-2 mb-5">Skills</span>
        <Row className="mb-5 w-100 px-5 mx-5 justify-content-center">
          {imageList.slice(0, 4).map((image, index) => (
            <Col xs={2} md={2} key={index} className="d-flex flex-column align-items-center p-0 text-white-50 m-2">
              <Image src={image.fileName} title={image.title} width={50} height={50} className="mb-1" />
              <span>{image.title}</span>
            </Col>
          ))}
        </Row>
        <Row className="mb-5 w-100 px-5 mx-5 justify-content-center">
          {imageList.slice(4).map((image, index) => (
            <Col xs={2} md={2} key={index} className="d-flex flex-column align-items-center p-0 text-white-50 m-2">
              <Image src={image.fileName} title={image.title} width={50} height={50} className="mb-1" />
              <span>{image.title}</span>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  )
}

export default About