import {
  StyleSheet,
  sizes,
  widths,
  breakpoints,
  colors,
  utilities
} from '../../lib/styles'

export default StyleSheet.create({
  app: {
    textAlign: 'center'
  },
  pageContainer: {
    position: 'relative',
    paddingTop: sizes.large,
    paddingLeft: sizes.regular,
    paddingRight: sizes.regular,
    paddingBottom: sizes.regular,
    margin: '0 auto',
    maxWidth: widths.pageContainer,
    backgroundColor: colors.white
  },
  infoSectionsContainer: {
    display: 'flex',
    marginBottom: sizes.regular
  },
  statisticsContainer: {
    flex: 1,
    padding: `0 ${sizes.regular}`,
    [breakpoints.primary]: {
      marginLeft: sizes.smaller
    }
  },
  selectContainer: {
    flex: 1,
    padding: `0 ${sizes.regular}`,
    borderRight: '1px solid',
    borderColor: colors.secondary,
    [breakpoints.primary]: {
      marginRight: sizes.smaller
    }
  },
  loadingSpinner: {
    width: sizes.larger,
    height: sizes.larger,
    borderColor: colors.darkGrey,
    borderBottomColor: 'transparent'
  },
  table: {
    borderRadius: utilities.borderRadius,
    overflow: 'hidden'
  },
  tableRow: {
    borderRadius: utilities.borderRadius,
    overflow: 'hidden',
    ':nth-child(odd)': {
      backgroundColor: colors.secondary
    },
    [breakpoints.primary]: {
      backgroundColor: 'inherit',
      ':nth-child(odd)': {
        backgroundColor: 'inherit'
      }
    }
  },
  tableHeaderRow: {
    backgroundColor: colors.primary,
    color: colors.white,
    border: 'none'
  },
  tableRowNumber: {
    [breakpoints.primary]: {
      backgroundColor: colors.secondary
    }
  }
})
