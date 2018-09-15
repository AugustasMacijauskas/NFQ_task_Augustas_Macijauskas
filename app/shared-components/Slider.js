import React, { PureComponent } from 'react';
import Rheostat from 'rheostat';

class Slider extends PureComponent {
    render() {
        return (
            <Rheostat
                min={this.props.min}
                max={this.props.max}
                values={[1, 100]}
            />
        )
    }
}

export default Slider;