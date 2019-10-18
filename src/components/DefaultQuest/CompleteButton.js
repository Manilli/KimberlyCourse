import React from 'react';

class CompleteButton extends React.Component {

    buttonClick() {
        this.props.completeActivity();
    }

    render() {
        return (
        <div>
            <button className="btn btn-custom" onClick={this.buttonClick.bind(this)}>Complete</button>
        </div>);
    };
};

export default CompleteButton;
