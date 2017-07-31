import React from 'react';
import { shallow } from 'enzyme';
import BaseInput from './BaseInput';

it('renders without crashing', () => {
  shallow(<BaseInput >Children</BaseInput >);
});
