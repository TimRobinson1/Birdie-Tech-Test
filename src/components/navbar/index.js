// @flow
import * as React from 'react'
import Icon from '../icon'
import styles from './style.css'
import { css } from '../../lib/styles'

type NavbarProps = {
  children: React.Node
}

const Navbar = (props: NavbarProps): React.Node => (
  <div className={css(styles.navbar)}>
    <div className={css(styles.navbarInnerContainer)}>
      {props.children}
      <a title="View this app on Github" href='https://github.com/TimRobinson1/Birdie-Tech-Test'>
        <Icon name='github' styles={styles.githubIcon} />
      </a>
    </div>
  </div>
)

export default Navbar
