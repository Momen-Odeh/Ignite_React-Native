import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { AuthenticationModel } from "./Authentication"
import { CurrencyStoreModel } from "./CurrencyStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types
  .model("RootStore")
  .props({
    authenticationStore: types.optional(AuthenticationModel, {}),
    CurrencyStore: types.optional(CurrencyStoreModel, {}),
  })
  .actions((store) => ({
    reset() {
      // should be the last call
      store.authenticationStore.reset()
      store.CurrencyStore.reset()
    },
  }))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
