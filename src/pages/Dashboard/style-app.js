import styled from 'styled-components'
import Dash from '../../assets/dash-3.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98vw;
  height: 100vh;
  background: url(${Dash}) no-repeat;
  background-size: cover;

  @media screen and (max-width: 600px) {
    margin-top: 40px;
    width: 100vw;
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
  color: #00aaff;

  display: flex;
  justify-content: start;
  padding-top: 85px;

  @media screen and (max-width: 700px) {
    color: #00aaff;
  }
`
