import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import Header from './Header/index'
import GameView from './GameView'
import PopupView from './PopupView'
import GameResults from './GameResults'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {score: 0, isShow: false, gameResult: '', you: '', opponent: ''}

  getResult = (choice1, choice2) => {
    if (choice1.id === 'ROCK') {
      switch (choice2.id) {
        case 'ROCK':
          return 'IT IS DRAW'
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return null
      }
    } else if (choice1.id === 'SCISSORS') {
      switch (choice2.id) {
        case 'SCISSORS':
          return 'IT IS DRAW'
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return null
      }
    } else {
      switch (choice2.id) {
        case 'PAPER':
          return 'IT IS DRAW'
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return null
      }
    }
  }

  opponentsChoice = id => {
    const {score} = this.state
    const choice2 =
      choicesList[Math.ceil(Math.random() * choicesList.length - 1)]

    const choice1 = choicesList.filter(item => item.id === id)
    console.log(choice1[0])
    console.log(choice2)
    const result = this.getResult(choice1[0], choice2)
    let newScore
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      score: newScore,
      isShow: true,
      gameResult: result,
      you: choice1[0],
      opponent: choice2,
    })
  }

  playAgain = () => {
    this.setState({isShow: false})
  }

  render() {
    const {score, isShow, gameResult, you, opponent} = this.state
    return (
      <div className="app-background">
        <Header score={score} />
        {!isShow && (
          <GameView
            choicesList={choicesList}
            opponentsChoice={this.opponentsChoice}
          />
        )}
        {isShow && (
          <GameResults
            gameResult={gameResult}
            you={you}
            opponent={opponent}
            playAgain={this.playAgain}
          />
        )}
        <Popup
          modal
          trigger={
            <button
              className="styled-button"
              onClick={this.onClickRulesButton}
              type="button"
            >
              Rules
            </button>
          }
        >
          {close => (
            <div>
              <button
                className="styled-button"
                type="button"
                onClick={() => close()}
              >
                Close
              </button>
              <PopupView />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default App
