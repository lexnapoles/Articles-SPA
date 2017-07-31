import React from 'react';
import { shallow } from 'enzyme';
import TagsInput from './TagsInput';

it('renders without crashing', () => {
  shallow(<TagsInput
    tags={['']}
    value=""
    onChange={() => undefined}
    onAdd={() => undefined}
    onDelete={() => undefined}
  />);
});
