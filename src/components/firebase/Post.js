import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';

const Post = () => {
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' })
    return (
        <div>

        </div>
    )
}

export default Post
