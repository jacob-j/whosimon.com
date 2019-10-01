  import React from 'react'

  import { Data as Schnaza } from "./Schnaza";
  import { Data as Overover } from "./Overover";
  import { Data as BarKemi } from "./BarKemi";
  import { Data as Tektor } from "./Tektor";

  import "./style.scss";


  export const Cases = [Schnaza, BarKemi, Overover, Tektor];

  
  function Template(props) {

    const Case = Cases.find(c => c.url === props.match.params.url);

    return (
      <div className="CaseView">
        <div className="CaseView__top">
          <img src={Case.topImage} />
        </div>
        <div className="CaseView__front" style={{ backgroundColor: Case.background || "#FFFFFF", color: Case.textColor || "#000" }}>
          <div className="CaseView__front__content">
            <div className="CaseView__front__content__text">
              <div className="CaseView__front__content__text__work">
                { Case.work.map(work => <div className="CaseView__front__content__text__work__item">{work}</div>) }
              </div>
              <div className="CaseView__front__content__text__info">
                <div className="CaseView__front__content__text__info__language">EN</div>
                { Case.description_eng }
              </div>
            </div>
            <div className="CaseView__front__content__logo">
              <img src={ Case.frontLogo } />
            </div>
            <div className="CaseView__front__content__text">
              <div className="CaseView__front__content__text__work">
                { Case.work_swe.map(work => <div className="CaseView__front__content__text__work__item">{work}</div>) }
              </div>
              <div className="CaseView__front__content__text__info">
                <div className="CaseView__front__content__text__info__language">SWE</div>
                { Case.description_swe }
              </div>
            </div>
          </div>
        </div>
        <div className="CaseView__photos">
          { Case.images.map(image => <img src={image} /> )}
        </div>
      </div>
    )
  }
  
  export default Template;
  