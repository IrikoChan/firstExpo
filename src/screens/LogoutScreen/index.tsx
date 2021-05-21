import React from 'react'
import Container from 'components/Container'
import Content from 'components/Content'
import Text from 'components/Text'
import Button from 'components/Button'
import { useAuth } from 'contexts/AuthContext'

export type Props = {
  navigation: any
}

const LogoutScreen = ({ navigation }: Props): JSX.Element => {
  const {
    authContext: { logout },
  } = useAuth()
  return (
    <Container>
      <Content>
        <Text>Do you want to Logout?</Text>
        <Button testID="logout" title="Yes" onPress={() => logout()} />
        <Button testID="still" title="No" onPress={() => navigation.goBack('Home')} />
      </Content>
    </Container>
  )
}

export default LogoutScreen
