import React from "react";
import "./Innerslick.scss";
import Slider from "react-slick";
import Data from "../../Data/Data.json";
import { Link } from "react-router-dom";


class Innerslick extends React.Component {
 
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    console.log(Data);
    const { showprogress, infodata} = this.props;

    return (
      <div className="Slider-box">
        <Slider {...settings}>        
          {infodata.map((item, key) => {
            return (
              <Link to={`/selected/${item.id}`}>
              <div className="slick-box" key={key}>
                <img src={item.img} />
                {showprogress && (
                  <div className="progressbar">
                    <div className="progress"></div>
                  </div>
                )}
              </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Innerslick;
