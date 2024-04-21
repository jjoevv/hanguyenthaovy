import { Card, Col, Row } from 'react-bootstrap'
import Project1 from '../assets/imgs/graphic1.png'
import Project2 from '../assets/imgs/graphic2.png'
import Project3 from '../assets/imgs/graphic3.png'
import Project4 from '../assets/imgs/graphic4.png'
import Project5 from '../assets/imgs/graphic5.png'

const right = [
  { id: 1, image: Project3, title: "Member card", content: "Introducing our Back to School 2023 Staff Member Card, adorned with a distinctive paw print motif symbolizing unity and progress.", year: "2023" },
  { id: 2, image: Project1, title: "Introduction banner", content: "A directional board guiding visitors to the admissions counseling area, featuring an illustrative depiction of two pyramids, echoing the central message of the event.", year: "2023" },
  { id: 3, image: Project2, title: "Cards", content: "Through intricate and unique imagery, each invitation and greeting card is a work of art, bringing you joy and delight on every special occasion", year: "2024" },
  
];
const left = [
    { id: 4, image: Project4, title: "Post Happy New Year 2023", content: "This is my design featuring the tiger as the mascot of the year, symbolizing strength, courage, and good fortune.", year: "2022" },
    { id: 5, image: Project5, title: "Hashtag in event", content: "Here is the handheld hashtag for the Back to School event with the main theme being Pyramid.", year: "2023" },
]


const Graphic = () => {
  return (
        <Row className=' w-100 d-flex mt-5 justify-content-center'>
            <Col xs={12} md={4} className='mx-1'>
                <span>- Graphic Designer <br/> </span>
                <div className='h4 mt-1 mb-4'>From Concept to Canvas: <br/>  A Collection of My Graphic Designs<br/></div>
                <div className='px-5 text-justify'>Discover my graphic creations—a realm of unrestricted creativity where ideas come to life in vibrant visuals. Each piece carries a distinct theme and message, capturing the essence of artistic freedom and expression.</div>
                <div className='mt-5 pt-5 d-flex flex-column align-items-center'>
                {left.map(project => (
                <Card className='my-5 my-card' key={project.id}>
                    <Card.Img 
                        variant="top" 
                        src={project.image} 
                        className='my-img'/>
                    <Card.ImgOverlay className='d-flex align-items-center flex-column justify-content-center my-card-hover'
                        style={{
                            position: 'absolute',
                            backgroundColor: `rgba(0, 0, 0, 0.6)`,
                            color: 'white', // Màu sắc của đoạn văn bản
                            textAlign: 'center',
                        }}>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.content}</Card.Text>
                        <Card.Text>Tool: Adobe Illustrator</Card.Text>
                        <Card.Text>Mockup: Canva</Card.Text>
                        <Card.Text>Year// {project.year}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                ))}
                </div>
            </Col>
            <Col xs={12} md={4} className="d-flex flex-column align-items-center mx-5">
              {right.map(project => (
                <Card className='me-3 my-5 my-card' key={project.id}>
                    <Card.Img 
                        variant="top" 
                        src={project.image} 
                        className='my-img'/>
                    <Card.ImgOverlay className='d-flex align-items-center flex-column justify-content-center my-card-hover'
                        style={{
                            position: 'absolute',
                            backgroundColor: `rgba(0, 0, 0, 0.6)`,
                            color: 'white', // Màu sắc của đoạn văn bản
                            textAlign: 'center',
                        }}>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.content}</Card.Text>
                        
                        <Card.Text>Tool: Adobe Illustrator</Card.Text>
                        <Card.Text>Mockup: Canva</Card.Text>
                        <Card.Text>Year// {project.year}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                ))}
            </Col>
        </Row>
  )
}

export default Graphic