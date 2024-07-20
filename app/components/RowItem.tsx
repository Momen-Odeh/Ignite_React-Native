import * as React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { Text } from "./Text"
import { Icon } from "./Icon"
import { colors } from "app/theme"

export interface RowItemProps {
  text: string
  checked?: boolean
  onPress?: () => void
}

/**
 * Describe your component here
 */
export const RowItem = observer(function RowItem({ text, checked, onPress }: RowItemProps) {
  return (
    <TouchableOpacity style={$container} onPress={onPress}>
      <Text text={text} preset="default" style={$text} />
      {checked && <Icon icon="check" color={colors.primary.blue} />}
    </TouchableOpacity>
  )
})

const $container: ViewStyle = {
  // backgroundColor: "red",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 20,
  paddingVertical: 16,
}
const $text: TextStyle = {
  fontSize: 16,
  color: colors.text,
}
