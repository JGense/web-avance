import React from 'react';
import PropTypes from 'prop-types';
const md5 = require('js-md5');

export default class UserPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'card'} style={{width: "18rem"}}>
                <img className={"card-img-top"} src={"https://www.gravatar.com/avatar/"+md5(this.props.mail)+"?s=600"}/>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>{this.props.firstname} {this.props.lastname}</h5>
                    <p className={"card-text"}>Une petite description</p>
                </div>
            </div>
        );
    }
}

const isEmail = function(props, propName, componentName) {
    const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;

    if (!regex.test(props[propName])) {
        return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a valid email address.`);
    }
};

UserPanel.propTypes = {
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    mail: isEmail
};

UserPanel.defaultProps = {
    lastname: "Gense",
    firstname: "Jimmy",
    mail: "baptiste.lecocq@gmail.com"
};
