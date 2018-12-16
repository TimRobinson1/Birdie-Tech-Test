import { StyleSheet, sizes, widths, colors, utilities } from '../../lib/styles'

export default StyleSheet.create({
  navbar: {
    position: 'relative',
    zIndex: utilities.zIndex.standard,
    display: 'block',
    width: '100%',
    height: sizes.larger,
    margin: 0,
    backgroundColor: colors.primary,
    boxShadow: '2px 0px 9px 1px rgba(97,97,97,1)',
    '-webkit-box-shadow': '2px 0px 9px 1px rgba(97,97,97,1)',
    '-moz-box-shadow': '2px 0px 9px 1px rgba(97,97,97,1)'
  },
  navbarInnerContainer: {
    height: '100%',
    margin: '0 auto',
    padding: `0 ${sizes.regular}`,
    maxWidth: widths.pageContainer,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  githubIcon: {
    fill: colors.white,
    float: 'left',
    width: sizes.large,
    height: sizes.large,
    ':hover': {
      fill: colors.secondary
    }
  }
})
