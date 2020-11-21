import React from 'react'; 
import {connect} from 'react-redux'


const TaskList = (props) => {
    return (
        <div>
            {
                props.todo.map(item=>{
                    return(
                        <div>
                        <p>to do: {item.desc}</p>

                        </div>
                    )
                })
            }
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        todo: state.todo
    }

}

export default connect(mapStateToProps)(TaskList)
