import React from 'react';
import { shallow } from 'enzyme';
import ArticlesList from './ArticlesList';

it('renders without crashing', () => {
  shallow(<ArticlesList
    articles={[]}
    onClick={() => undefined}
    onDelete={() => undefined}
    onUpdate={() => undefined}
  />);
});

