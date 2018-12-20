import { StyleSheet, sizes, colors, utilities } from '../../lib/styles'

const spinKeyframes = {
  '0%': {
    transform: 'rotate(0deg) scale(1)'
  },
  '50%': {
    transform: 'rotate(180deg) scale(0.8)'
  },
  '100%': {
    transform: 'rotate(360deg) scale(1)'
  }
}

export default StyleSheet.create({
  loader: {
    background: 'transparent',
    width: sizes.large,
    height: sizes.large,
    borderRadius: '100%',
    border: `${sizes.smallest} solid ${colors.black}`,
    borderBottomColor: 'transparent',
    display: 'inline-block',
    animationName: [spinKeyframes],
    animationDuration: '0.75s',
    animationDelay: '0s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationFillMode: 'both'
  },
  fullscreenContainer: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: utilities.zIndex.standard
  }
})
