export default function(state=null, action) {
    switch(action.type) {
        case 'SHOW_FAV_REDUCER':
            return action.payload;
    }
    return state;
}