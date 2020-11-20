import React, { createContext, useReducer, useContext } from "react";
// Don't forget to import all of your actions!
import {ADD_POSTS, SET_CURRENT_POST, REMOVE_POST, UPDATE_POSTS,  UPDATE_FAVORITES, REMOVE_FAVORITE, LOADING } from "./actions"
const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_POST:
    return {
      ...state, currentPost: action.post,
      loading: false
    };
    case UPDATE_POSTS:
      return {
        ...state,
        posts: [...action.posts],
        loading: false
      };
    case ADD_POST:
      return {
          ...state,
          posts: [action.post, ...state.posts],
          loading: false
        };
    case REMOVE_POST:
      return {
          ...state,
          posts: state.posts.filter((post) => {
            return post._id !== action._id;
          })
        };
    case ADD_FAVORITE:
        return {
          ...state, 
          favorites: [
            action.post, ...state.favorites
          ],
          loading: false
        };
      case UPDATE_FAVORITE:
          return {
            ...state, 
            favorites: [
              ...state.favorites
            ],
            loading: false
          };
      case REMOVE_FAVORITE:
            return {
              ...state, 
              favorites: state.favorites.filter((post) => {
                return post._id !== action._id;})
            };
    case LOADING:
      return {
          ...state,
          loading: true            
      };        
            
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {
      _id: 0,
      title: "",
      body: "",
      author: ""
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props}/>;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
