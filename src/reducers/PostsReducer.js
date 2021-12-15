export const PostsReducer = (state, action) => {
  console.log('ACTION:', action);
  console.log('STATE:', state);
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        posts: action.payload.posts,
        isPending: action.payload.isPending,
      };

    case 'ADD_POST':
      return [...state.posts, action.payload];

    case 'FETCH_RELOAD':
      return state;

    case 'REMOVE_POST':
      return state.posts.filter((post) => post.id !== action.payload);

    default:
      return state;
  }
};
