import Ember from 'ember';

const BsAccordionMenuItem = Ember.Component.extend({
  classNames: ['panel', 'panel-default'],

  title: ""
});

BsAccordionMenuItem.reopenClass({
  positionalParams: ['title']
});


export default BsAccordionMenuItem;
