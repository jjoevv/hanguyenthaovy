import { useState } from 'react'
import { ButtonGroup, Container, Image } from 'react-bootstrap'
import UXUXIcon from '../assets/imgs/uxui.png'
import ProductIcon from '../assets/imgs/designer.png'
import DevIcon from '../assets/imgs/dev.png'
import UXUI from './UXUI'
import Graphic from './Graphic'
import WebDev from './WebDev'
const navs = [
  { id: 1, title: 'UX/UI Designer', icon: UXUXIcon, component: <UXUI/> },
  { id: 2, title: 'Graphic Designer', icon: ProductIcon, component: <Graphic/> },
  { id: 3, title: 'Frontend Developer', icon: DevIcon, component: <WebDev/> },
]
const Skills = () => {
  const [selectedComponent, setSelectedComponent] = useState(navs[0].component);
  const [selectedNav, setSelectedNav] = useState(navs[0].id);

  const showComponent = (component, id) => {
    setSelectedComponent(component);
    setSelectedNav(id)
    
  const selectedComponent = document.querySelector('.selected-component');
  selectedComponent.classList.add('active');
  };
  return (
    <Container fluid className='mx-0 px-0 overflow-hidden text-white py-4'>
      <h2 className='text-center my-4'>Porfolio</h2>
      <div className='bg-buttongroup d-flex justify-content-center align-items-center  '>
        <ButtonGroup className='mx-auto'>
          {
            navs.map((nav) => (
              <button key={nav.id} className={`skill mx-4 ${selectedNav === nav.id ? 'skill-active' : ''}`}
                onClick={() => showComponent(nav.component, nav.id)}>
                <Image src={nav.icon} width={20} height={20} className='mx-4 mt-3' />
                <div className='fw-bold fs-4 text-start text-tab'>{nav.title}</div>
              </button>
            ))
          }
        </ButtonGroup>
      </div>
      <div className="my-3">
        {selectedComponent}
      </div>
      
    </Container>
  )
}

export default Skills