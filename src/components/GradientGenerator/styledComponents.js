// Style your elements here

import styled from 'styled-components/macro'

export const BackgroundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`

export const MainHeading = styled.h1`
  color: white;
  font-family: 'roboto';
`
export const Paragraph = styled.p`
  color: white;
  font-family: 'roboto';
`
export const GradientDirectionList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
`

export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
`

export const GenerateButton = styled.button`
  color: white;
  font-family: 'roboto';
  background-color: blue;
  border: none;
  border-radius: 10px;
  height: 38px;
  width: 90px;
  margin-top: 10px;
`
