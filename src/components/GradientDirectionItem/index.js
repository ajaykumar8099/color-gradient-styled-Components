// Write your code here

import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, isActive, onClickGradient} = props
  const {displayText, value} = gradientDirectionDetails

  const onClickItem = () => {
    onClickGradient(value)
  }
  return (
    <ListItem>
      <DirectionButton isActive={isActive} type="button" onClick={onClickItem}>
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}
export default GradientDirectionItem
