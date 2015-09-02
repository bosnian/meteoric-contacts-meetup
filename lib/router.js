Router.configure({
  layoutTemplate: 'layout',
  progress: true
});

Router.map(function() {
  this.route('/contacts',{
    path: '/'
  })

  this.route('/contact',{
    path: '/contact/:_id'
  })
});
