const RECEIVE_DATA =  'RECEIVE_DATA';


export function receiveData(todos,goals) {
    return {
        type:RECEIVE_DATA,
        todos,
        goals
    }
}

