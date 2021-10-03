<template>
  <div>
    <button
      class="button"
      type="button"
      :class="getColors"
      @click="$emit('onBtnClick')"
      :disabled="disabled"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
    disabled: Boolean
  },
  computed: {
    getColors: function () {
      switch (this.color) {
        case "primary":
          return "text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-600";

        case "danger":
          return "text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-600";

        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  @apply py-2 px-4 text-lg rounded-md shadow-sm transition duration-200;
}
</style>