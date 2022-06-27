import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  color: white;
  /* background: #006666; */
  background: #9d5716;

  /* margin-top: 4rem; */
  justify-content: space-around;
  align-items: flex-start;
  padding: 3rem;
`

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 4rem;
  gap: 15px;
  grid-gap: 15px;
  padding-bottom: 14px;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 95px;
  }
`
export const Span = styled.span`
  font-size: 1.1rem;
  font-weight: none;
  font-weight: bold;
  font-family: 'Arial';
  letter-spacing: 0.1rem;
  transition: ease 0.5s;
  width: 12rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  margin-bottom: 10px;
  cursor: pointer;
  color: white;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ContainerText = styled.div`
  align-items: center;
  display: flex;

  @media screen and (max-width: 700px) {
    margin-top: 22px;
  }
`
export const ContainerImages = styled.div`
  align-items: center;
  display: flex;

  @media screen and (max-width: 700px) {
    margin-top: 21px;
  }
`
