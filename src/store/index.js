import { createStore } from 'redux';

const reducerFn = (state = { counter: 0}, action) => {
    
    switch(action.type) {
        case 'INCREMENT': {
            return {
                counter: state.counter + 1
            }
        }
        case 'DECREMENT': {
            return {
                counter: state.counter - 1
            }
        }
        default: {
            return {
                counter: state.counter
            }
        }
    }

}

const store = createStore(
    reducerFn,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;