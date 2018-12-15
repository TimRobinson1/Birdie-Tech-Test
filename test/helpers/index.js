import { configure, shallow as shallowRender } from 'enzyme'
import EnzymeAdaptor from 'enzyme-adapter-react-16.3'

// Allow accurate shallow rendering of React 16 components
configure({ adapter: new EnzymeAdaptor() })

// A fake aphroditeCSS style object for testing
const fakeAphroditeStyle = { _len: 0, _name: 'super-class', _definition: {} }

export {
  shallowRender,
  fakeAphroditeStyle
}
