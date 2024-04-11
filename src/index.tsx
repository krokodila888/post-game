import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './components/App/App';
import thunk from 'redux-thunk';
import { rootReducer } from './services/reducers/rootReducer';
import { compose, createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLFormElement);
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
