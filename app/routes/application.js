import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';

import RSVP from 'rsvp';

export default Route.extend({
  ajax: service(),
    model() {
    return RSVP.hash({
      users: this.get('ajax').request('/api/users'),
      todos: this.get('ajax').request('/api/todos')
    });
    }
});
