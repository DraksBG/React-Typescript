import { SetStateAction, useState } from 'react';
import styles from './Signup.module.css';

export default function Signup() {
    const [email, setEmail] = useState<string>('');
    const [dispalyName, setDispalyName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
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
        console.log({ email, password, dispalyName })
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
                <button className="btn">
                    Login
                </button>
            </form>
        </div>
    )
}
