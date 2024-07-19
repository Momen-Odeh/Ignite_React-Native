import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { ListView, Screen, Text } from "app/components"
import data from "../utils/data/currencies.json"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface CurrencyListScreenProps extends AppStackScreenProps<"CurrencyList"> {}

export const CurrencyListScreen: FC<CurrencyListScreenProps> = observer(
  function CurrencyListScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll" safeAreaEdges={["top", "bottom"]}>
        <ListView
          data={data}
          renderItem={({ item, index }) => <Text text={`${item} ${index}`} />}
          estimatedItemSize={24}
        ></ListView>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
