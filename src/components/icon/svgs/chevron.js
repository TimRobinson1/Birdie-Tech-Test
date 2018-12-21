/* global IconProps */
// @flow
import * as React from 'react'

const ChevronIcon = (props: IconProps): React.Node => (
  <svg viewBox='0 0 24 24' className={props.className}>
    <path d='M12,8l-6,6l1.41,1.41L12,10.83l4.59,4.58L18,14L12,8z' />
  </svg>
)

export default ChevronIcon
