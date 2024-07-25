import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TabsScreenProps } from "app/navigators"
import { RawabiScreen, RawabiScreen2, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface UsersScreenProps extends TabsScreenProps<"Users"> {}

export const UsersScreen: FC<UsersScreenProps> = observer(function UsersScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <RawabiScreen2>
      <Text text="test component" />
    </RawabiScreen2>
  )
})

// const $root: ViewStyle = {
//   flex: 1,
// }
