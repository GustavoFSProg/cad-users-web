import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
export const TitleSpan = styled.span`
  font-family: Roboto;
  font-size: 1.2rem;
  color: green;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  display: flex;
  margin-left: 10px;
  margin-bottom: 8px;
  margin-top: 19px;
`
export const Input = styled.input`
  font-family: Roboto;
  font-size: 1.1rem;
  color: green;
  display: flex;
  align-items: center;
  align-items: center;
  width: 28rem;
  height: 40px;
  border-radius: 14px;
  padding-left: 8px;
  padding-bottom: 4px;
  background: #ffffe6;
  border: 1px solid #cccc00;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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

  @media screen and (max-width: 700px) {
    cursor: pointer;
    width: 104%;
  }
`
export const Title = styled.span`
  font-family: Titan One;
  font-size: 2.5rem;
  margin-top: 20px;
  color: #006699;
`
