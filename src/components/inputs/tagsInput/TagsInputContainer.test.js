import React from 'react';
import { shallow } from 'enzyme';
import TagsInputContainer from './TagsInputContainer';

const defaultState = {
  onchange: () => undefined,
};

const getTagsInputContainer = ({ tags, onChange = () => undefined } = defaultState) =>
  shallow(<TagsInputContainer tags={tags} onChange={onChange} />);

it('renders without crashing', () => {
  shallow(<TagsInputContainer onChange={() => undefined} />);
});

it('keeps the input value in the state', () => {
  const tagsInput = getTagsInputContainer();

  expect(tagsInput.state('value')).toBe('');
});

it('updates the value of the input when it changes', () => {
  const tagsInput = getTagsInputContainer();
  const inputValue = 'a value';

  const event = {
    target: {
      value: inputValue,
    },
  };

  tagsInput.instance().onValueChange(event);

  expect(tagsInput.state('value')).toBe(inputValue);
});

it('passes the tags to the parent when they change', () => {
  let receivedTags;

  const onChange = tags => { receivedTags = tags; };
  const tags = ['tag1', 'tag2'];
  const tagsInput = getTagsInputContainer({ tags, onChange });

  tagsInput.instance().onChange(tags);

  expect(receivedTags).toEqual(tags);
});

it('passes the new tag when one is added', () => {
  let receivedTags = '';

  const onChange = tags => { receivedTags = tags; };
  const tagsInput = getTagsInputContainer({ onChange });
  const tag = 'Tag1';

  tagsInput.setState({
    value: tag,
  });

  tagsInput.instance().onAdd(new MouseEvent('click'));

  expect(receivedTags).toEqual([tag]);
});

it('clears the input when the tag has been added', () => {
  const tagsInput = getTagsInputContainer();

  tagsInput.setState({
    value: 'Tag1',
  });

  tagsInput.instance().onAdd(new MouseEvent('click'));

  expect(tagsInput.state('value')).toBe('');
});

it('passes the new tags with the last tag deleted when the delete button is clicked', () => {
  let receivedTags = '';

  const onChange = tags => { receivedTags = tags; };

  const tagsInput = getTagsInputContainer({
    tags: ['tag1', 'tag2'],
    onChange,
  });

  tagsInput.instance().onDelete(new MouseEvent('click'));

  expect(receivedTags).toEqual(['tag1']);
});

it('does not pass a tag if it already exists', () => {
  let receivedTags;

  const onChange = tags => { receivedTags = tags; };

  const tags = ['tag1', 'tag2'];
  const tagsInput = getTagsInputContainer({ tags, onChange });

  tagsInput.setState({
    value: 'tag1',
  });

  tagsInput.instance().onAdd(new MouseEvent('click'));

  expect(receivedTags).toEqual(undefined);
});

it('does not pass empty tags', () => {
  let receivedTags;

  const onChange = tags => { receivedTags = tags; };

  const tagsInput = getTagsInputContainer({ onChange });

  tagsInput.setState({
    value: '',
  });

  tagsInput.instance().onAdd(new MouseEvent('click'));

  expect(receivedTags).toEqual(undefined);
});
