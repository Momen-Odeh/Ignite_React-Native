import React from "react"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { CurrencyListScreen } from "app/screens"
import { AppStack } from "./AppNavigator"

export type ModalStackNavigatorParamList = {
  MainStack: undefined
  CurrencyList: undefined
}

export type ModalStackScreenProps<T extends keyof ModalStackNavigatorParamList> =
  NativeStackScreenProps<ModalStackNavigatorParamList, T>

const Stack = createNativeStackNavigator<ModalStackNavigatorParamList>()
export const ModalStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // cardStyle: { backgroundColor: "transparent" },
        // headerShown: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen
        name="MainStack"
        component={AppStack}
        options={
          {
            // headerShown: false,
          }
        }
      />
      <Stack.Screen name="CurrencyList" component={CurrencyListScreen} />
    </Stack.Navigator>
  )
}
