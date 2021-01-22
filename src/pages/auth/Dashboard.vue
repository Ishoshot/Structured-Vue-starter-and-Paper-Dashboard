<template>
  <div>
    <auth :user="user" :role="role">
      <template v-slot:content>
        <div class="content">
          <h1>OVERVIEW</h1>
        </div>
      </template>
    </auth>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  mounted() {},
  data: () => ({
    user: {
      name: "Oluwatobi Ishola",
    },
    role: "superadmin",
  }),

  methods: {
    // alertError(message) {
    //   Vue.$toast.open({
    //     message: message,
    //     type: "error",
    //     position: "top-right",
    //   });
    // },
    // alertWarning(message) {
    //   Vue.$toast.open({
    //     message: message,
    //     type: "warning",
    //     position: "top-right",
    //   });
    // },
    // alertSuccess(message) {
    //   Vue.$toast.open({
    //     message: message,
    //     type: "success",
    //     position: "top-right",
    //   });
    // },
  },
};
</script>
