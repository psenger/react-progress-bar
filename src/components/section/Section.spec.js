import { shallow } from 'enzyme';
import React from 'react';
import Section from './Section';

describe('COMPONENT:', () => {
  describe('Section', () => {
    it('should work with complex children', () => {
      const component = shallow(
        <Section title="A" level={1}>
          <div>
            <div>x</div>
          </div>
        </Section>
      );
      expect(component.find('div').length).toEqual(2);
    });
    describe('h1', () => {
      const component = shallow(
        <Section title="A" level={1}>B</Section>
      );
      it('should contain an h1', () => {
        expect(component.find('h1').length).toEqual(1);
      });
      it('should contain a section', () => {
        expect(component.find('section').length).toEqual(1);
      });
      it('should should have a title and some body text in it.', () => {
        expect(component.text()).toEqual('AB');
      });
    });
    describe('h2', () => {
      const component = shallow(
        <Section title="A" level={2}>B</Section>
      );
      it('should contain an h2', () => {
        expect(component.find('h2').length).toEqual(1);
      });
      it('should contain a section', () => {
        expect(component.find('section').length).toEqual(1);
      });
      it('should should have a title and some body text in it.', () => {
        expect(component.text()).toEqual('AB');
      });
    });
  });
});
