import React from 'react'
import {Link } from 'react-router-dom';


const A = ({ children, href = '/', className, target = '' }) => {
	return (
		<Link className={className} href={href}  target={target ? target : ''}>
			{children}
		</Link>
	)
}
export default A