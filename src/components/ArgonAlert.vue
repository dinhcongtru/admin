<template>
  <div
    class="alert text-white font-weight-bold active"
    role="alert"
    :class="[getClasses(color, dismissible),{'hide' : isPoup}]"
  >
    <span class="alert-icon">
      <i :class="getIcon(icon)" />
    </span>
    <span class="alert-text">
      &nbsp;
      <slot />
    </span>
    <button
      v-if="dismissible"
      type="button"
      class="btn-close d-flex justify-content-center align-items-center"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true" class="text-lg font-weight-bold">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "argon-alert",
  props: {
    color: {
      type: String,
      default: "success",
    },
    isPoup: {
      type:Boolean,
      default:false
    },
    icon: String,
    dismissible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getClasses: (color, dismissible) => {
      let colorValue, dismissibleValue;

      colorValue = color ? `alert-${color}` : null;

      dismissibleValue = dismissible ? "alert-dismissible fade show" : null;

      return `${colorValue} ${dismissibleValue}`;
    },
    getIcon: (icon) => (icon ? icon : null),
  },
};
</script>
<style scoped>
.active {
  position: absolute;
    top: 101px;
    right: 100px;
    transition: all ease-in .5s;
    visibility: hidden;
    opacity: 0;

}
.hide {
  opacity: 1;
  visibility: visible;
}


</style>
