import './player-page.css';
type PlayerPageProps = {
  videoUrl: string;
};
function PlayerPage({ videoUrl }: PlayerPageProps): JSX.Element {
  return (
    <div className="player">
      <video
        src={videoUrl}
        className="player__video"
        poster="img/player-poster.jpg"
      >
      </video>

      <button type="button" className="player__exit">
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value="30"
              max="100"
            >
            </progress>
            <div className="player__toggler">Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg className="svg_button_play" viewBox="0 0 19 19">
              <use href="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg className="svg_full_screen" viewBox="0 0 27 27">
              <use href="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
