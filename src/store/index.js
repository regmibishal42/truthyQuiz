import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware : getDefaultMiddleware => getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
    // setting createThunkMiddleware to false and adding sagaMiddleware.
    // ThunkMiddleware is set Default by Toolkit
});

sagaMiddleware.run(rootSaga);
export default store;