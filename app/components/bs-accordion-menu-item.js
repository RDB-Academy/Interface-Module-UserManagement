import Ember from 'ember';

const BsAccordionMenuItem = Ember.Component.extend({
  classNames: ['panel', 'accordion-menu-item'],

  title: ""
});

BsAccordionMenuItem.reopenClass({
  positionalParams: ['title', 'dataParent', 'hasChildren', 'isActive']
});


export default BsAccordionMenuItem;
