import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component {
    render() {
        return(
            <div className="Coin">
                {this.props.flip !== 0 && <img className="Coin-image" src={this.props.face} /> }
                <p>Out of {this.props.flip}, there have been {this.props.head} heads and {this.props.tail} tails</p>
            </div>
        )
    }
}

export default Coin;