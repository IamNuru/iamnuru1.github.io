import React  from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

setTimeout(() => {
  
  ReactDOM.render(
    <React.StrictMode>
      <App 
        hideLoader={hideLoader}
        showLoader={showLoader}
        />
    </React.StrictMode>,
    document.getElementById('root')
  );

}, 2000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

