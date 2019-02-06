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

    blog: {
      activePost: 2,
    },
  }
  handleActivePost = postId => {
    console.log('t', postId)
    let blog = { ...this.state.blog }
    blog.activePost = postId
    console.log(blog)
    this.setState({
      ...this.state,
      blog,
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

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          onChangeSetting: this.handleChangeSetting,
          onSelectPost: this.handleActivePost,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SettingsProvider, Consumer as SettingsConsumer, SettingsContext }
