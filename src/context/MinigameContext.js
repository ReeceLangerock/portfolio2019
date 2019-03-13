import React from 'react'
let MinigameContext
const defaultState = {
  timerActive: true,
  time: 10000,
  level: 0,
  pieces: [],
  choices: [],
  gameStatus: 'limbo',
}
const { Provider, Consumer } = (MinigameContext = React.createContext(
  defaultState
))

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
      gameStatus: 'limbo',
    }
    this.runTimer = this.runTimer.bind(this)
    this.handleChoiceSelection = this.handleChoiceSelection.bind(this)
    this.setupGame = this.setupGame.bind(this)
  }

  componentDidMount() {
    this.setupGame()
  }

  setupGame() {
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
      gameStatus: 'active',
      timerActive: true,
      choices,
      pieceLocation: randomLocation,
      time: 10000
    })
  }

  updateLevel() {
    const newLevel = this.state.level + 1
    const choices = []

    for (let i = 0; i < 7; i++) {
      choices.push(this.createPieces())
    }

    const randomLocation = Math.floor(Math.random() * 7)
    choices.splice(randomLocation, 0, this.state.pieces[newLevel])
    this.setState({
      ...this.state,
      level: newLevel,
      choices,
      pieceLocation: randomLocation,
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

  async handleChoiceSelection(choiceIndex) {
    if (this.state.gameStatus !== 'active') {
      return
    }
    if (choiceIndex === this.state.pieceLocation) {
      await this.updateTime(this.state.time + 5000)
      // await this.resetTimer()
      this.updateLevel()
      this.runTimer()
    } else {
      this.updateTime(this.state.time - 1000)
    }
  }

  toggleTimer = () => {
    this.setState({
      timerActive: !this.state.timerActive,
    })
  }

  updateTime = async (time) => {
    this.setState({
      time: time,
    })
  }
  runTimer() {
    clearInterval(this.state.timerReference)
    const timer = setInterval(() => {
      this.setState({
        time: this.state.time - 113,
      })
      if (this.state.time <= 0) {
        this.setState({
          timerActive: false,
          gameStatus: 'limbo',
          time: 0,
        })
        this.handleGameOver()
        clearInterval(timer)
      }
    }, 113)
    this.setState({
      timerReference: timer,
    })
  }



  handleGameOver() {
    setTimeout(()=> {
      this.setState({
        gameStatus: 'fail',
      })
    },1000)
  
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          toggleTimer: this.toggleTimer,
          updateTime: this.updateTime,
          runTimer: this.runTimer,
          handleChoiceSelection: this.handleChoiceSelection,
          handleRetry: this.setupGame,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { MiniGameProvider, Consumer as MiniGameConsumer, MinigameContext }
