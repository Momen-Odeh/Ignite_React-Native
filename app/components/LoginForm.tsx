import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Button, TextField } from "app/components"
import { useStores } from "app/models"
export interface LoginFormProps {
  /**
   * An optional style override useful for padding & margin.
   */
}

/**
 * Describe your component here
 */
export const LoginForm = observer(function LoginForm() {
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

  return (
    <View>
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
    </View>
  )
})

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
