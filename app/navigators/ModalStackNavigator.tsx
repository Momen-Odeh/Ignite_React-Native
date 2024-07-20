import React from "react"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { CurrencyListScreen, HomeScreen } from "app/screens"

export type ModalStackNavigatorParamList = {
  MainStack: undefined
  CurrencyList: { isBaseCurrency: boolean }
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
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="CurrencyList" component={CurrencyListScreen} />
    </Stack.Navigator>
  )
}
