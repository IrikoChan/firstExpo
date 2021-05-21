import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from 'screens/HomeScreen'
import ImageListScreen from 'screens/ImageListScreen'
import { useLocalization } from 'contexts/LocalizationContext'
import { Ionicons } from '@expo/vector-icons';

export type TabParamList = {
  Home: undefined
  ImageList: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

const MainTab = (): JSX.Element => {
  const { t } = useLocalization()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'ImageList') {
            iconName = 'images';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'brown',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t('screens.HomeScreen.title', { defaultValue: 'Home' }),
        }}
      />
      <Tab.Screen
        name="ImageList"
        component={ImageListScreen}
        options={{
          title: t('screens.ImageList.title', { defaultValue: 'ImageList' }),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTab
