<template>
  <div>
    <div class="sidebar" data-color="black" data-active-color="danger">
      <div class="logo">
        <router-link to="/dashboard" class="simple-text logo-normal">
          <img
            src="https://res.cloudinary.com/aura-magazine/image/upload/c_scale,h_25,w_100/v1605190202/backgrounds/footer/AURA_LOGO_WHITE_FOR_HEADER_yamx0h.png"
            alt="Logo Here"
            class="img-fluid p-0"
          />
        </router-link>
      </div>
      <div class="sidebar-wrapper" v-if="role === 'superadmin'">
        <ul class="nav">
          <li class="">
            <router-link to="/dashboard">
              <i class="nc-icon nc-bank"></i>
              <p>Overview</p></router-link
            >
          </li>

          <li class="">
            <router-link to="/articles">
              <i class="nc-icon nc-diamond"></i>
              <p>Articles</p></router-link
            >
          </li>
          <li class="">
            <router-link to="/users">
              <i class="nc-icon nc-pin-3"></i>
              <p>Users</p></router-link
            >
          </li>
          <li class="">
            <router-link to="/roles">
              <i class="nc-icon nc-bell-55"></i>
              <p>Roles</p></router-link
            >
          </li>
          <li class="">
            <router-link to="/magazine">
              <i class="nc-icon nc-tile-56"></i>
              <p>Magazine</p></router-link
            >
          </li>
          <li class="">
            <router-link to="/video">
              <i class="nc-icon nc-caps-small"></i>
              <p>Video</p></router-link
            >
          </li>
          <li class="">
            <router-link to="/invoices">
              <i class="nc-icon nc-caps-small"></i>
              <p>Invoice</p></router-link
            >
          </li>
          <li class="">
            <router-link to="/adverts">
              <i class="nc-icon nc-caps-small"></i>
              <p>Advertisement</p></router-link
            >
          </li>
          <li class="">
            <router-link to="/orders">
              <i class="nc-icon nc-caps-small"></i>
              <p>Orders</p></router-link
            >
          </li>
          <li class="">
            <router-link to="/calendar">
              <i class="nc-icon nc-caps-small"></i>
              <p>Calendar</p></router-link
            >
          </li>
          <li class="">
            <router-link to="/files">
              <i class="nc-icon nc-caps-small"></i>
              <p>Files</p></router-link
            >
          </li>
        </ul>
      </div>

      <div class="sidebar-wrapper" v-else-if="role === 'editorinchief'">
        <ul class="nav">
          <li class="">
            <router-link to="/dashboard">
              <i class="nc-icon nc-bank"></i>
              <p>Overview</p></router-link
            >
          </li>

          <li class="">
            <router-link to="/articles">
              <i class="nc-icon nc-diamond"></i>
              <p>Articles</p></router-link
            >
          </li>

          <li class="">
            <router-link to="/magazine">
              <i class="nc-icon nc-tile-56"></i>
              <p>Magazine</p></router-link
            >
          </li>
          <li class="">
            <router-link to="/video">
              <i class="nc-icon nc-caps-small"></i>
              <p>Video</p></router-link
            >
          </li>
        </ul>
      </div>

      <div class="sidebar-wrapper" v-else-if="role === 'marketermain'">
        <ul class="nav">
          <li class="">
            <router-link to="/dashboard">
              <i class="nc-icon nc-bank"></i>
              <p>Overview</p></router-link
            >
          </li>

          <li class="">
            <router-link to="/invoices">
              <i class="nc-icon nc-caps-small"></i>
              <p>Invoice</p></router-link
            >
          </li>
          <li class="">
            <router-link to="/adverts">
              <i class="nc-icon nc-caps-small"></i>
              <p>Advertisement</p></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav",
  props: {
    role: "",
  },
};
</script>
