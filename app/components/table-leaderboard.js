import Ember from 'ember';

const TableLeaderboard = Ember.Component.extend({});

TableLeaderboard.reopenClass({
  positionalParams: [ 'position', 'username', 'points', 'image']
});

export default TableLeaderboard;
