import React from 'react';
import {searchSncf} from "./sncf";


export default class SncfInput extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    async onChangeInput(e) {
        let gares = await searchSncf(e.target.value) || [];
        this.props.setGares(gares);
    }

    render() {
        return (
            <form className={"mt-3"}>
                <div className={"input-group mb-3"}>
                    <div className={"input-group-prepend"}>
                        <span className={"input-group-text"}>Recherche</span>
                    </div>
                    <input type={"text"} className={"form-control"} id={"input-search"} onChange={this.onChangeInput}/>
                </div>
            </form>
        );
    }
}

