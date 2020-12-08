import React, {useState, useEffect} from 'react';
import axios from 'axios';
	function UseEffectFetchApi() {
        const [posts, setPost] = useState([]);

        useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=> {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }, []);

		return ( 
			<div><h3>Use Effect for Fetching API</h3>
                <ul>
            {posts.map(post=> (<li key={post.id} >{post.title}</li>
            ))}
            </ul>
			</div>
			)
		}
		
	export default UseEffectFetchApi