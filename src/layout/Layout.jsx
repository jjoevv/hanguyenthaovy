
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Logo from './../assets/imgs/logo.png'
const Layout = () => {
  const location = useLocation()
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };
  return (
    <>
    <ScrollToTop/>
     <Navbar collapseOnSelect expand="lg" className='blue-normal p-0 w-100 shadow' fixed='top'>
  <Container fluid className='d-flex justify-content-between mx-5 px-2 p-0'>
    <Link to="/" className='ms-5 py-2 fs-large text-primary'>
      <Image src={Logo} width={60}/>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle-icon'/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <Link to='/' className={location.pathname === '/' ? 'active-link nav-link' : 'nav-link'}>Projects</Link>
        <Link to='/aboutme' className={location.pathname === '/aboutme' ? 'active-link nav-link' : 'nav-link'}>About</Link>
        <Link to='/contact' className={location.pathname === '/contact' ? 'active-link nav-link' : 'nav-link'}>Contact</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      <Outlet />
    </>

  )
}

export default Layout