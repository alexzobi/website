import {} from 'react'
import {Interpolation} from '@emotion/serialize'

export type TextStyleValue =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p4'
  | 'p5'
  | 'p6'

export type SpaceValue =
  | 'none'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'jumbo'
  | 'xjumbo'
  | number

export type ColorValue =
  | 'primary'
  | 'secondary'
  | 'ultralow'
  | 'superlow'
  | 'low'
  | 'medium'
  | 'high'
  | 'surface'
  | 'surface_static_1'
  | 'background'
  | 'success'
  | 'info'
  | 'alert'
  | 'scale_1'
  | 'scale_2'
  | 'scale_3'
  | 'scale_4'
  | 'scale_5'
  | 'divider'
  | 'inputField_background'
  | 'button_primary_enabled'
  | 'button_primary_hover'
  | 'button_primary_pressed'
  | 'button_primary_disabled'
  | 'button_secondary_enabled'
  | 'button_secondary_enabled_bold'
  | 'button_secondary_hover'
  | 'button_secondary_pressed'
  | 'button_secondary_disabled'
  | 'button_outlined_disabled'
  | 'button_primary_outlined_hover'
  | 'button_primary_hover_fill'
  | 'button_primary_outlined_pressed'
  | 'button_primary_pressed_fill'
  | 'button_secondary_outlined_hover'
  | 'button_secondary_hover_fill'
  | 'button_secondary_outlined_pressed'
  | 'button_secondary_pressed_fill'
  | 'icon_active_primary'
  | 'icon_active_secondary'
  | 'icon_active'
  | 'icon_active_high'
  | 'icon_active_onDark'
  | 'icon_disabled'
  | 'icon_tooltip'
  | 'type_primary'
  | 'type_secondary'
  | 'type_secondary_onLight'
  | 'type_low'
  | 'type_medium'
  | 'type_medium_onLight'
  | 'type_high'
  | 'type_high_onDark'
  | 'type_high_onLight'
  | 'type_primaryButton'
  | 'type_primaryButton_disabled'
  | 'type_secondaryButton'
  | 'type_secondaryButton_disabled'
  | 'type_outlinedButton'
  | 'type_outlinedButton_disabled'
  | 'type_textButton_disabled'
  | 'type_snackbar'
  | 'type_tooltip'
  | 'textButton_snackbar'
  | 'textButton_tooltip'
  | 'transparent'
  | 'elevation_1'
  | 'overlay'
  | 'overlay_2'
  | 'type_onAlert'
  | 'accent_01'
  | 'label_background'
  // Unoffical
  | 'nav_edge'
  | 'surface_static_1_hover'
  | 'surface_static_1_active'

export type TextColorValue =
  | 'primary'
  | 'secondary'
  | 'secondary_onLight'
  | 'low'
  | 'medium'
  | 'medium_onLight'
  | 'high'
  | 'high_onDark'
  | 'high_onLight'
  | 'tooltip'
  | 'alert'
  | 'onAlert'
  // These should never be used for text because they do not meet
  // contrast requirements.
  // They can be used for icons if the icon is not required for understanding.
  | 'scale_1'
  | 'scale_2'
  | 'scale_3'
  | 'scale_4'
  | 'scale_5'

export interface Theme {
  breakpoints: ['40em' /* 640px */, '52em' /* 832px */, '64em' /* 1024px */]
  space: {[S in SpaceValue]: number}
  colors: {[C in ColorValue]: string}
  textColors: {[C in TextColorValue]: string}
  textStyles: {
    [S in TextStyleValue]: {
      fontSize: string
      lineHeight: string
      fontWeight: number
    }
  }
  shadows: {
    elevation_1: string
    elevation_2: string
    focusIndicator: string
  }
  borderRadius: {
    standard: number
    max: number
  }
}

// Adds support for emotion css prop.
// https://emotion.sh/docs/emotion-11#css-prop-types
declare module 'react' {
  interface Attributes {
    css?: Interpolation<Theme>
  }
}
