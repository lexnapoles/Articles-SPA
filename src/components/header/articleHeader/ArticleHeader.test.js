import React from 'react';
import { shallow } from 'enzyme';
import ArticleHeader from './ArticleHeader';

it('renders without crashing', () => {
  shallow(<ArticleHeader onHome={() => undefined} />);
});
