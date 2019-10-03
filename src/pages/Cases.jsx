import React from 'react'
import { Link } from "react-router-dom";
import "./style.scss";

import { Cases } from "../cases/";

function View() {
  const casesRows = {
    left: [],
    right: [],
    all: []
  }
  Cases.map((caseData, key) => {
    const Case = (
      <Link to={`case/${caseData.url}`} className="Cases__case">
        <div className="Cases__case__image">
          <img src={caseData.images[0]} alt={caseData.title} />
        </div>
        <div className="Cases__case__text">
          <h3>{ caseData.work.map((w,k) => `${w}${k !== caseData.work.length - 1 ? ", " : ""}`) }</h3>
          <h1>{ caseData.title }</h1>
          <h2>{ caseData.type }</h2>
        </div>
      </Link>
    )
    casesRows.all.push(Case);
    if(key %2 === 0){
      casesRows.left.push(Case);
    } else {
      casesRows.right.push(Case);
    }
  })
  return (
    <div className="Cases">
      <div className="Cases__list Cases__list--only-mobile">
        { casesRows.all }
      </div>
      <div className="Cases__list">
        <div className="Cases__list__left">
          { casesRows.left }
        </div>
        <div className="Cases__list__right">
          { casesRows.right }
        </div>
      </div>
    </div>
  )
}

export default View;
