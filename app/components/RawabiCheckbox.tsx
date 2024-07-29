import * as React from "react"
import { observer } from "mobx-react-lite"
import { Toggle } from "./Toggle"
import { TextStyle, ViewStyle } from "react-native"
import { Text } from "./Text"

export interface RawabiCheckboxProps {
  value: boolean
  setValue: (parm: boolean) => void
}

export const RawabiCheckbox = observer(function RawabiCheckbox({
  value,
  setValue,
}: RawabiCheckboxProps) {
  return (
    <Toggle
      value={value}
      onValueChange={setValue}
      variant="checkbox"
      label="Accept Terms & Conditions and Privacy Policy"
      labelStyle={$labelStyle}
      // inputDetailStyle={{ backgroundColor: "red" }}
      inputInnerStyle={$activeCheckBox}
      // inputWrapperStyle={{ backgroundColor: "yellow" }}
      inputOuterStyle={$checkBox}
      // containerStyle={{ backgroundColor: "blue" }}
    />
  )
})

const $labelStyle: TextStyle = {
  color: "#797979",
  // font-family: Poppins
  fontSize: 12,
  fontWeight: "400",
  lineHeight: 20,
  textAlign: "left",
}

const $checkBox: ViewStyle = {
  backgroundColor: "#F6F6F6",
  borderColor: "#D7D7D7",
  // width: 20,
  // height: 20,
  borderRadius: 6,
  borderWidth: 2,
}

const $activeCheckBox: ViewStyle = {
  backgroundColor: "#A0CF67",
}
