// @flow
import * as React from 'react'
import styles from './style.css'
import { css } from '../../lib/styles'

type LoadingSpinnerProps = {
  loading: boolean,
  fullscreen: boolean,
  styles?: Styles
}

const LoadingSpinner = (props: LoadingSpinnerProps): React.Node => {
  if (!props.loading) return null

  const spinner: React.Node = (
    <div className={css(styles.loader, props.styles)} />
  )

  if (!props.fullscreen) return spinner

  return (
    <div className={css(styles.fullscreenContainer)}>
      {spinner}
    </div>
  )
}

LoadingSpinner.defaultProps = {
  fullscreen: false,
  loading: false
}

export default LoadingSpinner
