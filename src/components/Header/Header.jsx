import { Link } from 'react-router-dom'
import { Container } from './style-header'

function Header() {
  return (
    <Container>
      <Link
        style={{
          textDecoration: 'none',
          fontSize: '1.17rem',
          fontFamily: 'Garamond',
          fontWeight: 'bold',
          color: 'white',
        }}
        to="/"
      >
        HOME
      </Link>
      <Link
        style={{
          textDecoration: 'none',
          fontSize: '1.17rem',
          fontFamily: 'Garamond',
          fontWeight: 'bold',
          color: 'white',
        }}
        to="/dashboard"
      >
        DASHBOARD
      </Link>

      <Link
        style={{
          textDecoration: 'none',
          fontSize: '1.17rem',
          fontFamily: 'Garamond',
          fontWeight: 'bold',
          color: 'white',
        }}
        to="/register"
      >
        CADASTRO
      </Link>
    </Container>
  )
}

export default Header
