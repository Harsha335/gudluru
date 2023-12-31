import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive"
import formatCurrency from'../formatCurrency'
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import acidLevel from '../Images/acidLevelIndicator.jpg'

const Container =styled.div``
const Wrapper=styled.div`
  padding:50px;
  display: flex;
  ${mobile({padding:"10px",flexDirection:"column"})};
`
const ImageContainer=styled.div`
  flex:1;
`
const Image=styled.img`
  width: 80%;
  height: 65vh;
  object-fit:contain;
`
const InfoContainer=styled.div`
  flex:1;
  padding:50px 50px 0px;
  ${mobile({padding:"10px"})}
`
const Title=styled.h1`
font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
`
const Description=styled.p`
  
  font-family: 'Dosis', sans-serif;
  margin:20px 0px;
`
const Price=styled.span`
  font-weight: 100;
  font-size: 25px;
`
const FilterContainer=styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width:"100%"})};
`
const Filter=styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle=styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor=styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`
const FilterSize=styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption=styled.option`

`
const AddContainer=styled.div`
  margin-top:8%;
`
const AmountContainer=styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount=styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:0 5px;
`
const mainButton=styled.div`
  
`
const Button=styled.button`
  font-family: 'Comfortaa', cursive;
  padding: 13px;
  border:2px solid #d87034;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  border-radius: 8px;
  margin-right: 25px;
  &:hover{
    background-color:#d87034;
    color:white;
    box-shadow: 1px 2px 2px #b59887;
    transition: 100ms ease-in-out;
  }
`

const Product = () => {
  const [addItem,setCount]=useState(false);
  const handle=()=>{
    setCount(!addItem);
  }
  const nav=useNavigate();
  const navigateToCart=()=>
  {
    nav("/cart");
  }

  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <ImageContainer>
          <Image src={acidLevel}/>
        </ImageContainer>
        <InfoContainer>
          <Title>
            Component 1
          </Title>
          <Description>
            This is description about product..!!
            The Nokia 1020mAh battery is a powerful Li-Ion battery that has a voltage of 3.7V.
            It is always recommended using original batteries as they do not explode on continuous use.
            If you use your Nokia smartphone for various tasks like playing games, listening to music 
            or for watching videos, then this Nokia battery can come to your aid.<br/>
            Batteries : 5 AA batteries required. (included)<br/>
            Item model number : BL-5C<br/>
            Model : BL-5C<br/>
            Product Dimensions : 10.9 x 9.7 x 0.4 cm; 20 Grams
          </Description>
          <Price>{formatCurrency(100)}</Price>
          {/* <FilterContainer>
            <Filter>
              <FilterTitle>Color </FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="darkblue"/>
              <FilterColor color="gray"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer> */}
          <AddContainer>
            {!addItem && <Button onClick={handle}>Add to cart</Button>}
            {addItem  && <mainButton><Button onClick={navigateToCart}>Go to cart</Button>
                <Button onClick={handle}>Remove from cart</Button>
                </mainButton>
            }
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
