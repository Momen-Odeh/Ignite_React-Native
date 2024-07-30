import * as React from "react"
import { observer } from "mobx-react-lite"
import { Toggle } from "./Toggle"
import { TextStyle, ViewStyle } from "react-native"

export interface RawabiCheckboxProps {
  value: boolean
  setValue: (parm: boolean) => void
  label?: string
}

export const RawabiCheckbox = observer(function RawabiCheckbox({
  value,
  setValue,
  label,
}: RawabiCheckboxProps) {
  return (
    <Toggle
      value={value}
      onValueChange={setValue}
      variant="checkbox"
      label={label}
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
