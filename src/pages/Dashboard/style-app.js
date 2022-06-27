import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
`

export const Image = styled.img`
  display: flex;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 720px) {
    display: none;
  }
`
export const Title = styled.span`
  font-family: Titan One;
  font-size: 2.5rem;
  color: #007399;

  display: flex;
  justify-content: start;
  padding-top: 85px;

  @media screen and (max-width: 700px) {
    color: #00aaff;
  }
`
