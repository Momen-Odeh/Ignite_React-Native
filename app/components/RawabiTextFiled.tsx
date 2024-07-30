import * as React from "react"
import {
  Platform,
  ReturnKeyTypeOptions,
  TextInput,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native"
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
  containerStyle?: ViewStyle
  returnKeyType?: ReturnKeyTypeOptions
  ref?: React.Ref<TextInput>
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
  containerStyle,
  returnKeyType,

  ref,
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
      preset="filled"
      style={$innerContainer}
      value={value}
      ref={ref}
      returnKeyType={returnKeyType}
      onChangeText={onChangeText}
      containerStyle={[$container, containerStyle]}
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
  paddingVertical: 15,
  paddingHorizontal: 20,
  alignItems: "center",
  backgroundColor: "#fff",
  borderColor: "#fff",
  borderRadius: 10,
  // justifyContent: "center",
}
const $container: ViewStyle = {
  // width: "auto",
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
