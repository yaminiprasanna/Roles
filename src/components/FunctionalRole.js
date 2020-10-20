import React, { Component } from "react";
import history from './../history';
import {VscArrowSmallLeft} from 'react-icons/vsc';
import { render } from "react-dom";
import {AiOutlineSave} from 'react-icons/ai';
import {MdClear} from 'react-icons/md';
import { Button } from 'react-bootstrap';
import {

  Link
} from "react-router-dom";
class FunctionalRole extends Component{
  
    constructor(props){
        super()
      };
      state = {
        roles: [],
        selectedRole:'',
        departments:[],
        selectedDepartment:'',
       keyfunctionError: "",
       departmentError:'',
       prefixes:[],
       suffixes:[],
       selectedPrefix:'',
       selectedSuffix:''
       
    }
    validate=()=>{
        let keyfunctionError=""
        if(this.state.selectedRole === ""){
           keyfunctionError='select keyFunction'
        }
        if(keyfunctionError){
          this.setState({keyfunctionError})
          return false;
        }
         return true;
      }
      
      validate1=()=>{
        let departmentError=""
        if(this.state.selectedDepartment === ""){
            departmentError ='select Department'
        }
        if( departmentError){
          this.setState({departmentError})
          return false;
        }
         return true;
      }
      

    componentDidMount() 
    {
        fetch(
          "http://sg-srv-kas:2021/admin/api/v1/FunctionalRole/GetByDepartmentID?departmentId=1 ")
          .then(response => {
            console.log(response);
             return response.json();
          })
          .then(data => {
            let rolesFromApi = data.map(role => {
              return { value:role.SGRole.SGRoleName, display:role.SGRole.SGRoleName };
            });
            this.setState({
             roles: [
                {
                  value: "select a role",
                  display:
                    "select a role "
                }
              ].concat(rolesFromApi)
            });
          })
          .catch(error => {
            console.log(error);
          });
 
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
                    value: "select a department",
                    display:
                      " select a department"
                  }
                ].concat(departmentsFromApi)
              });
            })
            .catch(error => {
              console.log(error);
            });
         
            fetch(
              "http://sg-srv-kas:2021/admin/api/v1/FunctionalRole/GetByDepartmentID?departmentId=1 ")
              .then(response => {
                console.log(response);
                 return response.json();
              })
              .then(data => {
                let prefixesFromApi = data.map(prefix => {
                  return { value:prefix.SGRolePrefix.PrefixName, display:prefix.SGRolePrefix.PrefixName };
                });
                this.setState({
                 prefixes: [
                    {
                      value: "select prefix",
                      display:
                        "select prefix "
                    }
                  ].concat(prefixesFromApi)
                });
              })
              .catch(error => {
                console.log(error);
              });
     
              fetch(
                "http://sg-srv-kas:2021/admin/api/v1/FunctionalRole/GetByDepartmentID?departmentId=1 ")
                .then(response => {
                  console.log(response);
                   return response.json();
                })
                .then(data => {
                  let suffixFromApi = data.map(suffix => {
                    return { value:suffix.SGRoleSuffix.SuffixName, display:suffix.SGRoleSuffix.SuffixName };
                  });
                  this.setState({
                   suffixes: [
                      {
                        value: "select a suffix",
                        display:
                          "select a suffix "
                      }
                    ].concat(suffixFromApi)
                  });
                })
                .catch(error => {
                  console.log(error);
                });
       
        

      }
    handleSubmit=e=>{
      e.preventDefault();

      let inputData=JSON.stringify({Id:null,DepartmentCode:this.state.selectedDepartment,
        SGRoleName:this.state.selectedRole});
      fetch('http://sg-srv-kas:2021/admin/api/v1/FunctionalRole/Create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          
        },
        
        body:inputData
      }).then(function(response) {
        console.log(response.json());
       
        // return response.json();
      });
        
       
     
        
     

        const isValid=this.validate();
        const isValid1=this.validate1(); 
    
        if(isValid&& isValid1){
          console.log(this.state) 
          console.log(this.state)
        }
        
      }
    
    clearForm=()=>{
        this.validate('');
        this.validate1('');
        this.selectedRole='';
        this.selectedDepartment=''

    }
    

    render(){
    return(
       <div className="form">
       <div className="Title1">
    <header>
        <h3>Add Functional Role
       <button className='arrow' ><Link to="/"><VscArrowSmallLeft/></Link> 
       </button>
       
        </h3>
       
        </header>
       </div>
      <div><br></br></div>
      <div className="form-row">
      <div className="col-lg-1">
      <label>Department<span className="required">*</span>
      
      </label>
      </div>
      <div className="col-lg-4">
      <select type="select" className='select1'onChange={this.props.handleChange}
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
      {this.state.departmentError? (<div style={{fontSize:'10',color:'red'}}>{this.state.departmentError}</div>):null}
    </div>
    <div class="col-lg-1">
                    <label for="PrefixID" class="label">Seniority</label>
                </div>
                <div className="col-lg-4 ">
                 <select className='select1'
                  onChange={e =>
                    this.setState({
                      selectedPrefix: e.target.value,
                    
                      
                    })
                  }
                  value={this.state.selectedPrefix}
                  >
                    {this.state.prefixes.map(prefix => (
                 <option className='intro'
               key={prefix.value}
              value={prefix.value}
            >
              {prefix.display}
              </option>
               ))}

                 </select>
                </div>
           
    </div>
    <div><br></br></div>

    <div className="form-row">
    <div class="col-lg-1" >
     <label for="PrefixID" class="label">speciality</label>
    </div>
                <div class="col-lg-4 ui-fluid">
                   <select  type="select"className='select1' placeholder='select speciality'
                   onChange={e =>
                    this.setState({
                      selectedSuffix: e.target.value,
                    
                      
                    })
                  }
                  value={this.state.selectedSuffix}
                  >
                    {this.state.suffixes.map(suffix => (
                 <option className='intro'
               key={suffix.value}
              value={suffix.value}
            >
              {suffix.display}
              </option>
               ))}

                 </select>
                   
                </div>
            
            <div class="col-lg-1">
                    <label for="SGRoleID" class="label">Key Function
                        <span className='required'>*</span>
                    </label>
                    </div>
                    <div className='col-lg-4 ui-fluid'>
                    <select className='select1'placeholder="select a role"
                      onChange={e =>
                        this.setState({
                          selectedRole: e.target.value,
                        
                          
                        })
                      }
                      value={this.state.selectedRole}
                      >
                       {this.state.roles.map(role => (
                      <option className='intro'
               key={role.value}
              value={role.value}
            >
              {role.display}
             
            </option>
               ))}
                   
                    </select>
                    {this.state.keyfunctionError? (<div style={{fontSize:'10',color:'red'}}>{this.state.keyfunctionError}</div>):null}
                </div>
                </div>

  <div><br></br></div>

                 <div class="form-group row">
                <div class="col-lg-2">
                    <label className="label" for="RoleDescription">Role Description</label>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-1"></div>
                <div class="col-lg-11">
                    <textarea rows="4"  className="RoleDescription"></textarea>
                </div>
            </div>
            <div><br></br></div>
            <div class="form-group row">
                <div class="col-lg-6">
                    <label class="Ed" for="EducationQualification">
                    EducationQualification & Certification
                    </label>
                    <input type="text" className='input1'></input>
                </div>
                <div class="col-lg-6">
                    <label>Key Responsibilities</label>
                    <input type="text" className='input1'></input>
                </div>
            </div>

        <div  className='btn-grp'> 
         <Button primary='variant'type="button" style={{margin:'7px',
                backgroundColor:'rgb(51, 168, 214)',
                color:'white'}}  onClick={this.handleSubmit}><AiOutlineSave/>save</Button>
         <Button variant="outline-dark" type="button" className="clear2" onClick={this.clearForm} ><MdClear/>Clear</Button>
         </div>



      </div>
       
           
    );
}
}

  export default FunctionalRole