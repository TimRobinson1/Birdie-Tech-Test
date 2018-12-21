/* IconProps IconNames */
// @flow
import * as React from 'react'
import styles from './style.css.js'
import { css } from '../../lib/styles'
import ChevronIcon from './svgs/chevron'
import GithubIcon from './svgs/github'
import WarningIcon from './svgs/warning'
import InfoIcon from './svgs/info'

type Icons = {
  chevron: React.ComponentType<IconProps>,
  github: React.ComponentType<IconProps>,
  warning: React.ComponentType<IconProps>,
  info: React.ComponentType<IconProps>
}

type IconComponentProps = {
  name: IconNames,
  styles?: Styles
}

const icons: Icons = {
  chevron: ChevronIcon,
  github: GithubIcon,
  warning: WarningIcon,
  info: InfoIcon
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
