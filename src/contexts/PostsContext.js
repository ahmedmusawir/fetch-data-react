import React, { createContext, useReducer, useEffect, useState } from 'react';
import { PostsReducer } from '../reducers/PostsReducer';

export const PostsContext = createContext();

function PostsContextProvider(props) {
  const initialState = {
    posts: [],
    isPending: true,
  };
  const [url, setUrl] = useState('http://blockbuster.dns.army:8001/posts');
  const [posts, dispatch] = useReducer(PostsReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      //   dispatch({ type: 'FETCH_SUCCESS', payload: json });
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: {
          posts: json,
          isPending: false,
        },
      });
    };

    fetchData();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {props.children}
    </PostsContext.Provider>
  );
}

export default PostsContextProvider;