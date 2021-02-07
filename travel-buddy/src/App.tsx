import React, { Suspense } from 'react';
import './App.css';
import { FirebaseAppProvider } from "reactfire";
import { SignIn } from './components/Auth/SignIn/SignIn';
import firebaseConfig from './firebase';

const App: React.FC = () => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<h3>Loading...</h3>}>
        <SignIn />
      </Suspense>
    </FirebaseAppProvider>
  );
}

export default App;
