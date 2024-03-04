<template>
  <SignupForm :showForm="showForm" @close-form="toggleForm" v-if="showForm" />
  <button class="signup-btn" @click="toggleForm">Sign Up!</button>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'unitConverter' }">Unit Converter</router-link>
    <router-link :to="{ name: 'passwordGenerator' }"
      >Password Generator</router-link
    >
    <router-link :to="{ name: 'boredBot' }">Bored Bot</router-link>
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
  </nav>
  <!-- <div>
    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>
  </div> -->
  <router-view />
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue';
import SignupForm from './components/SignupForm.vue';
export default {
  components: { Footer, SignupForm },
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
    // redirect() {
    //   this.$router.push({ name: 'home' });
    // },
    // back() {
    //   this.$router.go(-1);
    // },
    // forward() {
    //   this.$router.go(1);
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: #ebebeb;
}

nav {
  display: flex;
  justify-content: center;
  padding: 40px;
  gap: 30px;
}

nav a {
  font-weight: bold;
  color: #34495f;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
nav a:hover {
  color: black;
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
nav a.router-link-exact-active:hover {
  text-decoration: none;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
.signup-btn {
  position: absolute;
  right: 10%;
  cursor: pointer;
  background: #008a2e;
  color: white;
}
.signup-btn:hover {
  background: #01a839;
}
</style>
