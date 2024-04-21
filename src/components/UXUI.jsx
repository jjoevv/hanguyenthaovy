import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import Project1 from '../assets/imgs/app1.png'
import Project2 from '../assets/imgs/conf2.png'
import Project3 from '../assets/imgs/pet1.png'

import ArrowIcon from '../assets/imgs/arrow.png'
import { useNavigate } from 'react-router-dom'

const items = [
  { id: 'elearning', image: Project1, title: "E-learning app", content: "An English learning app provides accessible language education resources, empowering users to improve their English proficiency with ease and flexibility.", year: "2024", link: '/project/1' },
  { id: 'conferencesearch', image: Project2, title: "Conference Searching", content: "A conference tracking website simplifies the search and management of domestic and international conferences, featuring integrated administrative tools for streamlined event oversight.", year: "2023 - 2024", link: '/project/1' },

];


const UXUI = () => {
  const navigate = useNavigate()
  return (
    <Row className='w-100 mt-5 d-flex justify-content-center'>
      <Col xs={12} md={4} className='mx-1'>
        <span>- UXUI Designer <br /> </span>
        <div className='h4 mt-1 mb-4'>User-Centric Creations:<br />  An Insight into My UX/UI Projects<br /></div>
        <div className='px-5 text-justify '>My UX/UI process involves conducting detailed user research, building wireframes and prototypes for interaction testing, and then deploying user testing to gather feedback. I focus on optimizing the user interface, ensuring flexible integration, and creating a smooth and user-friendly user experience</div>


        <div className='mt-5 pt-5 d-flex flex-column align-items-center'>
          <Card className='my-card'>
            <Card.Img
              variant="top"
              src={Project3}
              className='my-img' />
            <Card.ImgOverlay className='d-flex align-items-center flex-column justify-content-center my-card-hover'
              style={{
                position: 'absolute',
                backgroundColor: `rgba(0, 0, 0, 0.6)`,
                color: 'white', // Màu sắc của đoạn văn bản
                textAlign: 'center',

              }}>
              <Card.Title>Petshop Website</Card.Title>
              <Card.Text className='text-justify'>This is a class project on designing a website interface for the care and rescue of animals.</Card.Text>
              <Card.Text>Year// 2023</Card.Text>
              <Button className='tertiary-normal border-0' onClick={() => navigate(`/project/petshop`)}>
                <Image src={ArrowIcon} width={18} className='me-3' />
                See more
              </Button>
            </Card.ImgOverlay>

          </Card>
        </div>
      </Col>
      <Col xs={12} md={4} className="d-flex flex-column align-items-center">
        {items.map(project => (
          <Card className='my-5 my-card' key={project.id}>
            <Card.Img
              variant="top"
              src={project.image}
              className='my-img'
              width={340}
              height={440} />
            <Card.ImgOverlay className='d-flex align-items-center flex-column justify-content-center my-card-hover'
              style={{
                position: 'absolute',
                backgroundColor: `rgba(0, 0, 0, 0.6)`,
                color: 'white', // Màu sắc của đoạn văn bản
                textAlign: 'center',
              }}>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text className='text-justify'>{project.content}</Card.Text>
              <Card.Text>Year// {project.year}</Card.Text>
              <Button className='tertiary-normal border-0' onClick={() => navigate(`/project/${project.id}`)}>
                <Image src={ArrowIcon} width={18} className='me-3' />
                See more
              </Button>
            </Card.ImgOverlay>
          </Card>
        ))}
      </Col>
    </Row>
  )
}

export default UXUI