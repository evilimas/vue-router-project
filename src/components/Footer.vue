<template>
  <footer>
    <div class="container">
      <div class="row">Copyright © 2024, Egidijus Vilimas</div>
      <div class="row-2">
        <a href="https://github.com/evilimas" target="_blank">Github</a>
        <a
          href="https://www.linkedin.com/in/front-end-developer-egidijus-vilimas/"
          target="_blank"
          >LinkedIn</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background: #444;
  color: #aaaaaa;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1em;
}
.row-2 {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 0.5em;
}
a {
  text-decoration: none;
  color: rgb(179, 0, 0);
}
a:hover {
  color: rgb(247, 4, 4);
}
</style>
