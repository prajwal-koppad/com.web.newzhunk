import loading from "../../assets/loading.gif";
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <img src={loading} alt="loading" />
      </div>
    </div>
  );
};


export default Spinner;