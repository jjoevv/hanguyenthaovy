import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import Project1 from '../assets/imgs/conf2.png'
import Project2 from '../assets/imgs/chat1.png'
import ArrowIcon from '../assets/imgs/arrow.png'
import { useNavigate } from 'react-router-dom';
const items = [
    { id: 'conferencesearch', image: Project1, title: "Conference Searching Project", content: "A conference tracking website simplifies the search and management of domestic and international conferences, featuring integrated administrative tools for streamlined event oversight.", year: "2023 - 2024", link: '/project/conferencesearch' },
    
];


const WebDev = () => {
    const navigate = useNavigate()
    return (
          <Row  className='mt-5 d-flex justify-content-center'>
              <Col xs={12} md={4} className='mx-1'>
              <span>- Frontend Developer <br/> </span>
                <div className='h4 mt-1 mb-4'>From Campus to Codebase: <br/> Showcasing Frontend Projects during University Studies<br/></div>
                <div className='px-5 text-justify'>Explore the intersection of academia and code, a showcase highlighting the progression of my Frontend projects during my university studies.</div>
  
                
                  <div className='mt-5 pt-5 d-flex flex-column align-items-center'>
                    <Card className='my-card'>
                        <Card.Img 
                            variant="top" 
                            src={Project2} 
                            className='my-img'/>
                        <Card.ImgOverlay className='d-flex align-items-center flex-column justify-content-center my-card-hover'
                            style={{
                                position: 'absolute',
                                backgroundColor: `rgba(0, 0, 0, 0.6)`,
                                color: 'white', // Màu sắc của đoạn văn bản
                                textAlign: 'center',
  
                            }}>
                            <Card.Title>Chatting Website</Card.Title>
                            <Card.Text className='text-justify'>An intuitive interface for a chat website, enabling real-time communication and user interaction in customizable chat rooms.</Card.Text>
                            <Card.Text>- 2023 -</Card.Text>
                            <Button className='tertiary-normal border-0' onClick={()=>navigate(`/project/chatapp`)}>
                            <Image src={ArrowIcon} width={18} className='me-3'/>
                            See more
                          </Button>
                        </Card.ImgOverlay>
                        
                    </Card>
                  </div>
              </Col>
              <Col xs={12} md={4} className="d-flex flex-column align-items-center mx-5">
                {items.map(project => (
                  <Card className='me-3 my-5 my-card' key={project.id}>
                      <Card.Img 
                          variant="top" 
                          src={project.image} 
                          className='my-img'
                          width={340}
                          height={440}/>
                      <Card.ImgOverlay className='d-flex align-items-center flex-column justify-content-center my-card-hover'
                          style={{
                              position: 'absolute',
                              backgroundColor: `rgba(0, 0, 0, 0.6)`,
                              color: 'white', // Màu sắc của đoạn văn bản
                              textAlign: 'center',
                          }}>
                          <Card.Title>{project.title}</Card.Title>
                          <Card.Text className='text-justify'>{project.content}</Card.Text>
                          <Card.Text>- {project.year} -</Card.Text>
                          <Button className='tertiary-normal border-0' onClick={()=>navigate(`/project/${project.id}`)}>
                            <Image src={ArrowIcon} width={18} className='me-3'/>
                            See more
                          </Button>
                      </Card.ImgOverlay>
                  </Card>
                  ))}
              </Col>
          </Row>
    )
}

export default WebDev