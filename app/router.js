import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('profile');
  this.route('achievements');
  this.route('leaderboard');
  this.route('aboutus');
  this.route('friends');
  this.route('impressum');
  this.route('settings');
  this.route('pretrainer');
  this.route('404', {path: '/*wildcard'});
  this.route('login');
  this.route('signup');
});

export default Router;
