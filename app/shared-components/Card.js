import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { RadioBoxGroup } from 'shared-components';


const StyledCard = styled(Card)`
    margin: 2rem 0;
    padding: 2rem 2rem;
`;

const dictionaryOfKeys = {
    category: 'Category',
    model: 'Model',
    brand: 'Brand',
    weight: 'Weight',
    size: 'Size',
    colors: 'Colors',
    storage: 'Storage',
    os: 'Operating system',
    primaryCamera: 'Camera',
    price: 'Price',
    discount: 'Discount',
    customerID: 'Customer ID',
    productID: 'Product ID',
    amount: 'Amount'
}

const dictionaryOfUnits = {
    category: '',
    model: '',
    brand: '',
    weight: 'g',
    size: 'inches',
    colors: '',
    storage: 'GB',
    os: '',
    primaryCamera: 'MP',
    price: 'EUR',
    discount: '%',
    customerID: '',
    productID: '',
    amount: ''
}

const StyledTypography = styled(Typography)`
    font-family: 'Roboto';
    padding: 0.25rem 0;
    margin: 0 auto;
`;

class SimpleCard extends PureComponent {
    render() {
        const keys = Object.keys(this.props.item);
        if (keys['colors']) {
            keys.splice(keys.indexOf('colors'), 1);
            keys.push('colors');
        }
        return (
            <StyledCard>
                <CardContent>
                    {
                        keys.map((key, i) => {
                            if (key === 'colors') {
                                return (
                                    <RadioBoxGroup
                                        key={i}
                                        data={this.props.item[key]}
                                        label={dictionaryOfKeys[key]}
                                    />
                                )
                            } else if (key !== 'id') {
                                return (
                                    <StyledTypography
                                        key={i}
                                    >
                                        {dictionaryOfKeys[key] + ' - ' + this.props.item[key] + ' ' + dictionaryOfUnits[key]}
                                    </StyledTypography>
                                )
                            }
                        })
                    }
                </CardContent>
            </StyledCard >
        );
    }
}

export default SimpleCard;