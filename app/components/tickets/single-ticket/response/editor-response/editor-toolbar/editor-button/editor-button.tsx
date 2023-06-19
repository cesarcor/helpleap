import { Ref, PropsWithChildren, forwardRef } from 'react';
import { cx, css } from '@emotion/css';
import styles from './editor-button.module.scss';

interface BaseProps {
	className: string;
	[key: string]: unknown;
}
type OrNull<T> = T | null;

export const EditorButton = forwardRef(
	(
		{
			className,
			active,
			reversed,
			...props
		}: PropsWithChildren<
			{
				active: boolean;
				reversed: boolean;
			} & BaseProps
		>,
		ref: Ref<OrNull<HTMLSpanElement>>
	) => (
		<span
			{...props}
			ref={ref as Ref<HTMLSpanElement>}
			className={cx(
				className,
				css`
					cursor: pointer;
					color: ${reversed
						? active
							? 'white'
							: '#aaa'
						: active
						? 'black'
						: '#ccc'};
				`
			)}
		/>
	)
);

EditorButton.displayName = 'EditorButton';

export default EditorButton;
