import * as React from "react"
import { observer } from "mobx-react-lite"
import { KeyboardTypeOptions, TextStyle, View, ViewStyle } from "react-native"
import { TextField } from "./TextField"
import { colors } from "app/theme"
import { Button } from "./Button"

export interface CurrencyInputProps {
  disabled?: boolean
  value: string
  onValueChange?: (param: string) => void
  onButtonPress?: () => void
  currencyTitle: string
  keyboardType?: KeyboardTypeOptions
}

/**
 * Describe your component here
 */
export const CurrencyInput = observer(function CurrencyInput({
  currencyTitle,
  disabled = false,
  value,
  onValueChange,
  onButtonPress,
  keyboardType = "numeric",
}: CurrencyInputProps) {
  return (
    <View style={$container}>
      <Button
        style={$button}
        textStyle={$buttonText}
        text={currencyTitle}
        onPress={onButtonPress}
      />
      <TextField
        containerStyle={$Input}
        style={$InputText}
        inputWrapperStyle={$InputBox}
        status={disabled ? "disabled" : undefined}
        value={isNaN(Number(value)) ? "0" : value}
        onChangeText={onValueChange}
        keyboardType={keyboardType}
      />
    </View>
  )
})

const $container: ViewStyle = {
  flexDirection: "row",
  borderRadius: 5,
  marginBottom: 15,
}
const $button: ViewStyle = {
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
}
const $InputText: TextStyle = {
  color: colors.primary.textLight,
}
