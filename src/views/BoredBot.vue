<template>
  <main :class="{ fun: isFun }">
    <h1>{{ title }}</h1>
    <p id="activity" class="activity" aria-live="polite">{{ activity }}</p>
    <button
      id="get-activity"
      aria-label="Find a new activity."
      @click="getActivity"
    >
      Click Here
    </button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: '🤖 BoredBot 🤖',
      activity: 'Find something to do',
      isFun: false,
    };
  },
  methods: {
    async getActivity() {
      try {
        const response = await fetch(
          'https://apis.scrimba.com/bored/api/activity'
        );
        const data = await response.json();
        this.activity = data.activity;
        this.title = '🦾 HappyBot🦿';
        this.isFun = true;
      } catch (error) {
        console.error('Error fetching activity:', error);
      }
    },
  },
};
</script>

<style scoped>
main {
  /* uigradients.com */
  background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #2c3e50,
    #bdc3c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #2c3e50,
    #bdc3c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-repeat: no-repeat;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Oxygen, sans-serif;
  width: 60%;
  margin: auto;
}

button {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: red;
  border: 1px solid darkred;
  cursor: pointer;
  font-weight: bold;
}

.fun {
  /* CSS generated from https://uigradients.com */
  background: #fc4a1a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #f7b733,
    #fc4a1a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #f7b733,
    #fc4a1a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.activity {
  font-size: 1.3em;
  font-weight: bold;
}
</style>
