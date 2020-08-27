import React from 'react';
import './Nav.scss';
import  logo from '../../Assets/images/logo.png'
import { Link, animateScroll as scroll } from 'react-scroll'
import BurgerMenu from '../BurgerMenu/BurgerMenu';



class Nav extends React.Component{
    
   
    render(){
        return(
            <React.Fragment >
                <nav className="nav-box">
                <div className="burgerMenu">
                    <BurgerMenu />
                </div>
                 <img src={logo} className="logo-img" alt="logo" onClick={() => scroll.scrollToTop()}/>
                    <ul className="list-box">
                    <a href="/" >
                        <li className="nav-link" >Inicio</li>
                    </a>
                        <Link to="Series" smooth={true} duration={1000}>
                        <li className="nav-link">Series</li>
                        </Link>
                        <Link to="continuar" smooth={true} duration={1000}>
                        <li className="nav-link"  >Películas</li>
                        </Link>
                        <Link to="agregados" smooth={true} duration={1000}>
                        <li className="nav-link" >Agregados recientemente</li>
                        </Link>
                        <li className="nav-link" >Mi lista</li>
                    </ul>
                </nav>
            </React.Fragment>           
        )
    }
}
export default  Nav