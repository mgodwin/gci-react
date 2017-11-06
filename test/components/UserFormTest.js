import React from 'react';
import { shallow } from 'enzyme';
import UserForm from 'components/UserForm.js';

describe('<UserForm />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<UserForm />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "userform-component"', function () {
      expect(component.hasClass('userform-component')).to.equal(true);
    });
  });
});
