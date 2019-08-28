import React from 'react'


function List(props) {
    const {deleteList,toggleTodoList}= props
    return(
        <ul>
            {props.items.map((item)=>(
                <li key={item.id}>
                    <span onClick={()=>
                        toggleTodoList&&toggleTodoList(item.id)}
                          style={{textDecoration: item.component ? 'line-through':'none'}}>
                        {item.name}
                    </span>
                    <button onClick={()=>deleteList(item)}>x</button>
                </li>
            ))}
        </ul>
    )
}

export default List