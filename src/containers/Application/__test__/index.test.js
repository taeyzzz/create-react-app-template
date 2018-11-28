import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon'

import Application from '../index';

describe('Application', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Application />
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
