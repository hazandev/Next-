import React from 'react';
import Head from 'next/head';
import Meta from '../util/Meta'

const PageHeader = ({title, meta = []}) => {
 	return (
		<div className="header-page">
			<Head>
				<title>{title}</title>
                {meta.forEach( meta => <Meta name={meta.name} content={meta.content}/>)}
			</Head>
		</div>
	);
};

export default PageHeader;
