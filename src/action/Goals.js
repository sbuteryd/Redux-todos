const ADD_GOALS ='ADD_GOALS';
const REMOVE_GOALS ='ADD_GOALS';




function AddGoal(goal) {
    return {
        type:ADD_GOALS,
        goal
    }
}

function removeGoal(id) {
    return {
        type: REMOVE_GOALS,
        id
    }
}


