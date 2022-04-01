import errorImage from '../../img/error.png'
import './error.scss'
import {FC} from 'react'
const Error:FC = () => {
    return (
        <div className="error">
            <img src={errorImage} alt="Во время загрузки страницы произошла ошибка"/>
            <h2>К сожалению, во время загрузки страницы произошла ошибка. Попробуйте перезагрузить страницу спустя некоторое время</h2>
        </div>
    )
}

export default Error