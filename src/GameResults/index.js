import {Image, ContainerMain, Heading, Button} from './styledComponents'

const GameResults = props => {
  const {you, opponent, gameResult, playAgain} = props
  return (
    <ContainerMain>
      <div>
        <Image src={you.imageUrl} alt="your choice" />
        <Image src={opponent.imageUrl} alt="opponent choice" />
      </div>
      <Heading>{gameResult}</Heading>
      <Button type="button" onClick={() => playAgain()}>
        Play Again
      </Button>
    </ContainerMain>
  )
}

export default GameResults
