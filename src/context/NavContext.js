import React from 'react'

let NavContext
const { Provider, Consumer } = (NavContext = React.createContext())

class NavProvider extends React.Component {
  state = {
    test: 113,
  }
  
  render() {
    return (
      <Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { NavProvider, Consumer as NavConsumer, NavContext }
