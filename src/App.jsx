import { useState } from 'react'
import api from './api'
import './App.css'
import Header from './components/Header/Header'
import Imagem from './assets/foto.jpg'

import { ContainerApp, DivFormApp, Button, Image, Title, Input, TitleSpan } from './style-app'
import { useHistory } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      console.log({ email, password })
      const { data } = await api.post('/login', { email, password })

      localStorage.setItem('Token', data.token)

      history.push('/dashboard')

      return alert('Login  realizado com sucesso!')
    } catch (error) {
      return alert(`Deu erro no front do no Login ${error}`)
    }
  }

  return (
    <>
      <Header />

      <ContainerApp>
        <Image src={Imagem} alt="imagem" />
        <DivFormApp>
          <Title>LOGIN</Title>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'auto',
              paddingBottom: '30px',
              paddingTop: '30px',
              width: '100%',
            }}
            onSubmit={handleSubmit}
          >
            <div
              style={{
                alignItems: 'flex-start',
                flexDirection: 'column',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <TitleSpan>Email:</TitleSpan>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div
              style={{
                alignItems: 'flex-start',
                flexDirection: 'column',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <TitleSpan>Senha:</TitleSpan>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <br />
            <br />
            <Button type="submit">Login</Button>
          </form>
        </DivFormApp>
      </ContainerApp>
      <Footer />
    </>
  )
}

export default App
