import React from 'react';

import { PasswordForgetForm } from './passforgetpage';
import PasswordChangeForm from './pwchange';
import { withAuthorization, AuthUserContext }  from './sesija';

const Nalog = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Nalog: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
     </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Nalog);