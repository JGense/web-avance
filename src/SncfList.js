import React from 'react';
import PropTypes from 'prop-types';

export default class SncfList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.listOfStation.map((value, index) => {
                    return <li>{value}</li>
                })}
            </ul>
        );
    }
}

SncfList.propTypes = {
    listOfStation: PropTypes.array.isRequired
};

