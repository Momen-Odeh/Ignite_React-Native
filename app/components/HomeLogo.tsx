import * as React from "react"
import { Dimensions, Image, ImageStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

export interface HomeLogoProps {
  /**
   * An optional style override useful for padding & margin.
   */
}

/**
 * Describe your component here
 */
const screens = Dimensions.get("window")

export const HomeLogo = observer(function HomeLogo() {
  return (
    <View style={$ImageContainer}>
      <Image
        source={require("../../assets/images/currency-background.png")}
        style={$backgroundImage}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/images/currency-logo.png")}
        style={$LogoImage}
        resizeMode="contain"
      />
    </View>
  )
})

const $ImageContainer: ViewStyle = {
  // backgroundColor: "pink",
  justifyContent: "center",
  alignItems: "center",
}
const $backgroundImage: ImageStyle = {
  // flex: 1,
  // backgroundColor: "green",
  width: screens.width * 0.45,
  height: screens.width * 0.45,
}
const $LogoImage: ImageStyle = {
  // flex: 1,
  // backgroundColor: "red",
  position: "absolute",
  width: screens.width * 0.25,
  height: screens.width * 0.25,
}
