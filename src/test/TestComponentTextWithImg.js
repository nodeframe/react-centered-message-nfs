/**
 * Created by Supasit on 12/2/16.
 */
import React from 'react';
import CenteredMessage from '../CenteredMessage';
export default class TestComponentTextWithImg extends React.Component {
  render() {
    const style = {
      height: '70vh',
      width: '100%',
      border: '1px solid black'
    };
    const imgStyle = {
      width: '50px'
    };
    return (
      <div style={style}>
        <CenteredMessage>
          <img src={require("../img/rolling.svg")} alt="" style={imgStyle} />
          <br/>
          Hello world
        </CenteredMessage>
      </div>
    )
  }
}