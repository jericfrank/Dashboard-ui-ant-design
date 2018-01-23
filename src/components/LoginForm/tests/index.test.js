import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Foo from 'components/LoginForm';

describe('<Foo />', () => {
    it('simulates submit event', () => {
        const wrapper = mount((
            <Foo />
        ));

        // wrapper.find('#userName').node.value = 'abc';
        // wrapper.find('#password').node.value = 'abc';
        wrapper.find("#userName").first().getDOMNode().value = "abc";
        wrapper.find("#password").first().getDOMNode().value = "abc";
        
        wrapper.find('#userName').first().simulate('change');
        wrapper.find('#password').first().simulate('change');
        // wrapper.find("#password").first().instance().value = "abc";

        wrapper.find('form').simulate('submit');

        // expect(wrapper.length).to.equal(true);
    });
});
