import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Dots } from 'react-preloaders';
// redux
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/scss/bootstrap.scss';
import './styles/main.scss';
import './styles/dropdown.scss';
import { getSectors } from './store/models/sectors/actions';

const App = lazy(() => import('./App'));

store.dispatch(getSectors());

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Suspense fallback={<Dots customLoading={true} />}>
				<App />
			</Suspense>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
