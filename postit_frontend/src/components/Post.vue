<template>
  <div class="post">
    <p>{{ post }}</p>
    <Button text="Delete" color="danger" @onBtnClick="$emit('onDelete')" />
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: "Post",
  props: {
    post: String,
  },
  emits: ['onBtnClick'],
  components: {
    Button
  },
};
</script>

<style lang="scss" scoped>
  .post {
    @apply p-4 m-4 shadow-sm border rounded-md flex justify-between gap-4;

    p {
      @apply text-lg;
    }
  }
</style>