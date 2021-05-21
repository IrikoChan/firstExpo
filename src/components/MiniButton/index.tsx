import React from 'react'
import styled from '@emotion/native'
import Text from 'components/Text'
import { AntDesign } from '@expo/vector-icons';

export type TouchableProps = {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
  outline?: boolean
  block?: boolean
  disabled?: boolean
}

export type Props = {
  testID: string
  title: string
  
  onPress: () => void
} & TouchableProps

const Touchable = styled.TouchableOpacity<TouchableProps>`
  background-color: ${(props) => props.theme.color[props.color || 'white']};
  margin-top: 6px;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
`
const ButtonText = styled(Text)`
  color: brown;
`
const MiniButton = ({
  testID,
  title,
  onPress,
  color,
  outline = false,
  block = false,
  disabled = false,
}: Props): JSX.Element => {
  return (
    <Touchable
      testID={testID}
      onPress={onPress}
      color={color}
      outline={outline}
      block={block}
      disabled={disabled}
    >
      <AntDesign name="like2" size={24} color="brown" />
      <ButtonText bold>{title}</ButtonText>
    </Touchable>
  )
}

export default MiniButton
