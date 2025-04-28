import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" className="mb-4" style={{ 
      background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <h1 
            className="m-0 text-white"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontWeight: '700',
              letterSpacing: '1px'
            }}
          >
            Clothes Shop
          </h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;