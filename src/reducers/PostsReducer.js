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
      return {
        posts: [...state.posts, action.payload],
        isPending: false,
      };

    case 'REMOVE_POST':
      return {
        posts: state.posts.filter((post) => post.id !== action.payload),
        isPending: false,
      };

    default:
      return state;
  }
};
