import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function PaginationButton(props) {
    const { classes } = props;
    return (
        <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.value}
        </Button>
    );
}

export default withStyles(styles)(PaginationButton);