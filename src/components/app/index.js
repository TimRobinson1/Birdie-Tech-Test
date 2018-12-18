/* global */
// @flow
import * as React from 'react'
import { css } from '../../lib/styles'
import connectComponentToState from '../../lib/connect-component-to-state'
import styles from './style.css'
import Navbar from '../navbar'
import Header from '../header'
import Text from '../text'

class App extends React.Component<*> {
  render (): React.Node {
    return (
      <div className={css(styles.app)}>
        <Navbar>
          <Header>
            <Text element='h1' styles={styles.header}>
              Data visualisation app
            </Text>
          </Header>
        </Navbar>
      </div>
    )
  }
}

export default connectComponentToState(App)
