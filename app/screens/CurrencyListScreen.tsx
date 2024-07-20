import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, View, ViewStyle } from "react-native"
import { ModalStackScreenProps } from "app/navigators"
import { ListView, RowItem, RowSeparator, Screen } from "app/components"
import data from "../utils/data/currencies.json"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"

interface CurrencyListScreenProps extends ModalStackScreenProps<"CurrencyList"> {}
const screens = Dimensions.get("window")
export const CurrencyListScreen: FC<CurrencyListScreenProps> = observer(
  function CurrencyListScreen({
    route: {
      params: { isBaseCurrency },
    },
    navigation,
  }) {
    // Pull in one of our MST stores
    const {
      CurrencyStore: {
        baseCurrencyTitle,
        quoteCurrencyTitle,
        setBaseCurrencyTitle,
        setQuoteCurrencyTitle,
      },
    } = useStores()
    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll" safeAreaEdges={["top", "bottom"]}>
        <View style={$container}>
          <ListView
            data={data}
            renderItem={({ item }) => (
              <RowItem
                text={item}
                checked={
                  (isBaseCurrency && item === baseCurrencyTitle) ||
                  (!isBaseCurrency && item === quoteCurrencyTitle)
                }
                onPress={(val) => {
                  if (isBaseCurrency) setBaseCurrencyTitle(val)
                  else setQuoteCurrencyTitle(val)
                  navigation.pop()
                }}
              />
            )}
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
