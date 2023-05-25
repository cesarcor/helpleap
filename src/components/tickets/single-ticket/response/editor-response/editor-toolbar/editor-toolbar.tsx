import styles from './editor-toolbar.module.scss';
import Button from '@/components/common-ui/button/button';

interface ToolBarProps {
	children: React.ReactNode;
}

const EditorToolBar = (props: ToolBarProps) => {
	return (
		<div className={styles.editor_toolbar}>
			{props.children} <Button type='default' text='Auto Response' />
		</div>
	);
};

export default EditorToolBar;
