import React from 'react';
import '../Index/App.scss';
import Nav from '../../Components/Nav/Nav';
import Hero from '../../Components/Hero/Hero';
import Slick from '../../Components/Slick/Slick';
import Data from  '../../Data/Data.json'



function App() {
  const {imgPortada, mainTitle, subTitle, title, description}  = Data[0].portada;
  return (
    
    <div className="App">
     <header>
     <Nav/>
     </header>
     <Hero img={imgPortada} mainTitle={mainTitle} title={title} subTitle={subTitle} description={description} showTitle={true} showSubTitle={true}/>
   <section className="carousel-box">
   <Slick seriesT="Series" peliculasT="Peliculas" continuarT="Agregados Recientemente" />
   </section>
    </div>
  );
}

export default App;
