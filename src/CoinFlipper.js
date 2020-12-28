import React, { Component } from 'react'
import Coin from './Coin';

class CoinFlipper extends Component {
    static defaultProps = {
        faces: 
            [
                'https://tinyurl.com/react-coin-heads-jpg',
                'https://i.ebayimg.com/images/g/wGEAAOSwYu1crzzn/s-l400.jpg'
            ]
    };

    constructor(props) {
        super(props);
        this.state = {
            face: '',
            head: 0,
            tail: 0,
            flip: 0
        }
    }

    flipper() {
        const randNum = Math.floor(Math.random() * 2) + 1;
        if (randNum === 1) {
            this.setState(currState => (
                {
                    flip: currState.flip + 1,
                    head: currState.head + 1,
                    face: this.props.faces[0]
                }
            ));
        } else if (randNum === 2) {
            this.setState(currState => (
                {
                    flip: currState.flip + 1,
                    tail: currState.tail + 1,
                    face: this.props.faces[1]
                }
            ));
        }
    }

    flipMe = () => {
        if(this.state.flip === 10) {
            this.setState( () => ({
                flip: 0,
                head: 0,
                tail: 0
            }))
        } else {
            this.flipper();
        }

    }

    
    render() {
        return(
            <div>
                <h1>Let's flipp a coin!</h1>
                <Coin {...this.state } />
                <button onClick={this.flipMe}>Flipp me!</button>
            </div>
        )
    }
}

export default CoinFlipper;