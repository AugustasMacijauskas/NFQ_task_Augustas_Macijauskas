import React, { PureComponent } from 'react';
import Nouislider from 'react-nouislider';

class SliderSelector extends PureComponent {
    state = {
        min: this.props.min,
        max: this.props.max,
    };

    handleUpdate = (values) => {
        this.setState(() => {
            return {
                min: values[0],
                max: values[1],
            }
        }, () => {
            this.props.onChange(this.state);
        });
    }

    render() {
        return (
            <div>
                <div className="slider slider-info">
                    <Nouislider
                        start={[this.state.min, this.state.max]}
                        connect={[false, true, false]}
                        step={1}
                        range={{ min: this.props.min, max: this.props.max }}
                        onChange={this.handleUpdate}
                        tooltips
                    />
                </div>
            </div >
        );
    }
}

export default SliderSelector;