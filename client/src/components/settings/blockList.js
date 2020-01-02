import React from 'react';
import MaterialTable from 'material-table';
import img from '../../image/default.jpg';
const  SimpleAction  = (props)=> {
  const {blockList} = props;
  console.log(blockList);
    return (
      <MaterialTable
        title="Simple Action Preview"
        columns={[
          {
            title: 'Profile Picture',
            field: 'avatar',
            render: rowData => (
              <img
                style={{ height: 36, borderRadius: '50%' }}
                src={img}
              />
            ),
          },
          { title: 'First Name', field: 'firstname' },
          { title: 'Last Name', field: 'lastname' },
        ]}
        data={[{ firstname: 'Mehmet', lastname: 'Baran'},]}        
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          }
        ]}
      />
    )
  
}
export default SimpleAction;