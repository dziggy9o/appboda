import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { withFirebase } from './Firebase';

const SignOut = ({ firebase }) => (
    <li>
    <button type='button' className="button primary" onClick={firebase.doSignOut}>
        <FontAwesomeIcon icon={faSignOutAlt} />
    </button>
    </li>
)

export default withFirebase(SignOut);