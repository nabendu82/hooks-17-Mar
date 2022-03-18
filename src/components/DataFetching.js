import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DataFetching = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    },[])

    return (
        <h2>
            {posts.map(post => <div key={post.id}>{post.title}</div>)}
        </h2>
    )
}

export default DataFetching