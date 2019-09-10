<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <nav>
      <router-link to="/chat">Перейти к Chat |</router-link>
      <router-link to="/SignIn">Перейти к SignIn |</router-link>
      <router-link to="/SignUp">Перейти к SignUp |</router-link>
      <router-link to="/complete">Перейти к completePass |</router-link>
    </nav>

    <router-view :user="user"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return { user: {} };
  },
  methods: {
    signUp(user) {
      this.user = user;
    },
    complete(passData) {
      this.user.password = passData;
      //   axios
      //     .post("http://localhost:3000/accounts/sign-up", this.user)
      //     .then(function(response) {
      //       // handle success
      //       console.log(response);
      //     })
      //     .catch(function(error) {
      //       // handle error
      //       console.log(error);
      //     });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
