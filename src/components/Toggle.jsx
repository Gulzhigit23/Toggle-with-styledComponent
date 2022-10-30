import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import AuthContext from '../store/AuthContext'


function Toggle() {
    const contextData = useContext(AuthContext)
    
    const handleToggle = (props) => {
      contextData.setIsOn((prev) => !prev)
    }
  return (
   
       
         <ToggleButton isOn={contextData.isOn} onClick={handleToggle} />
    
   
   
  )
}

export default Toggle






const ToggleButton = styled.div`
width:  60px;
height: 20px;
margin: 10px 0;
border-radius: 30px;
display: flex;
align-items: center;
cursor: pointer;
position: relative;
background-color: ${(props) => (props.isOn === true ? "green" : "black")};
transition: background-color 500ms linear;
&::before {
    content: '${(props) => (props.isOn === true ? '|' : "0")}';
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    margin: 0 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${(props) => (props.isOn === true ? "41px" : "0")};
    transition: left 500ms linear;

}
`