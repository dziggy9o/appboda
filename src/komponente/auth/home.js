import React from 'react';

import {withAuthorization} from './sesija';

const Home = () => (
    <div>
        <h1>Home page</h1>
        <p>Vidi se</p>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);