import React from 'react'
import MainTab from './MainTab'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ImageList from 'screens/ImageListScreen'
import LogoutScreen from 'screens/LogoutScreen'
import HomeScreen from 'screens/HomeScreen'

export type StackParamList = {
  Main: undefined
  Home: undefined
  ImageList: undefined
  Logout: undefined
}

const Drawer = createDrawerNavigator<StackParamList>();

const AppDrawer = (): JSX.Element => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={MainTab} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="ImageList" component={ImageList} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  )
}

export default AppDrawer
