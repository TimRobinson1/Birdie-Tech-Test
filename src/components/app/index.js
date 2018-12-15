/* global */
// @flow
import * as React from 'react'
import { css } from '../../lib/styles'
import styles from './style.css'

class App extends React.Component<*> {
  render (): React.Node {
    return (
      <div className={css(styles.app)}>
        <header className="App-header">
          <p>
            Data visualisation app
          </p>
        </header>
      </div>
    )
  }
}

export default App
