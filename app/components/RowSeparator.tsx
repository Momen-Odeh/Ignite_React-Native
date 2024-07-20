import * as React from "react"
import { View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "app/theme"

export interface RowSeparatorProps {
  /**
   * An optional style override useful for padding & margin.
   */
}

/**
 * Describe your component here
 */
export const RowSeparator = observer(function RowSeparator() {
  return <View style={$container} />
})

const $container: ViewStyle = {
  backgroundColor: colors.primary.border,
  height: 1,
  marginHorizontal: 20,
}
