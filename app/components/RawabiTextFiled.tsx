import * as React from "react"
import { Platform, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { TextField, TextFieldProps } from "./TextField"
import { Feather } from "@expo/vector-icons"
export interface RawabiTextFiledProps {
  Icon?: JSX.Element
  isPassword?: boolean
  placeholder?: string
  helper?: string
  status?: TextFieldProps["status"]
  HelperTextProps?: TextFieldProps["HelperTextProps"]
  value?: string
  onChangeText?: (pram: string) => void
  keyboardType?: TextFieldProps["keyboardType"]
  RightAccessoryComponent?: JSX.Element
}

export const RawabiTextFiled = observer(function RawabiTextFiled({
  Icon,
  isPassword,
  placeholder,
  helper,
  status,
  HelperTextProps,
  value,
  onChangeText,
  keyboardType,
  RightAccessoryComponent,
}: RawabiTextFiledProps) {
  const IconComponent = () =>
    Icon
      ? React.cloneElement(Icon, {
          size: 24,
          color: "#878787",
          style: [
            $IconLeft,
            Platform.OS === "android" && Icon.props.name === "building-o"
              ? { marginBottom: 10 }
              : undefined,
          ],
        })
      : null

  const [showPassword, setShowPassword] = React.useState<boolean>(!isPassword)

  const PasswordIcon = () =>
    isPassword ? (
      showPassword ? (
        <TouchableOpacity onPress={changePasswordStatus}>
          <Feather name="eye-off" size={24} color={"#878787"} style={$IconRight} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={changePasswordStatus}>
          <Feather name="eye" size={24} color={"#878787"} style={$IconRight} />
        </TouchableOpacity>
      )
    ) : (
      RightAccessoryComponent !== undefined && RightAccessoryComponent
    )
  function changePasswordStatus() {
    setShowPassword(!showPassword)
  }
  return (
    <TextField
      style={$innerContainer}
      value={value}
      onChangeText={onChangeText}
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
        onPress: () => console.log("Welcome forget password"),
        style: {
          color: "#878787",
          //  textAlign: "right"
        },
        ...HelperTextProps,
      }}
      status={status}
      keyboardType={keyboardType}
    />
  )
})

const $outerContainer: ViewStyle = {
  paddingVertical: 20,
  paddingHorizontal: 17,
  alignItems: "center",
  backgroundColor: "#fff",
  borderColor: "#fff",
  borderRadius: 10,
  // justifyContent: "center",
}
const $container: ViewStyle = {
  width: "100%",
  // backgroundColor: "blue",
}

const $innerContainer: TextStyle = {
  color: "#4C575D",
  // fontFamily:"Poppins"
  fontWeight: "400",
  fontSize: 14,
  lineHeight: 21,
  marginLeft: 20,
  // backgroundColor: "red",
}
const $IconLeft: TextStyle = {
  paddingLeft: 17,
  // backgroundColor: "red",
}
const $IconRight: TextStyle = {
  paddingRight: 17,
}
