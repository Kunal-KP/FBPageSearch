export default function(state=null, action) {
    switch(action.type) {
        case 'PAGE_SEARCH_REDUCER':
            console.log('Inside page search reducer');
            return action.payload;
    }
    return state;
}