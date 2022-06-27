import { Link } from 'react-router-dom'
import { Container, Links } from './style-header'
import Menu from '../Menu/menu'

function Header() {
  return (
    <Container>
      <Menu />
      <Links>
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
      </Links>
    </Container>
  )
}

export default Header
