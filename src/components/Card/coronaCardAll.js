
import React from "react";
import {Row} from "react-bootstrap";

const CoronaCardAll = ({totalCase, totalDeath, totalPatient, totalActive}) => {
  return(

    <div className="Corona-card-wrapper">
        <Row>
            <div className="btn btn-secondary " style={{width:400}} >Toplam Vaka Sayısı: {totalCase}</div>
        </Row>
        <Row>
            <div className="btn btn-secondary"  style={{marginTop:10,width:400}} >Toplam Ölen kişi Sayısı: {totalDeath}</div>
        </Row>
        <Row>
            <div className="btn btn-secondary" style={{marginTop:10,width:400}} >Toplam Hasta kişi Sayısı: {totalPatient}</div>
        </Row>
        <Row>
            <div className="btn btn-secondary" style={{marginTop:10,width:400}} >Toplam Aktif kişi Sayısı: {totalActive}</div>
        </Row>
    </div>
  )
};


export {CoronaCardAll}