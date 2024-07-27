import * as React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { TextField } from "./TextField"
import { Feather } from "@expo/vector-icons"
export interface RawabiTextFiledProps {
  Icon?: JSX.Element
  isPassword?: boolean
  placeholder?: string
  helper?: string
}

export const RawabiTextFiled = observer(function RawabiTextFiled({
  Icon,
  isPassword,
  placeholder,
  helper,
}: RawabiTextFiledProps) {
  const IconComponent = () =>
    Icon ? React.cloneElement(Icon, { size: 24, color: "#878787", style: $IconLeft }) : null
  const [showPassword, setShowPassword] = React.useState<boolean>(!isPassword)

  const PasswordIcon = () =>
    isPassword &&
    (showPassword ? (
      <Feather
        name="eye-off"
        size={24}
        color={"#878787"}
        style={$IconRight}
        onPress={changePasswordStatus}
      />
    ) : (
      <Feather
        name="eye"
        size={24}
        color={"#878787"}
        style={$IconRight}
        onPress={changePasswordStatus}
      />
    ))

  function changePasswordStatus() {
    setShowPassword(!showPassword)
  }
  return (
    <TextField
      style={$innerContainer}
      containerStyle={$container}
      inputWrapperStyle={$outerContainer}
      LeftAccessory={IconComponent}
      RightAccessory={PasswordIcon}
      secureTextEntry={!showPassword}
      placeholder={placeholder}
      placeholderTextColor={"#C5C5C7"}
      helper={helper}
      HelperTextProps={{
        size: "xs",
        onPress: () => {
          console.log("press on the handler", placeholder)
        },
        style: {
          color: "#878787",
          //  textAlign: "right"
        },
      }}
      // HelperTextProps={{}}
    />
  )
})

const $outerContainer: ViewStyle = {
  // backgroundColor: "red",
  paddingVertical: 20,
  paddingHorizontal: 17,
  alignItems: "center",
  backgroundColor: "#fff",
  borderColor: "#fff",
  borderRadius: 10,
}
const $container: ViewStyle = {
  // backgroundColor: "blue",
}

const $innerContainer: TextStyle = {
  color: "#AAAAAA",
  // fontFamily:"Poppins"
  fontWeight: "400",
  fontSize: 14,
  lineHeight: 21,
  marginLeft: 20,
}
const $IconLeft: TextStyle = {
  paddingLeft: 17,
}
const $IconRight: TextStyle = {
  paddingRight: 17,
}
