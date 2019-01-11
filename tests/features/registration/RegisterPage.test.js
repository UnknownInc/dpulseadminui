import React from 'react';
import { shallow } from 'enzyme';
import { RegisterPage } from '../../../src/features/registration/RegisterPage';

describe('registration/RegisterPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      registration: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <RegisterPage {...props} />
    );

    expect(
      renderedComponent.find('.registration-register-page').length
    ).toBe(1);
  });
});
