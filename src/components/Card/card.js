import React from "react";
import PropTypes from "prop-types"
const Card = ({country,countryInfo,cases,countryFlag,todayCases,deaths,todayDeaths,recovered,active,critical}) => {
    return (
       <div className="card text-center">
            <div className="overFlow">
                <img src={countryFlag} alt={country} className="card-img-top"/>
            </div>
           <div className="card-body text-dark">
               <h4 className="card-title">{country}</h4>
               <p className="card-text text-secondary">
                   <b>Toplam Vaka:</b> {cases}
               </p>
               <p className="card-text text-secondary">
                   <b>Günlük Vaka:</b> {todayCases}
               </p>
               <p className="card-text text-secondary">
                   <b>Günlük Ölüm:</b> {todayDeaths}
               </p>
               <p className="card-text text-secondary">
                   <b>Toplam Ölüm:</b> {deaths}
               </p>
               <p className="card-text text-secondary">
                   <b>Toplam İyileşen:</b> {active}
               </p>
           </div>
       </div>
    )
};


export {Card}