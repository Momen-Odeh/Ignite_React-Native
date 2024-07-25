import * as React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { TextField } from "./TextField"
import { FontAwesome5 } from "@expo/vector-icons"
export interface RawabiTextFiledProps {
  Icon?: JSX.Element
}

/**
 * Describe your component here
 */
export const RawabiTextFiled = observer(function RawabiTextFiled({ Icon }: RawabiTextFiledProps) {
  const IconComponent = Icon
    ? React.cloneElement(Icon, { size: 24, color: "#878787", style: $IconLeft })
    : null

  return (
    <TextField
      style={$innerContainer}
      containerStyle={$container}
      inputWrapperStyle={$outerContainer}
      LeftAccessory={() => IconComponent}
      placeholder={"User name"}
      placeholderTextColor={"#C5C5C7"}
    />
  )
})

const $outerContainer: ViewStyle = {
  // backgroundColor: "red",
  // justifyContent: "center",
  // margin: 8,
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
