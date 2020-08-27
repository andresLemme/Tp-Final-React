import React from "react";
import "./Hero.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like: "up",
      dontlike: "down",
    };
  }

  handleUp() {
    const { like } = this.state;
    if (like == "up") {
      this.setState({
        like: "up green",
        dontlike: "down",
      });
    } else {
      this.setState({
        like: "up",
      });
    }
  }

  handleDown() {
    const { dontlike } = this.state;

    if (dontlike == "down") {
      this.setState({
        like: "up",
        dontlike: "down red",
      });
    } else {
      this.setState({
        dontlike: "down",
      });
    }
  }

  render() {
    const {
      mainTitle,
      subTitle,
      title,
      description,
      img,
      showThumbs,
      showSubTitle,
      year,
      age,
      time,
      showTitle,
      infodetail
    } = this.props;

    const { like, dontlike } = this.state;

    return (
      <>
        <section className="hero-content">
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="hero-content-box">
              <div className="text-content">
              {showSubTitle && (
                <h3>{subTitle}</h3>
              )}               
                <h1>{mainTitle}</h1>
                {infodetail && (
               <div className="infodetail">
               <p>{year}</p>
                <p>{age}</p>
                <p>{time}</p>
               </div>
                )}
              </div>
              <div className="button-box">
                <Button title="Reproducir" />
                <Button title="+ mi lista" />
                {showThumbs && (
                  <>
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className={like}
                      onClick={() => this.handleUp()}
                    />
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      className={dontlike}
                      onClick={() => this.handleDown()}
                    />
                  </>
                )}
              </div>
              <div className="infostemporada">
              {showTitle && (
                <p className="text">{title}</p>
              )}
                <p className="text">{description}</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Hero;
