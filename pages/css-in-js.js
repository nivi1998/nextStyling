import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
font-size : 50px;
color :${({ theme }) => theme.colors.primary};
`
const CssJs = () => {
  return 
    {/* <h2>CssJs</h2>
    <h1 style={{color: 'red'}}>Hello world</h1> */}
    <Title>Styled Components</Title>
   
}

export default CssJs