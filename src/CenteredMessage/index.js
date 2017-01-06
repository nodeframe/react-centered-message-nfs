import React from 'react'
import './centeredMessage.css';

export default class CenteredMessage extends React.Component {
  render() {
    return(
      <div className="centeredMessageWrap">
        <div className="centeredMessageContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}