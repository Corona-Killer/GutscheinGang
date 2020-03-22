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
import './styles/companies.scss';
import { getSectors } from './store/models/sectors/actions';
import { getAllCompanies } from './store/models/companies/actions';
import { mapErrorResponseToErrorObject, ErrorResponse } from './components/util/error';

const App = lazy(() => import('./App'));

store.dispatch(getSectors());
store.dispatch(getAllCompanies());

const apiError: ErrorResponse = {
	timestamp: '2020-03-21T23:47:39.679+0000',
	status: 400,
	error: 'Bad Request',
	errors: [
		{
			codes: [
				'NotNull.company.street',
				'NotNull.street',
				'NotNull.java.lang.String',
				'NotNull'
			],
			arguments: [
				{
					codes: ['company.street', 'street'],
					arguments: null,
					defaultMessage: 'street',
					code: 'street'
				}
			],
			defaultMessage: 'must not be null',
			objectName: 'company',
			field: 'street',
			rejectedValue: null,
			bindingFailure: false,
			code: 'NotNull'
		},
		{
			codes: [
				'NotNull.company.paypalAddress',
				'NotNull.paypalAddress',
				'NotNull.java.lang.String',
				'NotNull'
			],
			arguments: [
				{
					codes: ['company.paypalAddress', 'paypalAddress'],
					arguments: null,
					defaultMessage: 'paypalAddress',
					code: 'paypalAddress'
				}
			],
			defaultMessage: 'must not be null',
			objectName: 'company',
			field: 'paypalAddress',
			rejectedValue: null,
			bindingFailure: false,
			code: 'NotNull'
		},
		{
			codes: ['NotNull.company.city', 'NotNull.city', 'NotNull.java.lang.String', 'NotNull'],
			arguments: [
				{
					codes: ['company.city', 'city'],
					arguments: null,
					defaultMessage: 'city',
					code: 'city'
				}
			],
			defaultMessage: 'must not be null',
			objectName: 'company',
			field: 'city',
			rejectedValue: null,
			bindingFailure: false,
			code: 'NotNull'
		},
		{
			codes: ['Min.company.postalCode', 'Min.postalCode', 'Min.int', 'Min'],
			arguments: [
				{
					codes: ['company.postalCode', 'postalCode'],
					arguments: null,
					defaultMessage: 'postalCode',
					code: 'postalCode'
				},
				10000
			],
			defaultMessage: 'must be greater than or equal to 10000',
			objectName: 'company',
			field: 'postalCode',
			rejectedValue: 0,
			bindingFailure: false,
			code: 'Min'
		}
	],
	message: "Validation failed for object='company'. Error count: 4",
	path: '/company'
};
console.log(mapErrorResponseToErrorObject(apiError));

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
