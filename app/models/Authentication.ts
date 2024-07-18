import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const AuthenticationModel = types
  .model("Authentication")
  .props({
    authToken: types.maybe(types.string),
    authEmail: "",
    password: types.optional(types.string, ""),
  })
  .actions(withSetPropAction)
  .views((store) => ({
    get isValidPassword() {
      return store.password.length > 6
    },
    get isAuthenticated() {
      return store.authToken
    },
    get validationError() {
      if (store.authEmail.length < 6) return "Email must be at least 6 characters"
      return ""
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((store) => ({
    setAuthEmail(value: string) {
      store.setProp("authEmail", value)
    },
    setAuthToken(value: string) {
      store.setProp("authToken", value)
    },
    setPassword(value: string) {
      store.setProp("password", value)
    },
    async doUserLogin() {
      if (
        store.authEmail.toLocaleLowerCase() !== "momen.odeh74@gmail.com" ||
        store.password !== "123456789"
      ) {
        throw Error("Invalid username or password")
      }
      store.setProp("password", "")
      store.setProp("authToken", Date.now().toString())
    },
    async logout() {
      // do api call to logout
      return true
    },
    reset() {
      store.setProp("authEmail", "")
      store.setProp("authToken", "")
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Authentication extends Instance<typeof AuthenticationModel> {}
export interface AuthenticationSnapshotOut extends SnapshotOut<typeof AuthenticationModel> {}
export interface AuthenticationSnapshotIn extends SnapshotIn<typeof AuthenticationModel> {}
export const createAuthenticationDefaultModel = () => types.optional(AuthenticationModel, {})
