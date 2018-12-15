import { StyleSheet, css } from 'aphrodite/no-important'

// To be used for larger, often screen-related widths
const widths = {
  pageContainer: '59rem',
  primaryBreakpoint: '37.5rem'
}

// Shorthand helper for incorporating breakpoints
const breakpoints = {
  primary: `@media(max-width: ${widths.primaryBreakpoint})`
}

// Primary/Secondary pattern means an adaptable, easily replacable color-scheme
const colors = {
  white: '#FFF',
  danger: '#FF6961', // complimentary colour to `colors.primary`
  black: '#000',
  grey: '#D0D0CE',
  lightGrey: '#DDD',
  darkGrey: '#707070',
  primary: '#61A8FF',
  primaryLight: '#7BB6FF',
  primaryDark: '#002D72',
  secondary: '#F0F8FF'
}

// Sets a standard unit for font/margin/padding sizes
const sizes = {
  largest: '5rem',
  larger: '3rem',
  large: '2rem',
  regular: '1rem',
  small: '0.75rem',
  smaller: '0.5rem',
  smallest: '0.25rem'
}

const utilities = {
  borderRadius: '4px',
  zIndex: {
    // To be added to as needed
    standard: 1
  }
}

export {
  StyleSheet,
  css,
  sizes,
  widths,
  breakpoints,
  colors,
  utilities
}
