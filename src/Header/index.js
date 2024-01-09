import {Names, Names2, ScoreBackground, ContainerMain} from './styledComponents'

const Header = props => {
  const {score} = props

  return (
    <ContainerMain>
      <div>
        <Names>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </Names>
      </div>
      <ScoreBackground>
        <p>Score</p>
        <Names2>{score}</Names2>
      </ScoreBackground>
    </ContainerMain>
  )
}

export default Header
