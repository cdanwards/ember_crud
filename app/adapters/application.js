import DS from 'ember-data';

export default DS.RESTAdapter.extend({

    title: DS.attr('string'),
    body: DS.attr('string')
  }).reopenClass({
    FIXTURES: [
  {
    id: 1,
    title: "Title 1",
    body: "Body 1"
  },
  {
    id: 2,
    title: "Title 2",
    body: "Body 2"
  },
  {
    id: 3,
    title: "Title",
    body: "Body 3"
  }
  ]
});
