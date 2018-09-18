import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Wrapper = styled.div`
    margin: 1rem;
`;
class RadioBoxGroup extends PureComponent {
    state = {
        value: this.props.data[0],
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">{this.props.label}</FormLabel>
                <RadioGroup
                    aria-label={this.props.label}
                    name={this.props.label}
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    {
                        this.props.data.map((x, i) => {
                            return <FormControlLabel
                                key={i}
                                value={x}
                                control={<Radio
                                    color="primary"
                                />}
                                label={x}
                            />
                        })
                    }
                </RadioGroup>
            </FormControl>
        )
    }
}

export default RadioBoxGroup;