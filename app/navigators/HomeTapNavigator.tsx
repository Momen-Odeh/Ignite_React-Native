import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import * as Screens from "app/screens"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type TabStackParamList = {
  // 🔥 Your screens go here
  HomeTap: undefined
  Settings: undefined
  Users: undefined
  // HameNavigator: undefined
  // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
}

export type TabsScreenProps<T extends keyof TabStackParamList> = NativeStackScreenProps<
  TabStackParamList,
  T
>

const Tab = createBottomTabNavigator<TabStackParamList>()
export const HomeTapNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTap" component={Screens.HomeScreen} />
      <Tab.Screen name="Settings" component={Screens.SettingsScreen} />
      <Tab.Screen name="Users" component={Screens.UsersScreen} />
    </Tab.Navigator>
  )
}
