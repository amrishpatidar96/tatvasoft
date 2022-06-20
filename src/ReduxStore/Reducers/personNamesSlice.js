const intialState = {
    names:[]
}


export default function personNamesSlice(state = intialState, action){

    switch (action.type) {
        case 'name/added':
            return {
                ...state,
                names: [
                    ...state.names.slice(0),
                    action.name
                ]
            }
            
        case 'name/deleted':
            return {
                ...state,
                names:  [
                    ...state.names.slice(0,action.index),
                    ...state.names.slice(action.index+1)
                ]
            }
        default:
            return state ; 
    }


}