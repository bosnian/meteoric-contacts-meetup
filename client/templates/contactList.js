Template.contacts.helpers({
  contacts: function () {
    return Contacts.find({},{sort:{'name.first': 1,'name.last': 1}});
  }
});
