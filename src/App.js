import React from 'react';
import 'sanitize.css';
import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles/custom.scss';
import Counter from './components/Counter';

export default function App(){
  return (
    <div className="section vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex flex-column">
        <h3>React Sass Boilerplate with Normailze, Bootstrap, Rocksalt Font</h3>
        {/* <img src={require('./assets/images/demo.jpg')} alt="demo" width={300} height={200} /> */}
        <Counter />
      </div>
    </div>
  );
}