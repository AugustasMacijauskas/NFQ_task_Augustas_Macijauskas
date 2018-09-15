import React, { PureComponent } from 'react';
import Nouislider from 'react-nouislider';

class SliderSelector extends PureComponent {
    state = {};

    handleUpdate = (values) => (e) => {
        console.log(values);
        this.setState(() => {
            return {
                min: values[0],
                max: values[1],
            }
        }, () => {
            this.props.onEnd(this.state);
        });
    }

    render() {
        return (
            <div>
                <div className="slider slider-info">
                    <Nouislider
                        start={[this.props.min, this.props.max]}
                        connect={[false, true, false]}
                        step={1}
                        range={{ min: this.props.min, max: this.props.max }}
                        onEnd={this.handleUpdate(this.props)}
                        tooltips
                    />
                </div>
            </div >
        );
    }
}

export default SliderSelector;