import * as React from 'react';

function FormatListBulletedSVG() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={18}
			height={18}
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth={2}
			strokeLinecap='round'
			strokeLinejoin='round'
			className='lucide lucide-list'
		>
			<path d='M8 6L21 6' />
			<path d='M8 12L21 12' />
			<path d='M8 18L21 18' />
			<path d='M3 6L3.01 6' />
			<path d='M3 12L3.01 12' />
			<path d='M3 18L3.01 18' />
		</svg>
	);
}

export default FormatListBulletedSVG;
