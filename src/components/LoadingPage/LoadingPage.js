import React, { Component } from 'react';
import "./LoadingPage.scss";

import Logo from "../../assets/images/common/logo.png";
import FontAwesome from '../FontAwesome/FontAwesome';
class LoadingPage extends Component {
    constructor(props){
        super(props);
        this.progressBarRef = React.createRef();
        this.pageLoadingRef = React.createRef();

        this.progressBar = null;
    }

    componentDidMount = () => {
        let count = 1;
        this.progressBar = setInterval(() => {
            if(count < 101){
            
            this.progressBarRef.current.style.width = count + "%";
            count++
            }
        }, 16);
    }

    componentWillUnmount = () => {
        
        clearInterval(this.progressBar)
    }

    render() {
        return (
            <div className="page-loading" ref={this.pageLoadingRef}>
                <div className="content">
                    <div className="brand-container">
                        <div className="brand">
                            <FontAwesome
                                className="brand__logo"
                                src={Logo}
                                width="50px"
                                height="50px"
                                alt="Hope logo"
                            />
                        </div>
                    </div>
                    <div className="text">
                        <p>Please wait...</p>
                    </div>
                    <div className="progress-bar">
                        <div ref={this.progressBarRef} className="progress"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoadingPage;