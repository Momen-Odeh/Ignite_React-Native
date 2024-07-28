import * as React from "react"
import { observer } from "mobx-react-lite"
import { Button } from "./Button"
import { TextStyle, ViewStyle } from "react-native"

export interface RawabiButtonProps {
  children?: JSX.Element
  text: string
  backgroundColor?: string
  containerStyle?: ViewStyle
  textStyle?: TextStyle
}

/**
 * Describe your component here
 */
export const RawabiButton = observer(function RawabiButton({
  children,
  text,
  backgroundColor,
  containerStyle,
  textStyle,
}: RawabiButtonProps) {
  return (
    <Button
      text={text}
      style={[
        $button,
        backgroundColor !== undefined ? { backgroundColor } : undefined,
        containerStyle,
      ]}
      textStyle={[$textButton, textStyle]}
    >
      {children}
    </Button>
  )
})

const $button: ViewStyle = {
  width: "100%",
  backgroundColor: "#A0CF67",
  borderRadius: 32,
  paddingHorizontal: 30,
  paddingVertical: 18,
  borderColor: "#fff",
}

const $textButton: TextStyle = {
  // font-family: Poppins;
  color: "#FAFAFA",
  fontSize: 18,
  fontWeight: "600",
  lineHeight: 27,
  textAlign: "center",
}
