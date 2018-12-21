/* global ID Styles StyleSheetType noopFunction onEventFunction mergeStyleSheetsFunction */
// @flow
import * as React from 'react'
import memoizeOne from 'memoize-one'
import defaultStyles from './style.css'
import Icon from '../icon'
import noop from '../../lib/noop'
import mergeStyleSheets from '../../lib/merge-style-sheets'
import { css } from '../../lib/styles'

const getStyles: mergeStyleSheetsFunction = memoizeOne(mergeStyleSheets)

type SelectProps = {
  id: ID,
  name?: string,
  required?: boolean,
  value: string,
  styleSheet?: {
    select?: Styles,
    selectContainer?: Styles,
    placeholder?: Styles,
    chevron?: Styles,
  },
  onChange: noopFunction | onEventFunction,
  onBlur: noopFunction | onEventFunction,
  onFocus: noopFunction | onEventFunction,
  children: React.Node,
  placeholder?: string
}

const Select = (props: SelectProps): React.Node => {
  const {
    id,
    name,
    required,
    value,
    styleSheet: overridingStyles,
    onChange,
    onBlur,
    onFocus,
    children,
    placeholder
  } = props

  const styles: StyleSheetType = getStyles(defaultStyles, overridingStyles)

  return (
    <div className={css(styles.selectContainer)}>
      <select
        className={css(styles.select)}
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required}
        value={value}
      >
        {placeholder && (
          <option className={css(styles.placeholder)} value="" disabled>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <Icon name='chevron' styles={styles.chevron} />
    </div>
  )
}

Select.defaultProps = {
  value: '',
  onChange: noop,
  onBlur: noop,
  onFocus: noop,
  required: false,
  placeholder: null,
  styleSheet: {}
}

export default Select
