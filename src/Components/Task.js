import React,{useState} from 'react'
import {connect} from 'react-redux'
import toDo from '../actions/toDo'

const Task = (props) => {
    console.log(props,'task')
    const [taskData,setTaskData] = useState('')
    return (
        <div>
            <input type="text" onChange={(e)=>{setTaskData(e.target.value)}} />
            <button onClick={()=>{props.todo(taskData)}}>ADD TO DO</button>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        todo: (data)=>{dispatch(toDo(data))} 
    }
}

export default connect("",mapDispatchToProps)(Task)
