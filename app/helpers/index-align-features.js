import Ember from 'ember';

export function indexAlignFeatures(indexOfFeature) {
  console.log("doingthis, index is " + indexOfFeature);
  return indexOfFeature % 2 === 1;
}

export default Ember.Helper.helper(indexAlignFeatures);
