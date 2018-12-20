import { StyleSheet, sizes, breakpoints, colors } from '../../lib/styles'

const headerStyle = {
  fontWeight: 'bold',
  padding: sizes.smaller,
  textAlign: 'left',
  [breakpoints.primary]: {
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px'
  }
}
const rowStyle = {
  border: '1px solid',
  borderColor: colors.lightGrey,
  padding: sizes.smaller
}
const cellStyle = {
  padding: sizes.smaller,
  textAlign: 'left'
}
const compactCellStyle = {
  borderBottom: '1px solid',
  borderColor: colors.lightGrey,
  display: 'block',
  fontSize: '.8em',
  textAlign: 'right',
  ':last-child': {
    borderBottom: 0
  },
  /*
  * aria-label has no advantage, it won't be read inside a table
  content: attr(aria-label);
  */
  '::before': {
    content: 'attr(data-label)',
    float: 'left',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
}

export default StyleSheet.create({
  loading: {
    opacity: '0.5'
  },
  table: {
    border: '1px solid',
    borderColor: colors.lightGrey,
    borderCollapse: 'collapse',
    width: '100%',
    fontSize: sizes.regular,
    [breakpoints.primary]: {
      border: 0
    }
  },
  tableHeader: headerStyle,
  tableHeaderNumber: headerStyle,
  tableRow: {
    ...rowStyle,
    [breakpoints.primary]: {
      borderBottom: '3px solid',
      borderColor: colors.lightGrey,
      display: 'block',
      marginBottom: '.625em',
      padding: 0,
      backgroundColor: colors.secondary
    }
  },
  tableHeaderRow: {
    ...rowStyle,
    [breakpoints.primary]: {
      display: 'none'
    }
  },
  tableRowNumber: {
    ...cellStyle,
    [breakpoints.primary]: compactCellStyle
  },
  tableCell: {
    ...cellStyle,
    [breakpoints.primary]: {
      ...compactCellStyle,
      ':first-child': {
        backgroundColor: colors.secondary
      }
    }
  }
})
