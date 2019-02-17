import React from 'react'

let MinigameContext
const { Provider, Consumer } = (MinigameContext = React.createContext())

const NUM_ROWS = 5
const NUM_COLS = 5
const MAX_FILLED = 12
const BASE_PERCENT = 40

class MiniGameProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timerActive: true,
      time: 10000,

        level: 0,
        pieces: [],
        choices: [],
    }
    this.runTimer = this.runTimer.bind(this)
    this.handleChoiceSelection = this.handleChoiceSelection.bind(this)
  }

  componentDidMount() {
    this.setupGame()
  }

  setupGame() {
    console.log('setting up')
    const pieces = []
    const choices = []

    for (let i = 0; i < 3; i++) {
      pieces.push(this.createPieces())
    }
    for (let i = 0; i < 7; i++) {
      choices.push(this.createPieces())
    }

    const randomLocation = Math.floor(Math.random() * 7)
    choices.splice(randomLocation, 0, pieces[this.state.level])

    this.setState({
      ...this.state,
      pieces,
      choices,
      pieceLocation: randomLocation
    })
  }

  createPieces() {
    const piece = [[], [], [], [], []]
    let percent_addition = 0
    let num_filled = 0
    for (let row = 0; row < NUM_ROWS; row++) {
      for (let col = 0; col < NUM_COLS; col++) {
        if (num_filled <= MAX_FILLED) {
          let isFilled = Math.floor(Math.random() * 100)
          if (isFilled <= BASE_PERCENT + percent_addition) {
            piece[row][col] = true
            num_filled++
          } else {
            piece[row][col] = false
            percent_addition += 1
          }
        } else {
          piece[row][col] = false
        }
      }
    }

    return piece
  }

  handleChoiceSelection(isCorrect){
    if(isCorrect){
      console.log('yup')
      this.resetTimer()
      this.setState({
        level: this.state.level + 1
      })
    } else{
      console.log('nope')
    }
  }

  toggleTimer = () => {
    this.setState({
      timerActive: !this.state.timerActive,
    })
  }

  resetTimer = () => {
    this.setState({ time: 10000 })
  }
  updateTime = time => {
    this.setState({
      time: time,
    })
  }
  runTimer() {
    const timer = setInterval(() => {
      this.setState({
        time: this.state.time - 113,
      })
      if (this.state.time <= 0) {
        this.setState({
          timerActive: false,
          time: 0,
        })
        clearInterval(timer)
      }
    }, 113)
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          toggleTimer: this.toggleTimer,
          resetTimer: this.resetTimer,
          updateTime: this.updateTime,
          runTimer: this.runTimer,
          handleChoiceSelection: this.handleChoiceSelection
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { MiniGameProvider, Consumer as MiniGameConsumer, MinigameContext }
