import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TestComponentHeightFix from '../test/TestComponentHeightFix';
import TestComponentDynamicHeight from '../test/TestComponentDynamicHeight';
import TestComponentTextWithImg from '../test/TestComponentTextWithImg';
import TestComponentImg from '../test/TestComponentImg';

storiesOf('Centered Message Text Only', module)
  .add('Use with Fixed height container', () => (
    <TestComponentHeightFix/>
  ))
  .add('Use with Dynamic height container', () => (
    <TestComponentDynamicHeight/>
  ));

storiesOf('Centered Message With Image', module)
  .add('Use with Image Only', () => (
    <TestComponentImg/>
  ))
  .add('Use with Text and Image', () => (
    <TestComponentTextWithImg/>
  ));


