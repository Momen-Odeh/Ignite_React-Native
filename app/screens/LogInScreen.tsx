import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import {
  TextStyle,
  ViewStyle,
  // Dimensions
} from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { LoginForm, Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
import { colors } from "app/theme"

interface LogInScreenProps extends AppStackScreenProps<"LogIn"> {}

// const screen = Dimensions.get("window")
export const LogInScreen: FC<LogInScreenProps> = observer(function LogInScreen() {
  // Pull in one of our MST stores

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen
      style={$root}
      // preset="scroll"
      safeAreaEdges={["top", "bottom"]}
      backgroundColor={colors.primary.blue}
      statusBarStyle="light"
    >
      <Text text="Log In" style={$textLogo} preset="heading" />
      <LoginForm />
    </Screen>
  )
})

const $root: ViewStyle = {
  // backgroundColor: "green",
  flex: 1,
  justifyContent: "center",
  padding: 30,
}
const $textLogo: TextStyle = {
  // backgroundColor: "red",
  color: colors.primary.white,
  textAlign: "center",
  fontSize: 60,
  paddingTop: 25,
  marginBottom: 60,
}
