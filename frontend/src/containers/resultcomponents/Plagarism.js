import React from "react";
import { connect } from "react-redux";

class Plagarism extends React.Component {

    render() {
        return (
            <div>
                <div style={{ height: 30 }}></div>
                <div>
                    <div style={{ height: 30 }}></div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.user.data,
        error: state.user.reserror
    };
};

export default connect(
    mapStateToProps, null
)(Plagarism);