<template>
  <div class="about">
    <h1>About Vue Router Project</h1>
    <p>
      Welcome to the Vue Router Project, a showcase of simple projects built
      using Vue.js and Vue Router.
    </p>
    <h2>Projects Included</h2>
    <ol>
      <li>
        <strong>Unit Converter:</strong> A tool for converting between metric
        and imperial units.
      </li>
      <li>
        <strong>Password Generator:</strong> Generate random passwords for
        enhanced security.
      </li>
      <li>
        <strong>Bored Bot:</strong> Get suggestions for activities when you're
        feeling bored.
      </li>
      <li>
        <strong>Signup Form:</strong> A registration form for users to create an
        account.
      </li>
    </ol>
    <h2>Technologies Used</h2>
    <ul class="tech-list">
      <li>Vue.js</li>
      <li>Vue Router</li>
      <li>HTML5</li>
      <li>CSS3</li>
    </ul>
    <h2>Author</h2>
    <p>This Vue Router Project is developed by Egidijus Vilimas.</p>
    <h2>GitHub Repository</h2>
    <p>
      You can find the source code for this project on GitHub:
      <a href="https://github.com/evilimas/vue-router-project"
        >Vue Router Project Repository</a
      >
    </p>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 10px;
}

ol,
ul {
  list-style-type: none;
  margin-left: 20px;
}

p {
  font-size: 1.1rem;
  line-height: 1.5;
}

strong {
  font-weight: bold;
}
.tech-list {
  margin-right: 60px;
}
</style>
