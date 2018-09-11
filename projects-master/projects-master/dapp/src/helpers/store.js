import { createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const loggerMiddleware = createLogger({
    // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
    predicate: (getState, action) => action.type !== 'CHANGE_FORM'
})

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
        sagaMiddleware,
        loggerMiddleware
    ))
);

sagaMiddleware.run(rootSaga);
