interface TrendingUpSVGProps {
	className?: string;
}

function TrendsSVG(props: TrendingUpSVGProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={24}
			height={24}
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth={2}
			strokeLinecap='round'
			strokeLinejoin='round'
			className='lucide lucide-trending-up'
			{...props}
		>
			<path d='M22 7L13.5 15.5 8.5 10.5 2 17' />
			<path d='M16 7L22 7 22 13' />
		</svg>
	);
}

export default TrendsSVG;
