import dynamic from 'next/dynamic';

const EditorIcon = ({ children }: { children: string }) => {
	const iconName = children + '-svg';

	const IconComponent = dynamic(() =>
		import(`../../../../../../svgs/editor/toolbar/${iconName}`).then(
			(module) => module.default
		)
	);

	return <IconComponent />;
};

export default EditorIcon;
