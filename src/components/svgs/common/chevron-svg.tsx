interface ChevronSVGProps {
	className?: string;
}

function ChevronSVG(props: ChevronSVGProps) {
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
			className='lucide lucide-chevron-down'
			{...props}
		>
			<path d='M6 9L12 15 18 9' />
		</svg>
	);
}

export default ChevronSVG;
