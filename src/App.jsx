import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from './api'
import './App.css'
import Header from './components/Header/Header'
import { Container, Button, Title, Input, TitleSpan } from './style-app'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      console.log({ email, password })
      const { data } = await api.post('/login', { email, password })

      // console.log(data.token)

      localStorage.setItem('Token', data.token)

      // history.push('/dashboard')

      return alert('Login  realizado com sucesso!')
    } catch (error) {
      return alert(`Deu erro no front do no Login ${error}`)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Title>LOGIN</Title>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            paddingBottom: '30px',
            paddingTop: '30px',
            // width: '100vw',
          }}
        >
          <div style={{ width: '100%' }}>
            <form onSubmit={handleSubmit}>
              <TitleSpan>Email:</TitleSpan>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TitleSpan>Senha:</TitleSpan>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <Button type="submit">Login</Button>
            </form>
          </div>
        </div>
      </Container>
    </>
  )
}

export default App
