import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from 'screens/LoginScreen'
import SignupScreen from 'screens/SignupScreen'

export type StackParamList = {
  Login: undefined
  Signup: undefined
}

const Stack = createStackNavigator<StackParamList>()

const AuthStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
