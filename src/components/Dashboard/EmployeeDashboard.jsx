import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskNumber data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard