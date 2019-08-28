import React from 'react'


function List(props) {
    const {remove,items,toggle}= props
    return(
        <ul>
            {items.map((item)=>(
                <li key={item.id}>
                    <span onClick={()=>
                        toggle&&toggle(item.id)}
                          style={{textDecoration: item.component ? 'line-through':'none'}}>
                        {item.name}
                    </span>
                    <button onClick={()=>remove(item)}>x</button>
                </li>
            ))}
        </ul>
    )
}

export default List