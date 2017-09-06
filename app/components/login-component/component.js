import Ember from 'ember';

const {
  inject,
  Component,
  computed
} = Ember;

export default Component.extend({
  auth: inject.service(),
  session: inject.service(),
  profileName: computed.alias('session.data.authenticated.profile.name'),
  profilePict: computed.alias('session.data.authenticated.profile.picture'),

  actions: {
    login() {
      this.get('auth').login();
    },

    logout() {
      this.get('auth').logout();
    }
  }
});
