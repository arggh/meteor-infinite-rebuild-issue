import { Template } from 'meteor/templating';

import './main.html';
import { multiply } from 'utils/math';


Template.body.helpers({
  multiply
});