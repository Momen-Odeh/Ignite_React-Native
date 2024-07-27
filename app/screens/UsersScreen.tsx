import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TabsScreenProps } from "app/navigators"
import {
  RawabiButton,
  // RawabiScreen,
  RawabiScreen2,
  RawabiTextFiled,
  //  ,Text
} from "app/components"
import { FontAwesome5 } from "@expo/vector-icons"
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
      <>
        <RawabiTextFiled
          isPassword
          Icon={<FontAwesome5 name="user-circle" />}
          placeholder="User name"
          helper="this is test to helper text"
        />
        <RawabiTextFiled
          // isPassword
          isResidential
          placeholder="User name"
          helper="this is test to helper text"
        />
        <RawabiButton />
      </>

      {/* <Text text="test component" /> */}
    </RawabiScreen2>
  )
})

// const $root: ViewStyle = {
//   flex: 1,
// }
