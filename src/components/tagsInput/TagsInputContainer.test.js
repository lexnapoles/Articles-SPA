import React from 'react';
import { shallow } from 'enzyme';
import TagsInputContainer from './TagsInputContainer';

it('renders without crashing', () => {
  shallow(<TagsInputContainer tags={['']} />);
});

it('uses the tags received by props as state', () => {
  const tags = ['tag1', 'tag2'];

  const input = shallow(<TagsInputContainer tags={tags} />);

  expect(input.state('tags')).toEqual(tags);
});

it('uses the default tags as state if no tags has been received', () => {
  const tags = undefined;

  const input = shallow(<TagsInputContainer tags={tags} />);

  expect(input.state('tags')).toEqual([]);
});

it('keeps the input value in the state', () => {
  const input = shallow(<TagsInputContainer />);

  expect(input.state('value')).toBe('');
});
