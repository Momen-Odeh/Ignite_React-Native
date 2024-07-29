import React, { FC } from "react"
import { observer } from "mobx-react-lite"
// import { TextStyle, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
// import { LoginForm, Screen, Text } from "app/components"
// import { colors } from "app/theme"
import { UsersScreen } from "./UsersScreen"

interface LogInScreenProps extends AppStackScreenProps<"LogIn"> {}

export const LogInScreen: FC<LogInScreenProps> = observer(function LogInScreen() {
  return (
    <UsersScreen />
    // <Screen
    //   style={$root}
    //   safeAreaEdges={["top", "bottom"]}
    //   backgroundColor={colors.primary.blue}
    //   statusBarStyle="light"
    // >
    //   <Text tx={"LoginScreen.Login"} style={$textLogo} preset="heading" />
    //   <LoginForm />
    // </Screen>
  )
})

// const $root: ViewStyle = {
//   flex: 1,
//   justifyContent: "center",
//   padding: 30,
// }
// const $textLogo: TextStyle = {
//   color: colors.primary.white,
//   textAlign: "center",
//   fontSize: 60,
//   paddingTop: 25,
//   marginBottom: 60,
// }
