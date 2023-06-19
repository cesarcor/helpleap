interface NotificationsBellSvgProps {
	className?: string;
}

function NotificationsBellSvg(props: NotificationsBellSvgProps) {
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
			className='lucide lucide-bell'
			{...props}
		>
			<path d='M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 003.4 0' />
		</svg>
	);
}

export default NotificationsBellSvg;
