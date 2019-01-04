import { StyleSheet, sizes, colors } from '../../lib/styles'

export default StyleSheet.create({
  app: {
    textAlign: 'center'
  },
  loadingSpinner: {
    width: sizes.larger,
    height: sizes.larger,
    borderColor: colors.darkGrey,
    borderBottomColor: 'transparent'
  },
  header: {
    color: colors.white,
    fontSize: sizes.regular
  }
})
