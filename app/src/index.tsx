import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Dots } from 'react-preloaders';
import { ToastContainer } from 'react-toastify';
// redux
import { Provider } from 'react-redux';
import store from './store';
import { getSectors } from './store/models/sectors/actions';
import { getAllCompanies } from './store/models/companies/actions';

import 'bootstrap/scss/bootstrap.scss';
import 'react-toastify/dist/ReactToastify.css';
import './styles/main.scss';
import './styles/dropdown.scss';
import './styles/companies.scss';

const App = lazy(() => import('./App'));

store.dispatch(getSectors());
store.dispatch(getAllCompanies());

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Suspense fallback={<Dots customLoading={true} />}>
				<ToastContainer position="bottom-center" autoClose={3000} draggable={true} />
				<App />
			</Suspense>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
