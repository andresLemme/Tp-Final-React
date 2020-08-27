import React from "react";
import "./Slick.scss";
import Innerslick from "../Innerslick/Innerslick";
import Data from "../../Data/Data.json";

class Slick extends React.Component {
  render() {
    const {seriesT, peliculasT, continuarT} = this.props
    return (
      <div className="containerElement">
        <p className="title" id="Series">
          {seriesT}
        </p>
        <Innerslick infodata={Data[1].series} />
        <p className="title" id="continuar">
          {peliculasT}
        </p>
        <Innerslick showprogress={true} infodata={Data[1].peliculas} />
        <p className="title" id="agregados">
          {continuarT}
        </p>
        <Innerslick infodata={Data[1].recomendadas} />
      </div>
    );
  }
}
export default Slick;
