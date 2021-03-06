import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import Helmet from "react-helmet";

@inject('app')
@observer
export default class Root extends Component {
    render() {
        return (
            <Helmet>
                <meta charSet="utf-8"/>
                {/* We can't use .title here because this can be computed value, which is not parsed on server */}
                <title>{`${this.props.app.appName} - ${this.props.app.pageName}`}</title>
            </Helmet>
        );
    }
}            
