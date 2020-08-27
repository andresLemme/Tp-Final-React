import React from 'react'
import './Button.scss'

class Button extends React.Component{
    render(){
        const {title} = this.props
        return(
            <React.Fragment>
                <a href="#" className="btn-hero">{title}</a> 
            </React.Fragment>
        )
    }
}
export default Button