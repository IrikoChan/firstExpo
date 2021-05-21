import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from 'contexts/AuthContext'
import AuthDrawer from './AuthDrawer'
import AppDrawer from './AppDrawer'

const Navigation = (): JSX.Element => {
  const {
    state: { userToken },
  } = useAuth()
  const isAuth = !!userToken
  return (
    <NavigationContainer>
      {isAuth ? <AppDrawer /> : <AuthDrawer />}
    </NavigationContainer>
  )
}

export default Navigation
