import * as React from "react"
import { Dimensions, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Screen } from "./Screen"

export interface RawabiScreen2Props {
  children: React.ReactNode
  style?: ViewStyle
  contentContainerStyle?: ViewStyle
}

export const RawabiScreen2 = observer(function RawabiScreen2({
  children,
  style,
  contentContainerStyle,
}: RawabiScreen2Props) {
  return (
    <Screen
      safeAreaEdges={["top"]}
      preset="scroll"
      backgroundColor="#F6F6F6"
      style={style}
      contentContainerStyle={contentContainerStyle}
    >
      <View style={$container}>
        {children}
        <View style={$topCurve} />
        <View style={$bottomCurve} />
      </View>
    </Screen>
  )
})
const $container: ViewStyle = {
  backgroundColor: "#F6F6F6",
  height: Dimensions.get("window").height,
  width: "100%",
  // padding: 20,
}
const $topCurve: ViewStyle = {
  zIndex: -900,
  width: "130%",
  height: "90%",
  backgroundColor: "#F6F6F6",
  borderBottomStartRadius: 500,
  borderBottomEndRadius: 500,
  position: "absolute",
  transform: [{ rotate: "10deg" }],
}
const $bottomCurve: ViewStyle = {
  zIndex: -1000,
  width: "130%",
  height: "40%",
  backgroundColor: "#A0CF67",
  position: "absolute",
  bottom: 0,
}
