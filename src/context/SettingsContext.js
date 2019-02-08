import React from 'react'

let SettingsContext
const { Provider, Consumer } = (SettingsContext = React.createContext())

class SettingsProvider extends React.Component {
  state = {
    settings: {
      crt: false,
      darkMode: true,
      soundEffects: true,
      loadingScreen: false,
    },

    blog: {
      activePost: 2,
    },
    portfolio: {
      activeItem: 2,
    },
    loadingScreenShown: false,
  }
  handleActivePost = postId => {
    let blog = { ...this.state.blog }
    blog.activePost = postId
    this.setState({
      ...this.state,
      blog,
    })
  }
  handleActiveItem = itemId => {
    let portfolio = { ...this.state.portfolio }
    portfolio.activeItem = itemId
    this.setState({
      ...this.state,
      portfolio,
    })
  }

  handleChangeSetting = (setting, value) => {
    let settings = { ...this.state.settings }
    settings[setting] = value
    this.setState({
      ...this.state,
      settings,
    })
  }

  handleLoad = () => {
    this.setState({
      ...this.state,
      loadingScreenShown: true,
    })
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          onChangeSetting: this.handleChangeSetting,
          onSelectPost: this.handleActivePost,
          onSelectItem: this.handleActiveItem,
          onLoad: this.handleLoad,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SettingsProvider, Consumer as SettingsConsumer, SettingsContext }
