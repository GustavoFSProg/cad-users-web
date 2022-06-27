import styled from 'styled-components'
import Tigre from './assets/ponte.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-top: 50px;
`
export const Image = styled.img`
  display: flex;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 720px) {
    display: none;
  }
`
export const TitleSpan = styled.span`
  font-family: Roboto;
  font-size: 1.2rem;
  color: green;

  text-align: left;
  margin-left: 10px;
  margin-bottom: 8px;
  margin-top: 19px;

  @media screen and (max-width: 500px) {
    color: #e6ffe6;
  }
`
export const Input = styled.input`
  font-family: Roboto;
  font-size: 1.1rem;
  color: green;
  display: flex;
  align-items: center;
  width: 27.2rem;
  height: 40px;
  border-radius: 14px;
  padding-left: 8px;
  padding-bottom: 4px;
  background: #ffffe6;
  border: 1px solid #cccc00;

  @media screen and (max-width: 520px) {
    width: 16.1rem;
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28.2rem;

  border-radius: 10px;
  height: 3rem;
  text-align: center;
  font-size: 1.2rem;
  background: #00aaff;
  color: white;
  transition: ease 0.6s;
  font-family: Roboto;
  cursor: pointer;

  :hover {
    background: #80d4ff;
    cursor: pointer;
  }

  @media screen and (max-width: 520px) {
    cursor: pointer;
    width: 16.9rem;
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
  //
  //
`
export const DivFormApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  margin-top: -115px;

  /* margin-top: -115px; */

  /* @media screen and (max-width: 700px) {
    margin-top: 25px;
    background: url(${Tigre}) no-repeat;
    background-size: cover;
    margin-top: -195px;
    padding-bottom: 20px;

    z-index: 0;
  } */
  //
`
export const DivFormRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  margin-top: -115px;

  @media screen and (max-width: 700px) {
    margin-top: 25px;
    /* background: url(${Tigre}) no-repeat; */
    /* background-size: cover; */
    margin-top: -105px;
    padding-bottom: 20px;
  }
`
