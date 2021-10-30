import { FirebaseError } from '@firebase/util'
import React from 'react'

const Signin = () => {
    const signInWithGoogle = () => {
        const provider = new FirebaseError.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

    return (
        <div>
            <button onClick={signInWithGoogle}></button>
        </div>
    )
}

export default Signin
