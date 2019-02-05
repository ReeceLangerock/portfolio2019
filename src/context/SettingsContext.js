import React from 'react'

let SettingsContext
const { Provider, Consumer } = (SettingsContext = React.createContext())

class SettingsProvider extends React.Component {
  state = {
    settings: {
      crt: false,
      darkMode: true,
      soundEffects: true,
      loadingScreen: true,
    },
  }

  handleChangeSetting = (setting, value) => {
    let settings = { ...this.state.settings }
    settings[setting] = value
    this.setState({
      settings,
    })
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          onChangeSetting: this.handleChangeSetting,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SettingsProvider, Consumer as SettingsConsumer, SettingsContext }
