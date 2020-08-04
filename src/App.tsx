import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { persistor, store } from './store/store';
import { history } from './store/middleware';
import Counter from './components/Counter';

export default function App() {
  return (
    /* Provide Redux store */
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
        <> { /* your usual react-router v4/v5 routing */ }
          <Switch>
            <Route exact path="/" render={() => (<div>Hello World<br /><Counter /></div>)} />
            <Route render={() => (<div>Miss</div>)} />
          </Switch>
        </>
      </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}