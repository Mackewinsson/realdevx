import { onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import Home from './components/Pages/Home';
import Planes from './components/Pages/Planes';
import Courses from './components/Pages/Courses';
import { auth } from './firebase/FirebaseConfig';
import PageLayout from './components/common/PageLayout';
import { useDispatch } from 'react-redux';
import * as authActions from './store/actions/authActions';

const App = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });
    return () => unsubscribe();
  });

  return (
    <PageLayout>
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/planes">
          <Planes />
        </Route>
        <Route path="/cursos/detalle-curso">
          <Courses />
        </Route>
      </Switch>
    </PageLayout>
  );
};

export default App;
