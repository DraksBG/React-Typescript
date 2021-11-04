import { SetStateAction, useState } from 'react'
import styles from './Login.module.css';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const onChangeEmail = (e: { target: { value: SetStateAction<string>; }; }): void => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e: { target: { value: SetStateAction<string>; }; }): void => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log({email, password})
    }
    return (
        <form onSubmit={handleSubmit} className={styles['login-form']}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input type="email"  onChange={onChangeEmail} value={email}/>
            </label>
            <label>
                <span>password:</span>
                <input type="password" onChange={onChangePassword} value={password}/>
            </label>
            <button className="btn">
                Login
            </button>
        </form>
    )
}
