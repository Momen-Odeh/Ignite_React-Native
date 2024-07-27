import * as React from "react"
import { observer } from "mobx-react-lite"
import { Button } from "./Button"
import { TextStyle, ViewStyle } from "react-native"

export interface RawabiButtonProps {
  children?: JSX.Element
}

/**
 * Describe your component here
 */
export const RawabiButton = observer(function RawabiButton({ children }: RawabiButtonProps) {
  return (
    <Button text="Login" style={$button} textStyle={$textButton}>
      {children}
    </Button>
  )
})

const $button: ViewStyle = {
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
