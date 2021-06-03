import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import {useStateValue} from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h2
                  style={{
                    color: 'black',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Welcom Boys
                </h2>
              </Route>
            </Switch>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
