import spinner from "../../img/spinner.gif";
import "./spinner.scss";
const Spinner = () => {
  return (
    <>
      <img className="spinner" src={spinner} alt="We are loading the page" />
    </>
  );
};
export default Spinner;
