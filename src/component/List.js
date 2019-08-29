import React from 'react'

function List(props) {
    return(
        <ul>
            {props.items&&props.items.map((item)=>(
                <li key={item.id}>
                    <span
                        onClick={()=>props.toggleItem(item.id)}
                        style={{textDecoration: item.complete ? 'line-through':'none'}}
                    >
                        {item.name}
                    </span>
                    <button onClick={()=> props.deleteItem(item)}>x</button>
                </li>
            ))}
        </ul>
    )
}

export default List