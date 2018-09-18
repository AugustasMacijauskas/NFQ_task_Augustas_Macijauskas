import React from 'react';
import PaginationButton from './PaginationButton'

function Pagination(props) {
    return (
        <div>
            <PaginationButton value={'First'} disabled={props.current === 1} onClick={() => props.onChange(1)} />
            <PaginationButton value={'<'} disabled={props.current === 1} onClick={() => props.onChange(props.current - 1)} />
            <PaginationButton value={props.current} />
            <PaginationButton value={'>'} disabled={props.current === props.last} onClick={() => props.onChange(props.current + 1)} />
            <PaginationButton value={'Last'} disabled={props.current === props.last} onClick={() => props.onChange(props.last)} />
        </div>
    );
}


export default Pagination;