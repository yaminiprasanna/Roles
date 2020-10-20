import React,{Component} from 'react';
import {BsSearch} from 'react-icons/bs'; 
import {GrAdd} from 'react-icons/gr'; 
import DataTable from './DataTable'
import history from './../history';
import './../App.css'
import { Button } from 'react-bootstrap';
import {  Link} from "react-router-dom";


class Drop extends Component {
  constructor(props){
    super()
  };
  state = {
    departments: [],
    roles:[],
    selectedDepartment:''
   
}
 
 search(){
  
    // fetch(
    //     "http://sg-srv-kas:2021/admin/api/v1/FunctionalRole/GetByDepartmentID?departmentId=1"
    //   )
    //     .then(response => {
    //       // return response.json();
    //       let Rolesres= response.json();
    //       console.log(Rolesres);
    //       // this.setState({roles:response.json()});
    //     })
    fetch('http://sg-srv-kas:2021/admin/api/v1/FunctionalRole/GetByDepartmentID?departmentId=1')
  .then(response => response.json())
  .then(data => { 
    //this.setState({roles:data});
    console.log(data)});
 }

handleChange(e){
  this.setState(e.target.value)
}

  
  componentDidMount() {
    console.log('mount')
    fetch(
      "http://sg-srv-kas:2021/admin/api/v1/Department/GetAll"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let departmentsFromApi = data.map(department => {
          return { value:department.Description , display: department.Description };
        });
        this.setState({
         departments: [
            {
              value: "IT Service",
              display:
                "IT Service "
            }
          ].concat(departmentsFromApi)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

 

  render() {
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
        
        <select  className='select2' handleChange={this.handleChange}
       
          
          onChange={e =>
            this.setState({
              selectedDepartment: e.target.value,
            
              
            })
          }
          value={this.state.selectedDepartment}
        >

          {this.state.departments.map(department => (
            <option className='intro'
               key={department.value}
              value={department.value}
            >
              {department.display}
             
            </option>
          ))}
           
        </select>
        <Button  variant='primary' type="button"  style={{margin:'7px',
               backgroundColor:'rgb(34, 150, 196)',color:'white'}}
             onClick={this.search()}><BsSearch/>Search  </Button>
         {/* <button type="button" style={{backgroundColor:'rgb(34,150,196)',
                              color:'white'}} 
                              onClick={() => history.push('/FunctionalRole')}><GrAdd/>Add</button> */}
           <Button variant='primary'  style={{backgroundColor:'rgb(34,150,196)',
                              color:'white'}} > <Link to="/FunctionalRole" style={{color:'white'}}><GrAdd/>Add</Link></Button>
      </div>
      <div><br></br></div>
        <DataTable roles={this.state.roles}/>
      </div>
    );
  }
}
export default Drop