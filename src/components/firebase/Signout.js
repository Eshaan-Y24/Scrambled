import React from 'react'

const Signout = () => {
    return (
        <div>
            <button onClick={() => { auth.signOut() }}>Sign Out</button>
        </div>
    )
}

export default Signout
