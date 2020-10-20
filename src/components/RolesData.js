import React,{Component,useEffect,useState} from 'react';
import {BsSearch} from 'react-icons/bs'; 
import {GrAdd} from 'react-icons/gr'; 
import DataTable from './DataTable'
// import history from './history'
import { useHistory } from 'react-router-dom';
function RolesData(){
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState([
      { label: " ", value: "" }
    ]);
    const [value, setValue] = React.useState("IT Service");
    const history = useHistory();
    React.useEffect(() => {
        async function getDepartment() {
          const response = await fetch("http://sg-srv-kas:2021/admin/api/v1/Department/GetAll");
          const body = await response.json();
          console.log(body)
          setItems(body.map(({ department }) => ({ label: department.Description, value:department. Description })));
          setLoading(false);
        }
         getDepartment();
         
      }, []);
     
    
        const openFunctionalRole= () => {
          history.push('/FunctionalRole'); 
      }
    
      
      return (
        <div>
       <div className="Title1">
        <header >
        <h3>Roles Data</h3>
        </header>
        </div>

        <div className="Title2">
        <header>
            </header>
            </div>
       <div className= 'select'>
       <label>Department:<span className='required'>*</span></label>
       <select className='select2'
            value={value}
           onChange={e => setValue(e.currentTarget.value)}>

        {items.map(({ label, value }) => (
       <option key={value} value={value}>
      {label}
    </option>
  ))}
       </select>
         <button type="button" style={{margin:'7px',
               backgroundColor:'rgb(34, 150, 196)',color:'white'}}
                 ><BsSearch/>Search  </button>
         <button type="button" style={{backgroundColor:'rgb(34,150,196)',
                              color:'white'}} 
                              onClick={openFunctionalRole}><GrAdd/>Add</button>
           </div>
        <div><br></br></div>
        <DataTable/>

           </div>

      );
    
}
export default RolesData