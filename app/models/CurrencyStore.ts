import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const CurrencyStoreModel = types
  .model("CurrencyStore")
  .props({
    baseCurrency: "1",
    quoteCurrency: "3.63",
    baseCurrencyTitle: "USD",
    quoteCurrencyTitle: "ILS",
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setBaseCurrency(value: string) {
      self.setProp("baseCurrency", value)
    },
    setQuoteCurrency(value: string) {
      self.setProp("quoteCurrency", value)
    },
    setBaseCurrencyTitle(value: string) {
      self.setProp("baseCurrencyTitle", value)
    },
    setQuoteCurrencyTitle(value: string) {
      self.setProp("quoteCurrencyTitle", value)
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface CurrencyStore extends Instance<typeof CurrencyStoreModel> {}
export interface CurrencyStoreSnapshotOut extends SnapshotOut<typeof CurrencyStoreModel> {}
export interface CurrencyStoreSnapshotIn extends SnapshotIn<typeof CurrencyStoreModel> {}
export const createCurrencyStoreDefaultModel = () => types.optional(CurrencyStoreModel, {})
