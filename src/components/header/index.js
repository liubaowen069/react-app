import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="M-header">
                Header + {this.props.param1}
            </div>
        )
    }
}

export default Header
