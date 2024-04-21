import { Button, Col, Container, Image, Row } from "react-bootstrap"
import Avatar from './../assets/imgs/avatar.jpg'
import Skills from "../components/Skills"

import FigmaIcon from '../assets/imgs/figma.png'
import AiIcon from '../assets/imgs/illustrator.png'
import SketchIcon from '../assets/imgs/sketch.png'
import CssIcon from '../assets/imgs/css.png'
import HTMLIcon from '../assets/imgs/html.png'
import JavascriptIcon from '../assets/imgs/javascript.png'
import ReactJSIcon from '../assets/imgs/reactjs.png'
import PythonIcon from '../assets/imgs/python.png'
import { useNavigate } from "react-router-dom"


const Project = () => {
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

  const navigate = useNavigate()
  return (
    <Container fluid className="blue-normal px-5 pt-5">
      <div className="homepage pt-4 d-flex justify-content-center my-5">
        
        <div className=" mx-5 p-5">
          <p className="text-white fw-bold fs-normal m-0">Hello! I am</p>
          <p className="text-white fs-larger fw-bolder m-0">HA NGUYEN THAO VY</p>
          <p className="text-white fw-semibold fs-large">UX/UI Designer</p>
          <p className="text-white fs-normal pe-5">{`Embark on a design journey that goes beyond pixels. Let's create meaningful user experiences together – your vision, my craft.`}</p>

          <Button 
          onClick={()=>navigate('/contact')}
          className="bg-blue-main border border-0 button-gradient mx-3">
            Contact {">"}
          </Button>        
        </div>

        <div className="image-frame mt-5">
          <Image src={Avatar} alt="HA NGUYEN THAO VY" />
        </div>
      </div>

      <div className="text-center d-flex flex-column justify-content-center align-items-center bg-light-gray">
        <span className="fs-semi fw-semibold text-white mt-2 mb-5">Skills</span>
        <Row className="mb-5 w-100 px-5 justify-content-center">
  {imageList.map((image, index) => (
    <Col key={index} xs={3} md={3} className="d-flex flex-column align-items-center p-0 my-4 text-white-50 m-2">
      <Image src={image.fileName} title={image.title} width={50} height={50} className="mb-1" />
      <span>{image.title}</span>
    </Col>
  ))}
</Row>
      </div>
      <Skills />
    </Container>
  )
}

export default Project