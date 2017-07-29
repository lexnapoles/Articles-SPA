import React from 'react';
import { shallow } from 'enzyme';
import ArticleContainer from './ArticleContainer';

it('renders without crashing', () => {
  shallow(<ArticleContainer id={'id'} loadArticle={() => undefined} onUpdate={() => undefined} />);
});
