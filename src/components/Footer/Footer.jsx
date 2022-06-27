import { FooterContainer, ContainerImages, LinksContainer, ContainerText } from './styles'
import Whatsapp from './images/whats.svg'
import Insta from './images/insta.svg'
import Email from './images/email.svg'
import Face from './images/face.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <FooterContainer>
      <LinksContainer>
        <ContainerImages style={{ alignItems: 'center', display: 'flex' }}>
          <a
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'white',
            }}
            target="_blank"
            href={`https://wa.me/+5551993965345?text=Olá, gostaria de um orçamento`}
          >
            <img src={Whatsapp} alt="whataspp" width="25" />
            <span style={{ marginLeft: '10px', fontFamily: 'Arial', fontSize: '17px' }}>
              (51)-993965345
            </span>
          </a>
        </ContainerImages>

        <ContainerImages>
          <a
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'white',
            }}
            target="_blank"
            href={`mailto:gerusagamm@gmail.com?subject=Minha Mensagem&body=Olá, Bom dia!
           
          `}
          >
            <img src={Email} alt="email" width="25" />
            <span style={{ marginLeft: '10px', fontFamily: 'Arial', fontSize: '17px' }}>
              gerusagamm@gmail.com
            </span>
          </a>
        </ContainerImages>
        <ContainerText>
          <a href=" https://www.facebook.com/profile.php?id=100011357965761">
            <img src={Face} alt="whataspp" width="35" style={{ marginRight: '25px' }} />
          </a>

          <a href="https://www.instagram.com/espaco.vidya/?hl=pt-br">
            <img src={Insta} alt="whataspp" width="35" />
          </a>
        </ContainerText>
      </LinksContainer>
    </FooterContainer>
  )
}

export default Footer
