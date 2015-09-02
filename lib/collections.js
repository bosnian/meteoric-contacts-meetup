Contacts = new Mongo.Collection('contacts');

Contacts.attachSchema(new SimpleSchema({
  name: {
    type: Object
  },
  'name.first': {
    type: String,
    label: 'First Name',
    autoform: {
      'label-type': 'floating',
      placeholder: 'First Name'
    },
    max: 200
  },
  'name.last': {
    type: String,
    label: 'Last Name',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Last Name'
    },
    max: 200
  },
  data: {
    type: Object
  },
  'data.email': {
    type: String,
    label: 'Email',
    regEx: SimpleSchema.RegEx.Email,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Email'
    },
    max: 200
  },
  'data.phone': {
    type: String,
    label: 'Phone',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Phone'
    },
    max: 200
  },
  'data.active': {
    type: Boolean,
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  }
}));
