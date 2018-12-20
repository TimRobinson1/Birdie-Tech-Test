/* global ID Styles noopFunction onEventFunction */
// @flow
import * as React from 'react'
import styles from './style.css'
import noop from '../../lib/noop'
import { css } from '../../lib/styles'

type ButtonProps = {
  id?: ID,
  styles?: Styles,
  onClick: noopFunction | onEventFunction,
  children: string,
  type: 'button' | 'submit' | 'reset',
  // `context` prop can be used to dictate the importance of the button on
  // the page through styles
  context: 'primary' | 'secondary'
}

const Button = (props: ButtonProps): React.Node => {
  const {
    styles: overrideStyles,
    id,
    onClick,
    type,
    context,
    children
  } = props

  return (
    <button
      id={id}
      className={css(styles.button, styles[context], overrideStyles)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  context: 'primary',
  onClick: noop
}

export default Button
