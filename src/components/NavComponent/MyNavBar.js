'use client'
// import { Navbar, Nav, Button, Container } from 'react-bootstrap';

// const MyNavbar = () => {
//   return (
//     <Navbar expand="lg" className="bg-light">
//       <Container>
//         <Navbar.Brand href="#">
//           {/* Replace with your logo */}
//           <img
//             src="/images/logo.png"
//             alt="Logo"
//             height="30"
//             className="d-inline-block align-top"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <div className="d-flex w-100 justify-content-between">
//             <Nav className="ml-auto">
//               <Nav.Link href="#about" className="text-sm">About Us</Nav.Link>
//               <Nav.Link href="#companies">Companies</Nav.Link>
//               <Nav.Link href="#seeq">SEEQ</Nav.Link>
//               <Nav.Link href="#jobs">Jobs</Nav.Link>
//               <Nav.Link href="#resources">Resources</Nav.Link>
//               <Nav.Link href="#platforms">Platforms</Nav.Link>
//               <Nav.Link href="#initiatives">Initiatives</Nav.Link>
//             </Nav>
//             <div className='custom-button'>
//               <Button className="btn-dark">Apply to SIP 1.0</Button>
//             </div>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default MyNavbar;

import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="#">
          {/* Replace with your logo */}
          <img
            src="/images/logo.png"
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex w-100 justify-content-between">
            <Nav className="ml-auto">
              <Nav.Link href="#about" className="nav-link-custom"><p>About Us</p></Nav.Link>
              <Nav.Link href="#companies" className="nav-link-custom"><p>Companies</p></Nav.Link>
              <Nav.Link href="#seeq" className="nav-link-custom"><p>SEEQ</p></Nav.Link>
              <Nav.Link href="#jobs" className="nav-link-custom"><p>Jobs</p></Nav.Link>
              <Nav.Link href="#resources" className="nav-link-custom"><p>Resources</p></Nav.Link>
              <Nav.Link href="#platforms" className="nav-link-custom"><p>Platforms</p></Nav.Link>
              <Nav.Link href="#initiatives" className="nav-link-custom"><p>Initiatives</p></Nav.Link>
            </Nav>
            <div className='custom-button'>
              <Button className="btn-dark">Apply to SIP 1.0</Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
