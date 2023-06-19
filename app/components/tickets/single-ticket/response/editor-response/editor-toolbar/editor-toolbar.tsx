import styles from './editor-toolbar.module.scss';
import Button from '../../../../../common-ui/button/button';

interface ToolBarProps {
	children: React.ReactNode;
}

const EditorToolBar = (props: ToolBarProps) => {
	return <div className={styles.editor_toolbar}>{props.children}</div>;
};

export default EditorToolBar;
