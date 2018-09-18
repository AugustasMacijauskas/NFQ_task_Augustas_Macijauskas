import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Wrapper = styled.div`
    margin: 1rem;
`;

class CheckBoxGroup extends PureComponent {
    state = {};

    handleChange = (name) => (e) => {
        const value = e.target.value;
        this.setState(prepState => {
            if (prepState[name]) {
                return {
                    [name]: null
                }
            } else {
                return {
                    [name]: value
                }
            }
        }, () => {
            this.props.onChange(Object.values(this.state).filter(x => x));
        });
    }

    render() {
        return (
            <Wrapper>
                <FormControl component="fieldset">
                    <FormLabel component="legend">{this.props.label}</FormLabel>
                    <FormGroup>
                        {
                            this.props.data.map((x, i) => {
                                return <FormControlLabel
                                    key={i}
                                    control={
                                        <Checkbox
                                            checked={this.state[x]}
                                            onChange={this.handleChange(x)}
                                            value={x}
                                            color="primary"
                                        />

                                    }
                                    label={x}
                                />
                            })
                        }
                    </FormGroup>
                </FormControl>
            </Wrapper>
        )
    }
}

export default CheckBoxGroup;