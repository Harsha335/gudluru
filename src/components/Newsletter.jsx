import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';

const Container=styled.div`
    height: 60vh;;
    background-color: #fae9dd;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title=styled.h1`
font-family:'Dancing Script', cursive;
    font-size: 70px;
    margin-bottom:20px;
`
const Description=styled.div`
  font-family: 'Comfortaa', cursive;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign:"center"})};
`
const InputContainer=styled.div`
    width: 50%;
    ${mobile({width:"80%"})};
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input=styled.input`
    border:none;
    flex:10;
    padding-left: 20px;
`
const Button=styled.button`
    flex:1;
    border:none;
    background-color: #d96b27;
    color: white;
`
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates on your required Products..!!</Description>
      <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
            <SendIcon/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
