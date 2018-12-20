import {
  StyleSheet,
  sizes,
  colors,
  utilities
} from '../../lib/styles'

const iconStyle = {
  pointerEvents: 'none',
  width: sizes.large,
  height: sizes.large,
  '@media(max-width: 45rem)': {
    display: 'none'
  }
}

const inlineDivStyle = {
  verticalAlign: 'middle',
  display: 'inline-block',
  width: 'max-content',
  textAlign: 'center'
}

const baseStyles = {
  notification: {
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: utilities.zIndex.standard,
    top: sizes.regular,
    left: 0,
    right: 0,
    margin: '0 auto',
    width: 'max-content',
    padding: sizes.smaller,
    borderRadius: utilities.borderRadius,
    '@media(max-width: 45rem)': {
      top: 0,
      width: '100%'
    }
  },
  notificationIconContainer: { // Icon container
    ...inlineDivStyle,
    height: sizes.large
  },
  notificationTextContainer: {
    ...inlineDivStyle,
    padding: `0 ${sizes.small}`,
    overflow: 'auto',
    maxWidth: '32rem',
    '@media(max-width: 45rem)': {
      maxWidth: '20rem'
    }
  },
  notificationButtonContainer: {
    ...inlineDivStyle,
    overflow: 'auto'
  },
  notificationText: {
    padding: `0 ${sizes.small} 0`,
    height: 'max-content'
  },
  dismissButton: {
    borderColor: colors.white,
    color: colors.white,
    '@media(max-width: 45rem)': {
      margin: sizes.smallest
    }
  }
}

// Stylesheet for error notifications
const error = StyleSheet.create({
  ...baseStyles,
  notification: {
    ...baseStyles.notification,
    color: colors.white,
    backgroundColor: colors.danger
  },
  icon: {
    ...iconStyle,
    fill: colors.white
  }
})

// Stylesheet for info notifications
const info = StyleSheet.create({
  ...baseStyles,
  notification: {
    ...baseStyles.notification,
    color: colors.white,
    backgroundColor: colors.black
  },
  icon: {
    ...iconStyle,
    fill: colors.white
  }
})

export {
  error,
  info
}
