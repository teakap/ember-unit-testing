import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    description() {
        return faker.lorem.sentences();
    },

    title() {
        return faker.lorem.sentence();
    }
});
