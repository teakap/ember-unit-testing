export default function(server) {
  server.createList('user', 10);
  server.createList('todo', 10);
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
}
