import Ember from 'ember';
import PouchDbMixin from 'hospitalrun/mixins/pouchdb';

export default Ember.Mixin.create(PouchDbMixin, {
  getPatientInvoices: function(patient) {
    var patientId = patient.get('id');
    return this.store.query('invoice', {
      options: {
        key: patientId
      },
      mapReduce: 'invoice_by_patient'
    });
  }
});
