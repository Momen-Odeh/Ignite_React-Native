import * as React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { TextField } from "./TextField"
import { colors } from "app/theme"
import { Button } from "./Button"

export interface CurrencyInputProps {
  disabled?: boolean
}

/**
 * Describe your component here
 */
export const CurrencyInput = observer(function CurrencyInput({
  disabled = false,
}: CurrencyInputProps) {
  return (
    <View style={$container}>
      <Button
        style={$button}
        textStyle={$buttonText}
        text="USD"

        // onPress={onButtonPress}
      ></Button>
      <TextField
        containerStyle={$Input}
        style={$InputText}
        inputWrapperStyle={$InputBox}
        status={disabled ? "disabled" : undefined}
        // label="Email"
        // value={authEmail}
        // onChange={(v) => {
        //   setAuthEmail(v.nativeEvent.text)
        // }}
        // placeholder="Please enter your Email"
        // keyboardType="email-address"
      />
    </View>
  )
})

const $container: ViewStyle = {
  // backgroundColor: "green",
  // backgroundColor: colors.primary.white,
  // marginVertical: 10,
  // marginHorizontal: 20,
  flexDirection: "row",
  borderRadius: 5,
  // justifyContent: "center",
  // alignItems: "center",
  // padding: 20,
  marginBottom: 15,
}
const $button: ViewStyle = {
  // padding: 15,
  // margin: 0,
  backgroundColor: colors.primary.white,
  borderRightColor: colors.primary.border,
  borderRightWidth: 1,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
}
const $buttonText: TextStyle = {
  fontSize: 18,
  fontWeight: "bold",
  color: colors.primary.blue,
}
const $Input: ViewStyle = {
  flex: 1,
  // backgroundColor: "red",
  // flex: 1,
  // flexDirection: "row",
  // width: screen.width,
  // paddingHorizontal: 20,
  // marginBottom: 15,
}
const $InputBox: TextStyle = {
  flex: 1,
  backgroundColor: colors.primary.offWhite,
  borderColor: colors.primary.border,
  borderRadius: 5,
  color: colors.primary.textLight,
  justifyContent: "center",
  alignItems: "center",
  padding: 5,
  // padding: 10,
  // fontSize: 16,
  // backgroundColor: "pink",
  // height: 40,
}
const $InputText: TextStyle = {
  // borderRadius: 100,
  // padding: 0,
  // backgroundColor: "red",
  color: colors.primary.textLight,
}
