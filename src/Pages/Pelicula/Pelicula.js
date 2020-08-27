import React from "react";
import "./Pelicula.scss";
import Nav from "../../Components/Nav/Nav";
import Hero from "../../Components/Hero/Hero";
import Data from '../../Data/Data.json'
import Innerslick from "../../Components/Innerslick/Innerslick";

class Pelicula extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      imgPortada:"" ,
      titleP: "", 
      subTitle: "",
      title: "", 
      description: "",
      princ: "",
      year: "",
      age:"",
      time:""
    
    }
  }

  componentDidMount(){
    const dataAll = [...Data[1].series, ...Data[1].peliculas, ...Data[1].recomendadas ]
    const filtered = dataAll.filter ((dat) =>{
      return dat.id == this.props.match.params.id;
    });
 

    this.setState({
      imgPortada: filtered[0].imgPortada,
      titleP:  filtered[0].titleP,
      subtitle: filtered[0].subTitle,
      title:  filtered[0].title,
      description: filtered[0].description,
      year: filtered[0].year,
      age: filtered[0].age,
      time: filtered[0].time
     
      
    })
  }

  render() {
    const {imgPortada, titleP, subtitle, title, description, princ, year, age, time} = this.state

    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <Hero img={imgPortada} title={title} mainTitle={titleP} princ={princ}  subTitle={subtitle} description={description} year={year} age={age} time={time} showThumbs={true} infodetail={true}  />
        <section className="carousel-box">
        <div className="containerElement">

        <p className="title">
        </p>
        <Innerslick infodata={Data[1].recomendadas} />
        </div>
        </section>
      </div>
    );
  }
}
export default Pelicula;
