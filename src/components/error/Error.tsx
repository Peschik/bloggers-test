import errorImage from "../../img/error.png";
import "./error.scss";
import { FC } from "react";
const Error: FC = () => {
  return (
    <div className="error">
      <img src={errorImage} alt="Во время загрузки страницы произошла ошибка" />
      <h3 className="error__message">
        К сожалению, во время загрузки страницы произошла ошибка. Попробуйте
        перезагрузить страницу спустя некоторое время
      </h3>
    </div>
  );
};

export default Error;
