/**
 * Created by Supasit on 12/2/16.
 */
import React from 'react';
import CenteredMessage from '../CenteredMessage';
export default class TestComponentHeightFix extends React.Component {
  render() {
    const style = {
      height: '400px',
      width: '100%',
      border: '1px solid black'
    };
    return (
      <div style={style}>
        <CenteredMessage>
          Hello world
        </CenteredMessage>
      </div>
    )
  }
}