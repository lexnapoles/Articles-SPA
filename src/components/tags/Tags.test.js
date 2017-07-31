import React from 'react';
import { shallow } from 'enzyme';
import Tags from './Tags';

it('renders without crashing', () => {
  shallow(<Tags tags={['']} />);
});
