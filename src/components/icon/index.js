/* IconProps IconNames */
// @flow
import * as React from 'react'
import styles from './style.css.js'
import { css } from '../../lib/styles'
import GithubIcon from './svgs/github'

type Icons = {
  github: React.ComponentType<IconProps>
}

type IconComponentProps = {
  name: IconNames,
  styles?: Styles
}

const icons: Icons = {
  github: GithubIcon
}

const Icon = (props: IconComponentProps): React.Node => {
  const {
    name,
    styles: styleOverride
  } = props
  const SVGIcon: React.ComponentType<IconProps> = icons[name]

  if (!SVGIcon) throw new Error(`Invalid icon name "${name}"`)

  return (
    <SVGIcon className={css(styles.icon, styleOverride)} />
  )
}

export default Icon
