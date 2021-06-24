import React, { Component } from 'react';

import Logo from "../../assets/images/common/logo.png";

class PageNetworkError extends Component {
    render() {
        return (
            <div className="page-network-error">
                <div className="container">
                    <div className="pne-header">
                        <div className="pne-header__logo">
                            <img src={Logo} />
                        </div>
                    </div>
                    <div className="pne-body">
                        <div className="pne-body__title">
                            <h1>Oops!</h1>
                        </div>
                        <div className="pne-body__description">
                            <p>No internet connection or server isn't responding.</p>
                            <p>Please check your internet or try again later.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageNetworkError;