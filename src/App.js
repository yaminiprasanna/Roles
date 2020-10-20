import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RolesData from './components/RolesData'
import render from 'react-dom'
import {Router,Route} from 'react-router'
import FunctionalRole from './components/FunctionalRole'
import DataTable from './components/DataTable'
import Drop from './components/Drop'

function App() {
  return (
    <div className="App">
    <Drop/>
     {/* <RolesData/> */}
    
     {/* <DataTable/> */}
    
    </div>
  );
}

export default App;
