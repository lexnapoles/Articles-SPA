import React from 'react';
import { shallow } from 'enzyme';
import AddArticleFormContainer from './AddArticleFormContainer';

it('renders without crashing', () => {
  shallow(<AddArticleFormContainer />);
});
