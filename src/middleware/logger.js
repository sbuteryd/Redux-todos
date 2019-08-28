const logger = (store)=>(next)=>(action)=>{
    console.group(action.type)
        const value = next(action)
        console.log('action',action)
        console.log('The state is ',store.getState())
    console.groupEnd()
    return value
}

export default logger