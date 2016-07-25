import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('profile', { path: '/profile/:username'});
  this.route('achievements');
  this.route('leaderboard');
  this.route('aboutus');
  this.route('friends');
  this.route('impressum');
  this.route('settings', function() {
    this.route('index', { path: '/profile'} );
    this.route('account');
    this.route('authentication');
  });
  this.route('pretrainer');
  this.route('404', {path: '/*wildcard'});
  this.route('login');
  this.route('signup');
});

export default Router;
