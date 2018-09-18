import React, { PureComponent } from "react";
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const Wrapper = styled.div`
    margin: 1rem;
`;

class SearchField extends PureComponent {
    state = {};

    handleChange = (e) => {
        const value = e.target.value.toString();
        this.setState({
            value: value
        }, () => {
            this.props.onKeyUp(this.state);
        });
    }

    render() {
        return (
            <Wrapper>
                <TextField
                    id="search"
                    label="Search field"
                    type="search"
                    margin="normal"
                    onKeyUp={this.handleChange}
                />
            </Wrapper>
        );
    }
}

export default SearchField;