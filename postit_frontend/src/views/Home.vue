<template>
  <div class="home">
    <Post
      v-for="(item, index) in getPosts"
      :key="index"
      :post="item"
      @onDelete="onDeletePost(index)"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "@/components/Post.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Post,
  },
  beforeCreate() {
    this.$store.dispatch('fetchPosts');
  },
  computed: {
    ...mapState(["posts"]),

    getPosts() {
      return this.posts;
    }

  },
  methods: {
    // ...mapMutations(["deletePost"]),

    onDeletePost(index) {
      this.$store.dispatch('deletePost', index)
    },
  },
};
</script>
