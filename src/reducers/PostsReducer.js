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
      const newState = state.posts.filter((post) => post.id !== action.payload);
      console.log('New State:', newState);
      return {
        posts: { ...newState },
        isPending: false,
      };

    default:
      return state;
  }
};
