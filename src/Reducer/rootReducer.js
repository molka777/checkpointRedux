const rootReducer =(state={todo:[{
    id:1,desc: 'going to school', done: true
},{id:2, desc:'eat launch', done: false}]}, action) =>{

    if(action.type=='ADD_TO_DO'){
       return state= {
           todo: [...state.todo,{id:5, desc: action.payload, done: false}]

        }
    }
    else  return state




    }




export default rootReducer