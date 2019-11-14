import React, {Component} from 'react'
import './Text.css'

class Text extends Component {

    getColor() {
        if(this.props.rate >=15) {
            return 'rgb(229, 106, 119)'
        } else if(this.props.rate>=12) {
            return 'rgb(230, 122, 113)'
        } else if(this.props.rate>=9) {
            return 'rgb(232, 138, 106)'
        } else if(this.props.rate>=6) {
            return 'rgb(233, 154, 100)'
        } else if(this.props.rate>=3) {
            return 'rgb(234, 169, 94)'
        } else if(this.props.rate>=0) {
            return 'rgb(236, 185, 87)'
        } else return 'rgb(237, 201, 81)'
    }

    render() {
        return (
            <div className='Text'>
                <div className='Text-buttons'>
                    <i className='fas fa-arrow-up' onClick={this.props.upRate}></i>
                        <span className='Text-rate' style={{borderColor: this.getColor()}}>{this.props.rate}</span>
                    <i className='fas fa-arrow-down' onClick={this.props.downRate}></i>
                </div>
                <div className='Text-text'>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Text