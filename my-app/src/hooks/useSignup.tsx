import { useState } from 'react';
import { projectAuth } from '../firebase/config';

export const useSignup = () => {
    const [error, setError] = useState<string>('');
    const [isPending, setIsPending] = useState<boolean>(false);

    const signup = async (email: string, password: string, displayName: string) => {
        setError('');
        setIsPending(true);
        try {
            // signUp user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            console.log(res?.user);
            if (!res) {
                throw new Error("Could not complete signup");
            }
            // add dispalyName to user
            await res?.user?.updateProfile({ displayName });

            setIsPending(false);
            setError('');

        } catch (err: any) {
            console.log(err?.message);
            setError(err?.message);
            setIsPending(false)
        }
    }

    return { error, isPending, signup };
}