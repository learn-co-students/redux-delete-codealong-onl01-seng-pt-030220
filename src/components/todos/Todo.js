import React from 'react'

const Todo = props => (

 <div>   
<div>
{props.todo.text}
</div>

<div>
<button onClick={(e)=>
 props.delete(props.todo.id)
}>Delete</button>
</div>

</div>

)
export default Todo;
