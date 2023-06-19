import { useState, useMemo } from 'react';
import styles from './recipient-input.module.scss';

const RecipientInput = () => {
	const [emails, setEmails] = useState<string[]>([]);
	const [emailInput, setEmailInput] = useState<string>('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailInput(e.target.value);
	};

	const emailRegex = useMemo(() => /\S+@\S+\.\S+/, []);

	const validateEmail = (email: string) => {
		return emailRegex.test(email);
	};

	const addEmail = () => {
		if (validateEmail(emailInput)) {
			const newEmails = emailInput
				.split(',')
				.map((email) => email.trim())
				.filter((email) => email !== '');

			setEmails((prevEmails) => [...prevEmails, ...newEmails]);
			setEmailInput('');
		}
	};

	const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' || e.key === ',') {
			addEmail();
		}
	};

	const handleRemoveEmail = (email: string) => {
		const updatedEmails = emails.filter((e) => e !== email);
		setEmails(updatedEmails);
	};

	return (
		<div className={styles.emailList}>
			{emails.map((email, index) => (
				<div className={styles.email} key={index}>
					<span>{email}</span>
					<button
						className={styles.removeButton}
						onClick={() => handleRemoveEmail(email)}
					>
						&times;
					</button>
				</div>
			))}
			<input
				className={styles.recipient_input}
				type='text'
				placeholder='Enter email address'
				value={emailInput}
				onChange={handleInputChange}
				onKeyDown={handleInputKeyDown}
			/>
		</div>
	);
};

export default RecipientInput;
