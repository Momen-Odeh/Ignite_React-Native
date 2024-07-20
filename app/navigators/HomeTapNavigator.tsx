import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import * as Screens from "app/screens"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ModalStackNavigator } from "./ModalStackNavigator"

export type TabStackParamList = {
  HomeTap: undefined
  Settings: undefined
  Users: undefined
}

export type TabsScreenProps<T extends keyof TabStackParamList> = NativeStackScreenProps<
  TabStackParamList,
  T
>

const Tab = createBottomTabNavigator<TabStackParamList>()
export const HomeTapNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTap" component={ModalStackNavigator} />
      <Tab.Screen name="Settings" component={Screens.SettingsScreen} />
      <Tab.Screen name="Users" component={Screens.UsersScreen} />
    </Tab.Navigator>
  )
}
