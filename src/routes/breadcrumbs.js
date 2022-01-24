import Breadcrumb from '../models/navigation/Breadcrumb';

export default {
  home: [new Breadcrumb('Home', true, '/')],
  tags: [
    new Breadcrumb('Home', false, '/'),
    new Breadcrumb('Tags', true, '/tags'),
  ],
  popups: [
    new Breadcrumb('Home', false, '/'),
    new Breadcrumb('Pop-Ups', true, '/pop-ups'),
  ],
};
