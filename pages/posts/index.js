import { useState, useEffect } from 'react';
import Link from 'next/link';

const Posts = () => {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch('http://localhost/api/posts')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setPosts(data);
        })
        .catch(error => {
            alert('Failed to get Posts');
        });

    }, []);
    
    return ( 
        <div>
            <h1>List of Posts</h1>
            {
                posts && posts.map(post => {
                    
                    const str = post.name.replace(/\s+/g, '-').toLowerCase();
                   
                    return (
                        <div key={post.id}>
                            <Link 
                                href={'/posts/'+str}
                            >{post.name}</Link>
                            
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Posts;