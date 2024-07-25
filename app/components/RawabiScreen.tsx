import * as React from "react"
import { Image, ImageStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Screen } from "./Screen"

export interface RawabiScreenProps {
  /**
   * An optional style override useful for padding & margin.
   */
  children?: JSX.Element
}

export const RawabiScreen = observer(function RawabiScreen({ children }: RawabiScreenProps) {
  return (
    <Screen backgroundColor="#F6F6F6" safeAreaEdges={["top"]}>
      <View style={$ImageContainer}>
        {children}
        <Image source={require("../../assets/images/Subtract.png")} style={$Image} />
      </View>
    </Screen>
  )
})

const $ImageContainer: ViewStyle = {
  height: "100%",
}
const $Image: ImageStyle = {
  width: "100%",
  zIndex: -1000,
  position: "absolute",
  bottom: 0,
  // height: 100,
  // transform: [{ rotate: "45deg" }],
}
