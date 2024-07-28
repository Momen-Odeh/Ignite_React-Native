import * as React from "react"
import { Platform, Switch, TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { TextField, TextFieldProps } from "./TextField"
import { Feather, FontAwesome } from "@expo/vector-icons"
export interface RawabiTextFiledProps {
  Icon?: JSX.Element
  isPassword?: boolean
  isResidential?: boolean
  placeholder?: string
  helper?: string
  status?: TextFieldProps["status"]
  HelperTextProps?: TextFieldProps["HelperTextProps"]
}

export const RawabiTextFiled = observer(function RawabiTextFiled({
  Icon,
  isPassword,
  placeholder,
  helper,
  isResidential,
  status,
  HelperTextProps,
}: RawabiTextFiledProps) {
  const IconComponent = () =>
    Icon
      ? React.cloneElement(Icon, { size: 24, color: "#878787", style: $IconLeft })
      : isResidential
      ? React.cloneElement(<FontAwesome name="building-o" />, {
          size: 24,
          color: "#878787",
          style: [$IconLeft, Platform.OS === "android" ? { marginBottom: 10 } : undefined],
        })
      : null
  const [showPassword, setShowPassword] = React.useState<boolean>(!isPassword)
  const [residentialValue, SetResidentialValue] = React.useState<boolean>(false)

  const PasswordIcon = () =>
    isPassword ? (
      showPassword ? (
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
      )
    ) : (
      isResidential && (
        <Switch
          trackColor={{ false: "#4C565E", true: "#4C565E" }}
          thumbColor={residentialValue ? "#A0CF67" : "#f4f3f4"}
          onValueChange={SetResidentialValue}
          value={residentialValue}
          ios_backgroundColor="#4C565E"
          style={
            Platform.OS === "android"
              ? [{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }, $SwitchRight]
              : $SwitchRight
          }
        />
        // <Toggle
        //   variant="switch"
        //   value={residentialValue}
        //   onValueChange={SetResidentialValue}
        //   containerStyle={[$IconRight]}
        //   inputOuterStyle={{
        //     backgroundColor: "#4C565E",
        //   }}
        //   inputDetailStyle={{
        //     backgroundColor: "#A0CF67",
        //     // borderRadius: 0,
        //   }}
        // />
      )
    )
  function changePasswordStatus() {
    setShowPassword(!showPassword)
  }
  const textStyle = [$innerContainer]
  if (isResidential) textStyle.push($ResidentialStyle)
  return (
    <TextField
      style={textStyle}
      value={isResidential ? "Are you a resident of Rawabi?" : undefined}
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
        },
        ...HelperTextProps,
      }}
      status={isResidential ? "disabled" : status}
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
const $SwitchRight: TextStyle = {
  marginRight: 17,
  // backgroundColor: "red",
}
const $ResidentialStyle: TextStyle = {
  // backgroundColor: "blue",
}
