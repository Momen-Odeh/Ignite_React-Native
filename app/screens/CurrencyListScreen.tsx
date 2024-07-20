import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { ListView, RowItem, RowSeparator, Screen } from "app/components"
import data from "../utils/data/currencies.json"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface CurrencyListScreenProps extends AppStackScreenProps<"CurrencyList"> {}
const screens = Dimensions.get("window")
export const CurrencyListScreen: FC<CurrencyListScreenProps> = observer(
  function CurrencyListScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll" safeAreaEdges={["top", "bottom"]}>
        <View style={$container}>
          <ListView
            data={data}
            renderItem={({ item }) => <RowItem text={item} checked={true} />}
            ItemSeparatorComponent={() => <RowSeparator />}
            estimatedItemSize={56}
          />
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $container: ViewStyle = {
  height: screens.height,
}
