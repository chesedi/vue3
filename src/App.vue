<template>
  <AppHeader />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal />
</template>

<script>
import AppHeader from './components/AppHeader';
import LoginModal from './components/LoginModal';
import firebase from './utilities/firebase';

export default {
  components: { AppHeader, LoginModal },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit('setIsLoggedin', true);
        this.$store.commit('setAuthUser', user);
      } else {
        this.$store.commit('setIsLoggedin', false);
        this.$store.commit('setAuthUser', {});
      }
    });
  },
  methods: {},
};
</script>

<style></style>
