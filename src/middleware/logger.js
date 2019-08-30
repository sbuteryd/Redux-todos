const  logger =(store)=>(next)=>(action)=>{
     console.group(action.type)
         const nextValue = next(action)
         console.log("The state",store.getState())
    console.groupEnd()
    return nextValue
}

export default logger