import React, {Component} from 'react'

class Text extends Component {

    render() {
        return (
            <div className='Text'>
                <div className='Text-buttons'>
                    <i className='fas fa-arrow-up' onClick={this.props.upRate}></i>
                        <span>{this.props.rate}</span>
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