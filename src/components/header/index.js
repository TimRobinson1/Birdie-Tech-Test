/* Styles */
// @flow
import * as React from 'react'

import { css } from '../../lib/styles'

type HeaderProps = {
  styles?: Styles,
  children: React.Node
}

const Header = (props: HeaderProps): React.Node => {
  const {
    styles,
    children
  } = props

  return (
    <header className={css(styles)}>
      {children}
    </header>
  )
}

export default Header
