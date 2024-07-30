import * as React from "react"
import { observer } from "mobx-react-lite"
import { RawabiTextFiled } from "./RawabiTextFiled"
import { FontAwesome } from "@expo/vector-icons"
import { Platform, Switch, TextStyle, ViewStyle } from "react-native"

export interface RawabiResidentialProps {
  residentialValue: boolean
  SetResidentialValue: (param: boolean) => void
  containerStyle?: ViewStyle
}

export const RawabiResidential = observer(function RawabiResidential({
  residentialValue,
  SetResidentialValue,
  containerStyle,
}: RawabiResidentialProps) {
  // const [residentialValue, SetResidentialValue] = React.useState<boolean>(false)

  return (
    <RawabiTextFiled
      Icon={<FontAwesome name="building-o" />}
      status="disabled"
      value="Are you a resident of Rawabi?"
      containerStyle={containerStyle}
      RightAccessoryComponent={
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
      }
    />
  )
})

const $SwitchRight: TextStyle = {
  marginRight: 17,
}

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
