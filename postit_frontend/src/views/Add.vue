<template>
  <div class="add">
    <form>
      <div class="form-group">
        <label for="post-content">Post Content:</label>
        <textarea
          class="input-field"
          name="post-content"
          cols="30"
          rows="5"
          v-model="postContent"
        />
        <div class="flex justify-end">
          <Button
            text="Add"
            color="primary"
            @onBtnClick="submitForm"
            :disabled="isEmpty"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Add",
  components: {
    Button,
  },
  data() {
    return {
      postContent: "",
    };
  },
  computed: {
    isEmpty() {
      return this.postContent.trim() === "";
    },
  },
  methods: {
    submitForm() {
      this.$store.dispatch("addPost", this.postContent);
      this.$router.push("/")
    },
  },
};
</script>

<style lang="scss" scoped>
.add {
  @apply shadow-lg p-6;
  min-height: 300px;
  margin: 0 30%;

  form {
    @apply flex justify-center;

    .form-group {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;

      label {
        @apply text-lg font-bold;
      }

      .input-field {
        @apply bg-gray-200 p-2 rounded-lg shadow-md focus:outline-none;
      }
    }
  }
}
</style>