import React from 'react'
import FontAwsome from 'react-fontawesome'
import { calcTime,convertMoney,} from '../../../helpers'
import './MovieInfoBar.css'

const MovieInfoBar = (props) => {
    return(
        <div className="rmdb-movieinfobar">
        <div className="rmdb-movieinfobar-content">
        <div className="rmdb-movieinfobar-content-col">
            <FontAwsome className="fa-time" name="clock-o" size="2x"></FontAwsome>
            <span className="rmdb-movieinfobar-info">Runing time:{calcTime(props.time)}</span>
        </div>
        <div className="rmdb-movieinfobar-content-col">

            <FontAwsome  className="fa-budget" name="money" size="2x" />
            <span className="rmdb-movieinfobar-info">Budget:{convertMoney(props.budget)}</span>
        </div>
        <div className="rmdb-movieinfobar-content-col">
            <FontAwsome  className="fa-revenue" name="ticket" size="2x" />
            <span className="rmdb-movieinfobar-info">Reveue:{convertMoney(props.revenue)}</span>
        </div>
        </div>
        </div>
    )
}

export default MovieInfoBar