import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 48px;
  background: #0099e6;
`
export const TitleSpan = styled.span`
  font-family: Roboto;
  font-size: 1.2rem;
  color: green;
  align-items: flex-start;
  display: flex;
  margin-left: 10px;
  margin-bottom: 5px;
  margin-top: 17px;
`
export const Input = styled.input`
  font-family: Roboto;
  font-size: 1.4rem;
  color: green;
  align-items: flex-start;
  display: flex;
  width: 30rem;
  height: 40px;
  border-radius: 14px;
  padding-left: 10px;
  padding-bottom: 4px;
  background: #ffffe6;
  border: 1px solid #cccc00;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  height: 3.1rem;
  text-align: center;
  font-size: 1.3rem;
  background: #00aaff;
  color: white;
  transition: ease 0.6s;
  font-family: Roboto;

  :hover {
    background: #80d4ff;
    cursor: pointer;
  }
`
export const Title = styled.span`
  font-family: Titan One;
  font-size: 2.5rem;
  margin-top: 20px;
  color: #006699;
`
