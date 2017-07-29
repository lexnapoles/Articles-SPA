import React from 'react';
import { shallow } from 'enzyme';
import Article from './Article';

it('renders without crashing', () => {
  shallow(<Article onUpdate={() => undefined} />);
});
