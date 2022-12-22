import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//redux를 위한 코드 
import {createStore} from "redux";
import rootReducer from './store';
import {Provider} from 'react-redux';

const devTool = window.__REDUX_DEVTOOLS_EXTENSTION__ && window.__REDUX_DEVTOOLS_EXTENSTION__(); // 리덕스 대브 툴스 쓰기위해 써넣음. 
const store = createStore(rootReducer, devTool);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
