// selectors

export const getPostById = ({ posts }, postId) =>
    posts.find((post) => post.id === postId);

export const getAllPosts = (state) => state.posts;

// actions creators

const createActionName = (actionName) => `app/posts/${actionName}`;

export const removePost = (payload) => ({ type: REMOVE_POST, payload });


// actions

const REMOVE_POST = createActionName('REMOVE_POST');

const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case REMOVE_POST:
            return statePart.filter(post => post.id !== action.payload)
        default:
            return statePart;
    }
};

export default postsReducer;
