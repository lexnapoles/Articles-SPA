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

it('updates the value of the input when it changes', () => {
  const inputContainer = shallow(<TagsInputContainer />);
  const inputValue = 'a value';

  const event = {
    target: {
      value: inputValue,
    },
  };

  inputContainer.instance().onChange(event);

  expect(inputContainer.state('value')).toBe(inputValue);
});

it('adds the user tag to the tags', () => {
  const inputContainer = shallow(<TagsInputContainer />);
  const tag = 'Tag1';

  inputContainer.setState({
    tags: [],
    value: tag,
  });

  inputContainer.instance().onAdd(new MouseEvent('click'));

  expect(inputContainer.state('tags')).toEqual([tag]);
});

it('clears the input when the tag has been add', () => {
  const inputContainer = shallow(<TagsInputContainer />);

  inputContainer.setState({
    tags: [],
    value: 'Tag1',
  });

  inputContainer.instance().onAdd(new MouseEvent('click'));

  expect(inputContainer.state('value')).toBe('');
});
