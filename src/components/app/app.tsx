import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type AppScreenProps = {
  name: string;
  genre: string;
  releaseDate: string;
}

function App(props: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen name={props.name} genre={props.genre} releaseDate={props.releaseDate} />
  );
}

export default App;
