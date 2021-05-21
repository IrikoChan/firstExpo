import React from 'react'
import LoginScreen from 'screens/LoginScreen'
import SignupScreen from 'screens/LogoutScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'

export type StackParamList = {
  Login: undefined
}

// const Stack = createStackNavigator()
const Drawer = createDrawerNavigator<StackParamList>();

const AuthDrawer = (): JSX.Element => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  )
}

export default AuthDrawer
