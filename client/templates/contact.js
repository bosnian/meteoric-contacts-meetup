Template.contact.helpers({
  contact: function () {
    return Contacts.findOne({_id: Router.current().params._id});
  },
  activeLabel: function () {
    if (this.data.active) {
      return '<i class="ion-checkmark-circled"></i> Active';
    } else {
      return '<i class="ion-minus-circled"></i> Inactive';
    }
  }
});
