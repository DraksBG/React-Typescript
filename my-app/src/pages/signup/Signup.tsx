import { SetStateAction, useState } from 'react';
import { useSignup } from '../../hooks/useSignup'
import styles from './Signup.module.css';


export default function Signup() {
    const [email, setEmail] = useState<string>('');
    const [dispalyName, setDispalyName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { signup, isPending, error } = useSignup();
    const onChangeEmail = (e: { target: { value: SetStateAction<string>; }; }): void => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e: { target: { value: SetStateAction<string>; }; }): void => {
        setPassword(e.target.value);
    }

    const onChangeDispalyName = (e: { target: { value: SetStateAction<string>; }; }): void => {
        setDispalyName(e.target.value);
    }
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        signup(email, password, dispalyName);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={styles['signup-form']}>
                <h2>Signup</h2>
                <label>
                    <span>displayname:</span>
                    <input type="text" onChange={onChangeDispalyName} value={dispalyName} />
                </label>
                <label>
                    <span>email:</span>
                    <input type="email" onChange={onChangeEmail} value={email} />
                </label>
                <label>
                    <span>password:</span>
                    <input type="password" onChange={onChangePassword} value={password} />
                </label>
                {!isPending && <button className="btn">Signup</button>}
                {isPending && <button className="btn" disabled>Loading</button>}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}
