export const PostsReducer = (state, action) => {
  // console.log('ACTION:', action);
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        data: action.payload.posts,
        isPending: action.payload.isPending,
      };

    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};
