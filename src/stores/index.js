import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/index';
import rootSaga from '../sagas/index';

/**
 * Saga Middleware
 * @private
 * @const
 * @type {SagaMiddleware<C>}
 */
const sagaMiddleware = createSagaMiddleware();
/**
 * middle wares array
 * @private
 * @const
 */
const middleware = [sagaMiddleware];

/**
 * if the NODE_ENV is anything other than production, then install the redux logger.
 */
if ((process.env.NODE_ENV ? process.env.NODE_ENV : '').toLowerCase() !== 'production') {
  middleware.push(reduxLogger);
}

/**
 * Create the store, and load all the reducers and middleware.
 * @private
 * @const
 */
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

/**
 * Start the Root Saga, which holds all the sagas.
 */
sagaMiddleware.run(rootSaga);

/**
 * A Redux store that lets you read the state, dispatch actions and subscribe to changes.
 *
 * @public
 */
export default store;
