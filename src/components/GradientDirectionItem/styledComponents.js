// Style your elements here

import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 50%;
  list-style-type: none;
`

export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')}
  font-family:'roboto';
  border-radius:9px;
  border:none;
  padding:10px;
  margin-right:10px;
  opacity: ${props => (props.isActive ? 1 : 0.5)}
`
