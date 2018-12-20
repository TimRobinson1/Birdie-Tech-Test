import { StyleSheet, sizes, colors, utilities } from '../../lib/styles'

export default StyleSheet.create({
  button: {
    cursor: 'pointer',
    border: '1px solid',
    borderRadius: utilities.borderRadius,
    display: 'inline-block',
    fontWeight: 'bold',
    paddingTop: sizes.smaller,
    paddingRight: sizes.regular,
    paddingBottom: sizes.smaller,
    paddingLeft: sizes.regular,
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'background-color 150ms',
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.2)',
    ':active': {
      boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
    }
  },
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.white,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.primaryLight
    },
    ':focus': {
      backgroundColor: colors.primaryLight
    }
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: 'initial',
    color: 'initial',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'initial'
    },
    ':focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'initial'
    }
  }
})
