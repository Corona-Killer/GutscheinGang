import React, { ComponentProps } from 'react';
import { Route } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import { history } from '../../../history';

interface Props extends ComponentProps<any> {
	path: string;
}

const BreadcrumbItem: React.FC<Props> = (props: Props) => {
	const { path, children } = props;

	return (
		<Route
			path={path}
			component={() => (
				<Breadcrumb.Item
					onClick={(e: React.MouseEvent) => {
						history.push(path);
					}}
				>
					{children}
				</Breadcrumb.Item>
			)}
		/>
	);
};

export default BreadcrumbItem;
