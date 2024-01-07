import { FadeLoader } from 'react-spinners';
import './spinner.css';

export function Spinner(): JSX.Element {
  return (
    <div className="spinner">
      <FadeLoader color="#DFCF77" />
    </div>
  );
}
export default Spinner;
