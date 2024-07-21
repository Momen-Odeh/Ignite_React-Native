import * as React from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "app/components/Text"
export interface SettingContainerProps {
  contents: {
    title: string
    items: { Icon: JSX.Element; label: string; onPress: () => void }[]
  }
}
export const SettingContainer = observer(function SettingContainer({
  // title,
  contents,
}: SettingContainerProps) {
  return (
    <View style={$container}>
      <Text preset="subheading">{contents.title}</Text>
      <View style={$ListItems}>
        {contents.items.map(({ Icon, label, onPress }, index) => (
          <TouchableOpacity style={$Item} key={index} onPress={onPress}>
            {Icon}
            <Text preset="subheading" style={$Label}>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  marginBottom: 30,
}

const $ListItems: ViewStyle = {
  padding: 20,
  backgroundColor: "#F4F4F7",
  borderRadius: 10,
  marginTop: 20,
}
const $Item: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: 5,
  paddingVertical: 3,
}

const $Label: TextStyle = {
  flex: 4,
}
