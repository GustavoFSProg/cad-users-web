import { useState } from 'react'
import api from './api'
import Header from './components/Header/Header'
import { Container, Button, Input, TitleSpan, Title } from './style-app'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const token = localStorage.getItem('Token')

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      console.log(token)
      const dados = { name, email, password, token }

      await api.post('/register', dados)

      // console.log(data.token)

      // history.push('/dashboard')

      return alert('Cadastro  realizado com sucesso!')
    } catch (error) {
      return alert(`Deu erro no front do no Login ${error}`)
    }
  }

  return (
    <div>
      <Header />
      <Title style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        CADASTRO
      </Title>
      <Container style={{ marginTop: '22px', width: '97%' }}>
        <form onSubmit={handleSubmit}>
          <TitleSpan>Name:</TitleSpan>
          <Input id="name" type="name" value={name} onChange={(e) => setName(e.target.value)} />

          <TitleSpan>Email:</TitleSpan>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <TitleSpan>Senha:</TitleSpan>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button type="submit">Cadastrar</Button>
        </form>
      </Container>
    </div>
  )
}

export default Register
