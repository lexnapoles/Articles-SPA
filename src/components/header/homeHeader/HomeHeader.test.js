import React from 'react';
import { shallow } from 'enzyme';
import HomeHeader from './HomeHeader';

it('renders without crashing', () => {
  shallow(<HomeHeader onAdd={() => undefined} />);
});
