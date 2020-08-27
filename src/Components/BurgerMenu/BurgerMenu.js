import React from 'react'
import './BurgerMenu.scss'
import { Link, animateScroll as scroll } from 'react-scroll'
import { slide as Menu} from 'react-burger-menu'

class BurgerMenu extends React.Component{
constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }
 start
  handleClose() {
    this.setState ({
      isOpen: false
    })
  }

  handleStateChange(state) {
    this.setState({
      isOpen: state.isOpen
    })
  }


    render(){
        return(
            <Menu slide isOpen={this.state.isOpen} onStateChange={(state) => this.handleStateChange(state)}>
            <ul className='navbarMenu'>
              <a onClick={this.scrollToTop} href='/' className='menuBurger'><li className='menuBurger'>Inicio</li></a>
    
              <Link activeClass="active" to="Series"  smooth={true}  duration={500} onSetActive={this.handleSetActive} onClick={() => this.handleClose()}>
                <li className='menuBurger'>Series</li>
              </Link>
    
              <Link activeClass="active" to="continuar"  smooth={true}  duration={500} onSetActive={this.handleSetActive} onClick={() => this.handleClose()}>
              <li className='menuBurger'>Peliculas</li>
              </Link>
    
              <Link activeClass="active" to="agregados"  smooth={true}  duration={500} onSetActive={this.handleSetActive} onClick={() => this.handleClose()}>
              <li className='menuBurger'>Agregadas Recientemente</li>
              </Link>
    
              <Link activeClass="active" to="/"  smooth={true} duration={500} onSetActive={this.handleSetActive} onClick={() => this.handleClose()}>
              <li className='menuBurger'>Mi lista</li>
              </Link>
            </ul>
          </Menu>
        )
    }
}
export default BurgerMenu