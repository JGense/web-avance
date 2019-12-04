import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import UserPanel from './UserPanel';

export function App(props) {
    return React.createElement('p',{style: {color: "blue"}}, 'AppFunction '+props.name);
}

App.propTypes = {
  name: PropTypes.func.isRequired
};

App.defaultProps = {
  name: "Jimmy"
};

export class AppClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement('p',{style: {color: "red"}}, 'AppClass '+this.props.name);
    }
}

function Test() {

    return (
        <>
           <UserPanel/>
        </>
    )
}

ReactDOM.render(<Test/>, document.getElementById('root'));
//ReactDOM.render(React.createElement(UserPanel, {mail: "baptiste.lecocq@gmail.com"}, null), document.getElementById('root'));
