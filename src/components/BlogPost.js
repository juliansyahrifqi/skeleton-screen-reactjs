import React, { useEffect, useState } from 'react';
import Post from './Post';
import '../index.css';
import SkeletonPost from '../skeletons/SkeletonPost';

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
        setTimeout(async () => {
            const response = await fetch('https://api.hashnode.com', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ query }),
            })
            const responseData = await response.json();

            setPosts(responseData.data.user.publication.posts);
        }, 4000);
    });

    return (
        <div className="post">
            {posts && (
                <div className="card-wrapper">
                    {posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </div>
            )}

            {!posts && (
                <div className="skeleton-container">
                    {[1, 2, 3, 4, 5, 6].map((n) => <SkeletonPost key={n} />)}
                </div>
            )}
        </div>
    )
}

export default BlogPost;