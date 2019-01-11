import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/registration/DefaultPage';

describe('registration/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      registration: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.registration-default-page').length
    ).toBe(1);
  });
});
