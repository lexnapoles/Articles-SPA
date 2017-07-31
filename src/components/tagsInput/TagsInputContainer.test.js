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

it('sets the tags state with the tags prop', () => {
  const tags = ['tag1', 'tag2'];
  const tagsInput = getTagsInputContainer({ tags });

  expect(tagsInput.state('tags')).toEqual(tags);
});

it('uses the default tags as state if no tags has been received', () => {
  const tags = undefined;
  const tagsInput = getTagsInputContainer({ tags });

  expect(tagsInput.state('tags')).toEqual([]);
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

  tagsInput.instance().inputHandler(event);

  expect(tagsInput.state('value')).toBe(inputValue);
});

it('saves the new tag', () => {
  const tagsInput = getTagsInputContainer();
  const tag = 'Tag1';

  tagsInput.setState({
    tags: [],
    value: tag,
  });

  tagsInput.instance().onAdd(new MouseEvent('click'));

  expect(tagsInput.state('tags')).toEqual([tag]);
});

it('clears the input when the tag has been added', () => {
  const tagsInput = getTagsInputContainer();

  tagsInput.setState({
    tags: [],
    value: 'Tag1',
  });

  tagsInput.instance().onAdd(new MouseEvent('click'));

  expect(tagsInput.state('value')).toBe('');
});

it('deletes the last tag added when the delete button is clicked', () => {
  const tagsInput = getTagsInputContainer();

  tagsInput.setState({
    tags: ['tag1', 'tag2'],
  });

  tagsInput.instance().onDelete(new MouseEvent('click'));

  expect(tagsInput.state('tags')).toEqual(['tag1']);
});

it('does not add a tag if it already exists', () => {
  const tagsInput = getTagsInputContainer();
  const tags = ['tag1', 'tag2'];

  tagsInput.setState({
    tags,
    value: 'tag1',
  });

  tagsInput.instance().onAdd(new MouseEvent('click'));

  expect(tagsInput.state('tags')).toEqual(tags);
});

it('gives the tags when they change', () => {
  const tags = ['tag1', 'tag2'];
  const receivedTags = [];
  const onChange = data => receivedTags.push(...data);
  const tagsInput = getTagsInputContainer({ onChange });

  tagsInput.setState({
    tags,
  });

  tagsInput.instance().onChange(tags);

  expect(receivedTags).toEqual(tags);
});
