<template>
  <div>
    <div class="wrapper">
      <auth-sidenav :role="role"></auth-sidenav>

      <div class="main-panel" style="background: #fff">
        <auth-topnav :user="user"></auth-topnav>

        <slot name="content"></slot>

        <auth-footer></auth-footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  props: {
    user: Object,
    role: String,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // alertError(message) {
    //   Vue.$toast.open({
    //     message: message,
    //     type: "error",
    //     position: "top-right",
    //   });
    // },
  },
};
</script>
