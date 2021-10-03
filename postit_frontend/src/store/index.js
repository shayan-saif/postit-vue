import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    addPost(state, post) {
      state.posts = [...state.posts, post];
    },
    deletePost(state, index) {
      state.posts = state.posts.filter((post, postIndex) => postIndex !== index)
    },
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    async fetchPosts(state) {
      const res = await axios.get("http://localhost:3000/posts")

      state.commit('setPosts', res.data)
    },

    async addPost(state, post) {
      const res = await axios.post("http://localhost:3000/posts", {
        postContent: post
      })

      state.commit('addPost', res.data)
    },

    async deletePost(state, index) {
      const res = await axios.delete(`http://localhost:3000/posts?id=${index}`)

      state.commit('deletePost', res.data)
    }
  },

  modules: {
  }
})
