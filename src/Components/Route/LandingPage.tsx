import React, { useState,useEffect } from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import pic from "../images/jud2.png"

const LandingPage = () => {
    const navigate = useNavigate()
const [name,setName] = useState("")


//THis is for DOM Storage
const AddUser = ()=>{
      window.localStorage.setItem("codelabname", JSON.stringify(name));
navigate("/To-dolist");
};

useEffect(()=>{
  
})
  return (
    <Container>
     
        <ImageBox>
            <img src={pic} alt="" />
        </ImageBox>
      <h1>Welcome to Codelab To-do List</h1>
      <p>Please fill in your name to crate Your task</p>
      <Inputfield
      onChange={(e)=>{
        setName(e.target.value)
      }}
       placeholder="Enter your name" />
      {name !== "" ? (
        <Button onClick={AddUser} bg="black">Lets go</Button>
      ) : (
        <Button bg="silver">Lets go</Button>
      )}
      <p>Developed by Codelab😎</p>
    </Container>
  );
}

export default LandingPage;

const ImageBox = styled.div`
  height:100px ;
  width: 300px;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* background-color: red; */
  }
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;

  h1{
    color: white;
    @media screen and (max-width: 500px){
        width: 300px;
       text-align: center;
       margin: 0;
       margin-top: 20px;

    }
  }

p{
    color: white;
    /* margin: 0; */
}
`;
const Inputfield = styled.input`
width: 400px;
height: 50px;
border:none;
padding-left: 10px;
border-radius: 5px;
outline-color: #dcd9f8;
transition: all 350ms;

@media screen and (max-width: 500px){
    width: 280px;
}


`
const Button = styled.button<{ bg: string }>`
  width: 400px;
  height: 50px;
  border: none;
  margin-top: 20px;
  outline: none;
  background-color: ${(props) => props.bg};
  color: white;
  border-radius: 20px;
  transition: all 350ms;
  cursor: pointer;
  font-size: 16px;

  :hover {
    transform: scale(0.98);
  }

  @media screen and (max-width: 500px) {
    width: 270px;
  }
`;