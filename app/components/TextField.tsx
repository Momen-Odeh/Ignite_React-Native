import React, { ComponentType, forwardRef, Ref, useImperativeHandle, useRef } from "react"
import {
  Platform,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { isRTL, translate } from "../i18n"
import { colors, spacing, typography } from "../theme"
import { Text, TextProps } from "./Text"
import { Feather } from "@expo/vector-icons"

export interface TextFieldAccessoryProps {
  style: StyleProp<any>
  status: TextFieldProps["status"]
  multiline: boolean
  editable: boolean
}

type Presets = keyof typeof $containerStylesPresets
export interface TextFieldProps extends Omit<TextInputProps, "ref"> {
  /**
   * A style modifier for different input states.
   */
  status?: "error" | "disabled"
  /**
   * The label text to display if not using `labelTx`.
   */
  label?: TextProps["text"]
  /**
   * Label text which is looked up via i18n.
   */
  labelTx?: TextProps["tx"]
  /**
   * Optional label options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  labelTxOptions?: TextProps["txOptions"]
  /**
   * Pass any additional props directly to the label Text component.
   */
  LabelTextProps?: TextProps
  /**
   * The helper text to display if not using `helperTx`.
   */
  helper?: TextProps["text"]
  /**
   * Helper text which is looked up via i18n.
   */
  helperTx?: TextProps["tx"]
  /**
   * Optional helper options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  helperTxOptions?: TextProps["txOptions"]
  /**
   * Pass any additional props directly to the helper Text component.
   */
  HelperTextProps?: TextProps
  /**
   * The placeholder text to display if not using `placeholderTx`.
   */
  placeholder?: TextProps["text"]
  /**
   * Placeholder text which is looked up via i18n.
   */
  placeholderTx?: TextProps["tx"]
  /**
   * Optional placeholder options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  placeholderTxOptions?: TextProps["txOptions"]
  /**
   * Optional input style override.
   */
  style?: StyleProp<TextStyle>
  /**
   * Style overrides for the container
   */
  containerStyle?: StyleProp<ViewStyle>
  /**
   * Style overrides for the input wrapper
   */
  inputWrapperStyle?: StyleProp<ViewStyle>
  /**
   * An optional component to render on the right side of the input.
   * Example: `RightAccessory={(props) => <Icon icon="ladybug" containerStyle={props.style} color={props.editable ? colors.textDim : colors.text} />}`
   * Note: It is a good idea to memoize this.
   */
  RightAccessory?: ComponentType<TextFieldAccessoryProps>
  /**
   * An optional component to render on the left side of the input.
   * Example: `LeftAccessory={(props) => <Icon icon="ladybug" containerStyle={props.style} color={props.editable ? colors.textDim : colors.text} />}`
   * Note: It is a good idea to memoize this.
   */
  LeftAccessory?: ComponentType<TextFieldAccessoryProps>
  /**
   * One of the different types of button presets.
   */
  preset?: Presets
  /**
   * Icon will use in the LeftAccessory
   */
  Icon?: JSX.Element
  /**
   * Add RightAccessory with Lock to the container
   */
  isPassword?: boolean
}

/**
 * A component that allows for the entering and editing of text.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/TextField/}
 * @param {TextFieldProps} props - The props for the `TextField` component.
 * @returns {JSX.Element} The rendered `TextField` component.
 */

export const TextField = forwardRef(function TextField(props: TextFieldProps, ref: Ref<TextInput>) {
  const {
    labelTx,
    label,
    labelTxOptions,
    placeholderTx,
    placeholder,
    placeholderTxOptions,
    placeholderTextColor,
    helper,
    helperTx,
    helperTxOptions,
    status,
    RightAccessory,
    LeftAccessory,
    HelperTextProps,
    LabelTextProps,
    style: $inputStyleOverride,
    containerStyle: $containerStyleOverride,
    inputWrapperStyle: $inputWrapperStyleOverride,
    Icon,
    isPassword,
    secureTextEntry,
    ...TextInputProps
  } = props
  const input = useRef<TextInput>(null)
  const preset: Presets = props.preset ?? "default"
  const disabled = TextInputProps.editable === false || status === "disabled"

  const placeholderContent = placeholderTx
    ? translate(placeholderTx, placeholderTxOptions)
    : placeholder

  // **************************** Styles of the Component using the preset ****************************
  function $containerStyles(): StyleProp<ViewStyle> {
    return [$containerStylesPresets[preset], $containerStyleOverride]
  }
  function $inputStyles(): StyleProp<TextStyle> {
    return [
      $inputStyle,
      disabled && { color: colors.textDim },
      isRTL && { textAlign: "right" as TextStyle["textAlign"] },
      TextInputProps.multiline && { height: "auto" },
      Platform.OS === "android" && Icon?.props.name === "building-o"
        ? {
            marginTop: 12,
          }
        : undefined,
      $inputStylePreset[preset],
      $inputStyleOverride,
    ]
  }
  function $inputWrapperStyles() {
    return [
      $inputWrapperStyle,
      status === "error" && { borderColor: colors.error },
      TextInputProps.multiline && { minHeight: 112 },
      LeftAccessory && { paddingStart: 0 },
      RightAccessory && { paddingEnd: 0 },
      $inputWrapperStylesPreset[preset],
      $inputWrapperStyleOverride,
    ]
  }
  // **************************** End Styles of the Component ****************************
  const $labelStyles = [$labelStyle, LabelTextProps?.style]

  const CustomeHelperTextProps =
    preset === "primary"
      ? {
          ...HelperTextProps,
          // size: "xs",
          onPress: () => console.log("Welcome forget password"),
          style: {
            color: "#878787",
          },
        }
      : { ...HelperTextProps }

  const $helperStyles = [
    $helperStyle,
    status === "error" && { color: colors.error },
    CustomeHelperTextProps?.style,
  ]

  /**
   *
   */
  function focusInput() {
    if (disabled) return

    input.current?.focus()
  }

  useImperativeHandle(ref, () => input.current as TextInput)
  // created by Momen Odeh
  const IconComponent = () =>
    preset === "primary" && Icon
      ? React.cloneElement(Icon, {
          size: 24,
          color: "#878787",
        })
      : undefined
  const [showPassword, setShowPassword] = React.useState<boolean>(!isPassword)
  function changePasswordStatus() {
    setShowPassword(!showPassword)
  }
  const PasswordIcon = () =>
    isPassword ? (
      showPassword ? (
        <TouchableOpacity onPress={changePasswordStatus}>
          <Feather name="eye-off" size={24} color={"#878787"} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={changePasswordStatus}>
          <Feather name="eye" size={24} color={"#878787"} />
        </TouchableOpacity>
      )
    ) : undefined

  //
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={$containerStyles()}
      onPress={focusInput}
      accessibilityState={{ disabled }}
    >
      {!!(label || labelTx) && (
        <Text
          preset="formLabel"
          text={label}
          tx={labelTx}
          txOptions={labelTxOptions}
          {...LabelTextProps}
          style={$labelStyles}
        />
      )}

      <View style={$inputWrapperStyles()}>
        {preset === "primary" && Icon !== undefined ? (
          <IconComponent />
        ) : (
          !!LeftAccessory && (
            <LeftAccessory
              style={$leftAccessoryStyle}
              status={status}
              editable={!disabled}
              multiline={TextInputProps.multiline ?? false}
            />
          )
        )}

        <TextInput
          ref={input}
          secureTextEntry={secureTextEntry ?? !showPassword}
          underlineColorAndroid={colors.transparent}
          textAlignVertical="center"
          placeholder={placeholderContent}
          placeholderTextColor={
            placeholderTextColor ?? (preset === "primary" ? "#C5C5C7" : colors.textDim)
          }
          {...TextInputProps}
          editable={!disabled}
          style={$inputStyles()}
        />

        {isPassword && preset === "primary" ? (
          <PasswordIcon />
        ) : (
          !!RightAccessory && (
            <RightAccessory
              style={$rightAccessoryStyle}
              status={status}
              editable={!disabled}
              multiline={TextInputProps.multiline ?? false}
            />
          )
        )}
      </View>

      {!!(helper || helperTx) && (
        <Text
          preset="formHelper"
          text={helper}
          tx={helperTx}
          txOptions={helperTxOptions}
          {...CustomeHelperTextProps}
          // {...HelperTextProps}
          style={$helperStyles}
        />
      )}
    </TouchableOpacity>
  )
})

// **************************************** Styling ****************************************
const $primaryContainerStyles: ViewStyle = {}
const $primaryInputStyle: TextStyle = {
  color: "#4C575D",
  // fontFamily:"Poppins"
  fontWeight: "400",
  fontSize: 14,
  lineHeight: 21,
  marginLeft: 20,
}
const $primaryInputWrapperStyles: ViewStyle = {
  paddingVertical: 15,
  paddingHorizontal: 20,
  alignItems: "center",
  backgroundColor: "#fff",
  borderColor: "#fff",
  borderRadius: 10,
}

const $labelStyle: TextStyle = {
  marginBottom: spacing.xs,
}

const $inputWrapperStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "flex-start",
  borderWidth: 1,
  borderRadius: 4,
  backgroundColor: colors.palette.neutral200,
  borderColor: colors.palette.neutral400,
  overflow: "hidden",
}

const $inputStyle: TextStyle = {
  flex: 1,
  alignSelf: "stretch",
  fontFamily: typography.primary.normal,
  color: colors.text,
  fontSize: 16,
  height: 24,
  // https://github.com/facebook/react-native/issues/21720#issuecomment-532642093
  paddingVertical: 0,
  paddingHorizontal: 0,
  marginVertical: spacing.xs,
  marginHorizontal: spacing.sm,
}

const $helperStyle: TextStyle = {
  marginTop: spacing.xs,
}

const $rightAccessoryStyle: ViewStyle = {
  marginEnd: spacing.xs,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}
const $leftAccessoryStyle: ViewStyle = {
  marginStart: spacing.xs,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}

// **************************************** Preset Styling ****************************************

const $containerStylesPresets = {
  default: [] as StyleProp<ViewStyle>,
  filled: [] as StyleProp<ViewStyle>,
  primary: [$primaryContainerStyles] as StyleProp<ViewStyle>,
}
const $inputStylePreset = {
  default: [] as StyleProp<ViewStyle>,
  filled: [] as StyleProp<ViewStyle>,
  primary: [$primaryInputStyle] as StyleProp<ViewStyle>,
}
const $inputWrapperStylesPreset = {
  default: [] as StyleProp<ViewStyle>,
  filled: [] as StyleProp<ViewStyle>,
  primary: [$primaryInputWrapperStyles] as StyleProp<ViewStyle>,
}
