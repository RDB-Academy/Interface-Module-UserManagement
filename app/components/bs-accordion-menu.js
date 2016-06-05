import Ember from 'ember';

const BsAccordionMenu = Ember.Component.extend({
  tagName: 'div',
  classNames: ['panel-group'],
  attributeBindings: ['role', 'ariaMultiselectable'],

  role: "tablist",
  ariaMultiselectable: "true"

});

BsAccordionMenu.reopenClass({
  positionalParams: ['elementId']
});

export default BsAccordionMenu;
