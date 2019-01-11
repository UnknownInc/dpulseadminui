// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  RegisterPage,
} from './';

export default {
  path: 'registration',
  name: 'Registration',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: '/register', name: 'Register page', component: RegisterPage },
  ],
};
