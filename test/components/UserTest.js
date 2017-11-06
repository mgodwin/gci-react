import React from 'react';
import { shallow } from 'enzyme';
import User from 'components/User.js';

describe('<User />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<User />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "user-component"', function () {
      expect(component.hasClass('user-component')).to.equal(true);
    });
  });
});
