AutoForm.hooks({
  'contacts-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
      Router.go('contact', {_id: result});
    }
}});
