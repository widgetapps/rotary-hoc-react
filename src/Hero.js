import React, { Component } from 'react';

class Hero extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="hero" id="highlighted">
                {this.props.children}
            </div>
        );
    }
}

export default Hero;
