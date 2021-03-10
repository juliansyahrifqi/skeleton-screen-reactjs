import React, { useEffect, useState } from 'react';
import Post from './Post';
import '../index.css';

const BlogPost = () => {
    const [posts, setPosts] = useState(null);

    const query = `
        {   
            user(username: "juliansyahrifqi") {
            publication {
                posts {
                    dateAdded
                    slug
                    title
                    brief
                    coverImage
                    }
                }
            }
        }
    `;

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch('https://api.hashnode.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query })
            })

            const responseData = await response.json();
            setPosts(responseData.data.user.publication.posts);
        } 

        fetchAPI();
    })

    return (
        <div className="post">
            {posts && (
                <div className="card-wrapper">
                    {posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default BlogPost;