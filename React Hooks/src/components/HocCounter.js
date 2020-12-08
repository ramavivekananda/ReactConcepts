import React, {Component} from 'react';

const enchancedComponent = (OriginalComponent) => {
    class HocCounter extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return {count:prevState.count + 1}
            })
        }

        render() {
            return (
                <OriginalComponent count={this.state.count}  incrementCount = {this.incrementCount} />
            )
        }
        
    }
    return HocCounter;

}
export default enchancedComponent;