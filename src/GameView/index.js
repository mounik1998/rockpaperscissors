import {Button, Image, ContainerMain} from './styledComponents'

const GameView = props => {
  const {choicesList, opponentsChoice} = props

  console.log(choicesList)

  return (
    <ContainerMain>
      <div>
        <Button
          data-testid="rockButton"
          type="button"
          onClick={() => opponentsChoice(choicesList[0].id)}
        >
          <Image
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="ROCK"
            key="ROCK"
          />
        </Button>
        <Button
          data-testid="scissorsButton"
          type="button"
          onClick={() => opponentsChoice(choicesList[1].id)}
        >
          <Image
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
            alt="SCISSORS"
            key="SCISSORS"
          />
        </Button>
      </div>
      <Button
        data-testid="paperButton"
        type="button"
        onClick={() => opponentsChoice(choicesList[2].id)}
      >
        <Image
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
          alt="PAPER"
          key="PAPER"
        />
      </Button>
    </ContainerMain>
  )
}

export default GameView
