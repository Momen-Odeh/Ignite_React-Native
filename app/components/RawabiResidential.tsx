import * as React from "react"
import { observer } from "mobx-react-lite"
import { FontAwesome } from "@expo/vector-icons"
import { Platform, Switch, TextStyle, ViewStyle } from "react-native"
import { TextField, TextFieldProps } from "./TextField"

export interface RawabiResidentialProps extends TextFieldProps {
  residentialValue: boolean
  SetResidentialValue: (param: boolean) => void
  containerStyle?: ViewStyle
}

export const RawabiResidential = observer(function RawabiResidential({
  residentialValue,
  SetResidentialValue,
  ...restProps
}: RawabiResidentialProps) {
  return (
    <TextField
      preset="primary"
      Icon={<FontAwesome name="building-o" />}
      readOnly
      value="Are you a resident of Rawabi?"
      {...restProps}
      RightAccessory={() => (
        <Switch
          trackColor={{ false: "#4C565E", true: "#4C565E" }}
          thumbColor={residentialValue ? "#A0CF67" : "#f4f3f4"}
          onValueChange={SetResidentialValue}
          value={residentialValue}
          ios_backgroundColor="#4C565E"
          style={[
            $SwitchRight,
            Platform.OS === "android" && { transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] },
          ]}
        />
      )}
    />
  )
})

const $SwitchRight: TextStyle = {
  marginRight: 17,
}
