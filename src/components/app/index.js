/* global NotificationType EventObject TableColumns */
// @flow
import * as React from 'react'
import type { Dispatch as DispatchType } from 'redux'
import Navbar from '../navbar'
import Notification from '../notification'
import Main from '../main'
import Header from '../header'
import Text from '../text'
import LoadingSpinner from '../loading-spinner'
import connectComponentToState from '../../lib/connect-component-to-state'
import { css } from '../../lib/styles'
import styles from './style.css'

type AppProps = {
  loading: boolean,
  notification?: NotificationType,
  initialiseData: (void) => DispatchType,
  fetchColumnStatistics: (string) => DispatchType,
  dismissNotification: (void) => DispatchType,
  field: string,
  columns: TableColumns,
  omittedResultCount: number,
  statisticsData: Array<TableRowData>,
  fetchColumnStatistics: (string) => void
}

class App extends React.Component<AppProps> {
  componentDidMount (): void {
    // Fetch the column information for the app to render
    this.props.initialiseData()
  }

  onDismissNotification = (event: EventObject): void => {
    event.preventDefault()
    this.props.dismissNotification()
  }

  render (): React.Node {
    const {
      loading,
      notification,
      ...mainProps
    } = this.props

    return (
      <div className={css(styles.app)}>
        <Navbar>
          <Header>
            <Text element='h1' styles={styles.header}>
              Data visualisation app
            </Text>
          </Header>
        </Navbar>
        <LoadingSpinner
          styles={styles.loadingSpinner}
          loading={loading}
          fullscreen
        />
        <Notification
          id='notification'
          notification={notification}
          onDismiss={this.onDismissNotification}
        />
        <Main
          field={mainProps.field}
          columns={mainProps.columns}
          omittedResultCount={mainProps.omittedResultCount}
          statisticsData={mainProps.statisticsData}
          fetchColumnStatistics={mainProps.fetchColumnStatistics}
        />
      </div>
    )
  }
}

export default connectComponentToState(App)
