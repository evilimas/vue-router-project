<template>
  <div class="home">
    <h1>Welcome to the Vue Router Project</h1>
    <h3>Discover a collection of simple projects built with Vue.js</h3>
    <div class="projects">
      <h2>Projects:</h2>
      <ol>
        <li>
          <strong>Unit Converter:</strong> Recreated an old JavaScript project
          using Vue.js.
          <p>- A tool for converting between metric and imperial units.</p>
        </li>
        <li>
          <strong>Password Generator:</strong> Recreated an old JavaScript
          project using Vue.js.
          <p>- Generate random passwords for enhanced security.</p>
        </li>
        <li>
          <strong>Bored Bot:</strong> Recreated an old JavaScript project using
          Vue.js.
          <p>
            - Get suggestions for activities from when you're feeling bored from
            Bored API.
          </p>
        </li>
        <li>
          <strong>Signup Form:</strong> A simple registration form.
          <p>- A registration form for users to create an account.</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
};
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.projects {
  text-align: left;
  padding: 2em;
}

.projects h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  margin-right: 60px;
}

ol {
  list-style-type: none;
  margin-left: 0;
}

li {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

strong {
  font-weight: bold;
}
p {
  margin: 0;
  font-size: 1rem;
}
</style>
