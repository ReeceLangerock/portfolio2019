import React from 'react'

let SettingsContext
const defaultState = {
  settings: {
    crt: false,
    darkMode: true,
    soundEffects: true,
    loadingScreen: true,
  },

  blog: {
    activePost: undefined,
  },
  portfolio: {
    activeItem: undefined,
  },
  loadingScreenShown: false,
}
const { Provider, Consumer } = (SettingsContext = React.createContext(
  defaultState
))

class SettingsProvider extends React.Component {
  state = {
    settings: {
      crt: false,
      darkMode: true,
      soundEffects: true,
      loadingScreen: false,
    },

    blog: {
      activePost: undefined,
    },
    portfolio: {
      activeItem: undefined,
    },
    loadingScreenShown: false,
  }
  componentDidMount() {
    this.checkLocalStorage()
  }

  checkLocalStorage() {
    const settings = JSON.parse(localStorage.getItem('settings'))
    if (settings) {
      this.setState({
        ...this.state,
        settings,
      })
    }
  }

  handleActivePost = postId => {
    let blog = { ...this.state.blog }
    blog.activePost = blog.activePost === postId ? undefined : postId
    this.setState({
      ...this.state,
      blog,
    })
  }
  handleActiveItem = itemId => {
    let portfolio = { ...this.state.portfolio }
    portfolio.activeItem = portfolio.activeItem === itemId ? undefined : itemId

    this.setState({
      ...this.state,
      portfolio,
    })
  }

  handleChangeSetting = (setting, value) => {
    let settings = { ...this.state.settings }

    settings[setting] = value
    localStorage.setItem('settings', JSON.stringify(settings))
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
