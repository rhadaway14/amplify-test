import './App.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import React  from 'react';
import Main from '../src/pages/main';
Amplify.configure(awsExports)

function App({ signOut, user }) {
  return (
    <div>
      <Main />
    </div>
  );
}

export default withAuthenticator(App);
