  import React from 'react'

  import { Data as Schnaza } from "./Schnaza";
  import { Data as Overover } from "./Overover";
  import { Data as BarKemi } from "./BarKemi";
  import { Data as Tektor } from "./Tektor";
  import { Data as Kallunge } from "./Kallunge";
  import { Data as Boco } from "./Boco";
  import { Data as WhosimonSans } from "./WhosimonSans";
  import { Data as BeeBee } from "./BeeBee";

  import "./style.scss";


  export const Cases = [Schnaza, BarKemi, Overover, Tektor, Kallunge, Boco, WhosimonSans, BeeBee];

  
  function Template(props) {

    const Case = Cases.find(c => c.url === props.match.params.url);

    return (
      <div className="CaseView">
        <div className="CaseView__top">
          <img src={Case.topImage} />
        </div>
        <div className="CaseView__front" style={{ backgroundColor: Case.background || "#FFFFFF", color: Case.textColor || "#000" }}>
          <div className="CaseView__front__content">
            <div className="CaseView__front__content__logo">
              <img src={ Case.frontLogo } />
            </div>
            <div className="CaseView__front__content__text">
              <div className="CaseView__front__content__text__work">
                { Case.work.map(work => <div className="CaseView__front__content__text__work__item">{work}</div>) }
              </div>
              <div className="CaseView__front__content__text__info">
                { Case.description }
              </div>
            </div>
          </div>
        </div>
        <div className="CaseView__photos">
          { Case.movies && Case.movies.length && Object.keys(Case.movies).map(key =>
            <video autoplay="1" muted="1" playsinline="1" loop>
              { Object.keys(Case.movies[key]).map(mime => <source type={mime} src={Case.movies[key][mime]} /> )}
            </video>
          )}
          { Case.images.map(image => <img src={image} /> )}
        </div>
        <div className="CaseView__photos CaseView__photos--mobile">
          { Case.movies && Object.keys(Case.movies).map(key =>
            <video autoplay="1" muted="1" playsinline="1" loop>
              { Object.keys(Case.movies[key]).map(mime => <source type={mime} src={Case.movies[key][mime]} /> )}
            </video>
          )}
          { Case.imagesMobile.map(image => <img src={image} /> )}
        </div>
      </div>
    )
  }
  
  export default Template;
  