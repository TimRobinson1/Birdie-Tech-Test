/* global Styles ID */
// @flow
import * as React from 'react'
import defaultStyles from './style.css'
import { css } from '../../lib/styles'

type TextProps = {
  id?: ID,
  children: React.Node,
  bold: boolean,
  italic: boolean,
  element: string,
  styles?: Styles,
  className?: string
}

const Text = (props: TextProps): React.Node => {
  const {
    id,
    children,
    bold,
    italic,
    styles,
    className,
    element: Component
  } = props

  const textStyle: Styles = css(
    defaultStyles.text,
    bold && defaultStyles.bold,
    italic && defaultStyles.italic,
    styles,
    className
  )

  return (
    <Component id={id} className={textStyle}>
      {children}
    </Component>
  )
}

Text.defaultProps = {
  element: 'p',
  bold: false,
  italic: false
}

export default Text
