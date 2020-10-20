import React, { useEffect,useState } from 'react'
// import axios from 'axios'
import paginationFactory from 'react-bootstrap-table2-paginator';
// import * as ReactbootStrap from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'; 
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import {AiFillEdit} from 'react-icons/ai'; 




function DataTable(props){
    const[roles,setRoles]=useState(props.roles);
    const [hasError, setErrors] = useState(false);
    const { SearchBar } = Search;
    
    
    console.log(props.roles);
    
    // async function fetchData(){
    //     const res=await fetch('http://sg-srv-kas:2021/admin/api/v1/FunctionalRole/GetByDepartmentID?departmentId=1 ');
    //     //  console.log(res.json());
    //     res.json()
    //     .then(res=> {console.log(res);setRoles(res)})
    //     .catch(err=>setErrors(err));    
          
   
    // }

    
    
    
    const editButton = (cell, row, rowIndex, formatExtraData) => {
       
      return (
        // <Button
        //   onClick={() => {
        //     this.onFollowChanged(row);
        //   }}    
        // >

        //   Follow
        // </Button>
       
        <div className="icons">
        <button className='btn-edit'>
         
        <AiFillEdit/></button></div>
      );
    };
  
    
    const columns=[
        {
            dataField:'SGRoleName',
            text:'RoleName',
            sort:true
             
        },
        {
            dataField:'Role Description',
            text:'Role Description',
            sort:true
                            
        },
       
        {
            dataField:'Edit',
            text:'Edit',
            formatter:editButton

        }
    ];

   
    const options = {  
        page: 2,   
        sizePerPageList: [ {  
          text: '5', value: 5  
        }, {  
          text: '10', value: 10  
        }, 
         {
            text: 'All',value:roles.length
         }
        ],   
        sizePerPage: 5,   
        pageStartIndex: 0,   
        paginationSize: 3,    
        prePage: 'Prev',   
        nextPage: 'Next',   
        firstPage: 'First',   
        lastPage: 'Last',   
        paginationPosition: 'bottom'    
      };  
      
//         useEffect(() =>{
//           fetchData();
// },[]);

  


    return(    
        <div>
     
      <div className="container" > 
         
       <div  style={{ marginTop: 5 }}>  

 <ToolkitProvider
        keyField="SGRoleID"
        data={roles}
        columns={columns}
        search
      >
        {(props) => (
          <div>
            <SearchBar
              {...props.searchProps}
              style={{ width: "250px", float: "right",marginRight:'-280%'}}
            />
  <br/>

                    <BootstrapTable
                    //  striped  
                    //     hover 
                        keyField="SGRoleID"
                        data={roles}
                        columns={columns}
                         pagination={paginationFactory(options)}
                        filter={filterFactory() }                 
                        >
                     </BootstrapTable> 
                
        {/* </div>
        </div> */}
       
        </div>
        )}
      </ToolkitProvider>
      </div>
      </div>
      </div>
    )
}

export default DataTable