/* global Styles noopFunction onEventFunction IconNames StyleSheetType NotificationType */
// @flow
import * as React from 'react'
import * as StyleSheets from './style.css'
import Icon from '../icon'
import Text from '../text'
import Button from '../button'
import noop from '../../lib/noop'
import { css } from '../../lib/styles'

type NotificationProps = {
  styles?: Styles,
  notification?: NotificationType,
  id?: ID,
  onDismiss: noopFunction | onEventFunction
}

const notificationIconNames: Object = {
  error: 'warning',
  info: 'info'
}

const Notification = (props: NotificationProps): React.Node => {
  const { notification, id, onDismiss, styles: styleOverride } = props

  if (!notification) return null

  const styles: StyleSheetType = StyleSheets[notification.type]
  const iconName: IconNames = notificationIconNames[notification.type]
  const message: string = notification.message || 'Something went wrong!'

  return (
    <div id={id} className={css(styles.notification, styleOverride)}>
      <div className={css(styles.notificationInnerContainer)}>
        <div className={css(styles.notificationIconContainer)}>
          <Icon name={iconName} styles={styles.icon} />
        </div>
        <Text id='notification-text' element='div' styles={styles.notificationTextContainer}>
          {message}
        </Text>
        <div className={css(styles.notificationButtonContainer)}>
          <Button
            id='notification-dismiss'
            type='button'
            context='secondary'
            styles={styles.dismissButton}
            onClick={onDismiss}
          >
            Dismiss
          </Button>
        </div>
      </div>
    </div>
  )
}

Notification.defaultProps = {
  onDismiss: noop
}

export default Notification
