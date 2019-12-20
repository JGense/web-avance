import React from 'react';
import SncfList from "./SncfList";
import SncfInput from "./SncfInput";


export default class SncfSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listOfStation: []
        };
        this.setGares = this.setGares.bind(this);
    }

    async setGares(gares) {
        this.setState({listOfStation: gares});
    }

    render() {
        return (
            <form className={"mt-3"}>
                <SncfInput setGares={this.setGares}/>
                <SncfList listOfStation={this.state.listOfStation}/>
            </form>
        );
    }
}

