import { StyleSheet, sizes, colors, utilities } from '../../lib/styles'

export default StyleSheet.create({
  selectContainer: {
    position: 'relative'
  },
  select: {
    fontWeight: '200',
    fontSize: sizes.regular,
    lineHeight: '1.35',
    letterSpacing: 1,
    appearance: 'none',
    backgroundColor: colors.white,
    border: `1px solid ${colors.grey}`,
    borderRadius: utilities.borderRadius,
    boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0)',
    color: colors.black,
    height: '100%',
    paddingBottom: sizes.small,
    paddingLeft: sizes.regular,
    paddingRight: sizes.regular,
    paddingTop: sizes.small,
    width: '100%',
    ':focus': {
      boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.1)',
      borderColor: colors.primaryDark,
      outline: 0
    },
    '::placeholder': {
      color: colors.grey
    }
  },
  chevron: {
    pointerEvents: 'none',
    position: 'absolute',
    right: sizes.large,
    top: '50%',
    transform: 'translateY(-50%) rotate(180deg)',
    width: sizes.large,
    height: sizes.large,
    backgroundColor: colors.white,
    boxShadow: `0px 0px 5px 3px ${colors.white}`
  }
})
