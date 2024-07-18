import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import {
  TextStyle,
  ViewStyle,
  // Dimensions
} from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Screen, TextField, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { colors, typography } from "app/theme"

interface LogInScreenProps extends AppStackScreenProps<"LogIn"> {}

// const screen = Dimensions.get("window")
export const LogInScreen: FC<LogInScreenProps> = observer(function LogInScreen() {
  // Pull in one of our MST stores
  const {
    authenticationStore: {
      setAuthEmail,
      authEmail,
      doUserLogin,
      // isValidPassword,
      setPassword,
      password,
    },
  } = useStores()
  const signIn = () => {
    doUserLogin().catch((error: any) => {
      alert((error as Error).message)
    })
  }

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
      <TextField
        containerStyle={$InputAuth}
        style={$InputAuthText}
        inputWrapperStyle={$InputBox}
        // label="Email"
        value={authEmail}
        onChange={(v) => {
          setAuthEmail(v.nativeEvent.text)
        }}
        placeholder="Please enter your Email"
        keyboardType="email-address"
        // status="error"
        // helper="This is a helper text"
        // LeftAccessory={() => (
        //   <Icon icon="settings" color="black" style={{ backgroundColor: "red", flex: 1 }} />
        // )}
      />
      <TextField
        keyboardType="visible-password"
        containerStyle={$InputAuth}
        style={$InputAuthText}
        inputWrapperStyle={$InputBox}
        placeholder="Please enter your Password"
        // label="Password"
        secureTextEntry={true}
        value={password}
        // status={isValidPassword ? undefined : "error"}
        onChangeText={setPassword}
      />
      <Button onPress={signIn} style={$ButtonSignIn} textStyle={$ButtonFont}>
        Sign In
      </Button>
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
const $InputAuth: ViewStyle = {
  // backgroundColor: "red",
  // flex: 1,
  // flexDirection: "row",
  // width: screen.width,
  // paddingHorizontal: 20,
  marginBottom: 15,
}
const $InputBox: ViewStyle = {
  backgroundColor: colors.primary.offWhite,
  borderColor: colors.primary.border,
  borderRadius: 5,
  padding: 5,
}
const $InputAuthText: TextStyle = {
  // borderRadius: 100,
  // padding: 0,
  // backgroundColor: "red",
  color: colors.primary.textLight,
}
const $ButtonSignIn: ViewStyle = {
  marginTop: 20,
  backgroundColor: colors.primary.offWhite,
  borderColor: colors.primary.border,
}
const $ButtonFont: TextStyle = {
  color: colors.primary.text,
  fontSize: 20,
  fontFamily: typography.fonts.spaceGrotesk.bold,
  fontWeight: "bold",
}
