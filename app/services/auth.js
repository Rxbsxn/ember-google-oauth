import Ember from 'ember';

const {
  inject,
  Service
} = Ember;

export default Service.extend({
  session: inject.service(),
  store: inject.service(),
  login() {
    let lockOptions = {
      theme: {
        primaryColor: '#3f51b5'
      },
      languageDictionary: { title: '' }
    };
    this.get('session').authenticate('authenticator:auth0-lock', lockOptions);
  },

  logout() {
    this.get('session').invalidate();
  },
});
