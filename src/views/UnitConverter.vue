<template>
  <div class="container">
    <!-- Header -->
    <div class="head">
      <h2>Metric/Imperial Unit Conversion</h2>
      <input type="text" v-model="inputValue" placeholder="0" />
      <button @click="convert" class="conversion-btn">Convert</button>
    </div>

    <!-- Body -->
    <div class="body" :class="{ 'body-dark': darkMode }">
      <div class="section1" :class="{ 'section-dark': darkMode }">
        <h3 class="h3-1" :class="{ 'h3-dark': darkMode }">
          Length (Meter/Feet)
        </h3>
        <p :class="{ 'p-dark': darkMode }">{{ lengthResult }}</p>
      </div>
      <div class="section2" :class="{ 'section-dark': darkMode }">
        <h3 class="h3-2" :class="{ 'h3-dark': darkMode }">
          Volume (Liters/Gallons)
        </h3>
        <p :class="{ 'p-dark': darkMode }">{{ volumeResult }}</p>
      </div>
      <div class="section3" :class="{ 'section-dark': darkMode }">
        <h3 class="h3-3" :class="{ 'h3-dark': darkMode }">
          Mass (Kilograms/Pounds)
        </h3>
        <p :class="{ 'p-dark': darkMode }">{{ massResult }}</p>
      </div>
    </div>

    <!-- Toggle Button -->
    <button
      class="svg"
      :class="{ 'svg-icon-light': darkMode }"
      @click="toggleDarkMode"
    >
      <svg
        class="svg-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="2.5em"
        viewBox="0 0 384 512"
      >
        <path
          d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: 0,
      darkMode: false,
      meterToFeet: 3.281,
      literToGallon: 0.264,
      kilogramToPound: 2.204,
    };
  },
  computed: {
    lengthResult() {
      return `${this.inputValue} meter = ${(
        this.inputValue * this.meterToFeet
      ).toFixed(3)} feet | ${this.inputValue} feet = ${(
        this.inputValue / this.meterToFeet
      ).toFixed(3)} meters`;
    },
    volumeResult() {
      return `${this.inputValue} liters = ${(
        this.inputValue * this.literToGallon
      ).toFixed(3)} gallons | ${this.inputValue} gallons = ${(
        this.inputValue / this.literToGallon
      ).toFixed(3)} liters`;
    },
    massResult() {
      return `${this.inputValue} kilogram = ${(
        this.inputValue * this.kilogramToPound
      ).toFixed(3)} pounds | ${this.inputValue} pounds = ${(
        this.inputValue / this.kilogramToPound
      ).toFixed(3)} kilograms`;
    },
  },
  methods: {
    convert() {
      if (isNaN(this.inputValue)) {
        alert('Please enter a number!');
        return;
      }
      if (this.inputValue > 10000) {
        alert('Number is too large');
        return;
      }
      if (this.inputValue <= 0) {
        alert('Number is too small');
        return;
      }
      // Convert Logic Here
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
.container {
  width: 550px;
  margin: 40px auto;
  border: 2px solid gray;
  text-align: center;
  position: relative;
}

/* Header / Top  */

.head {
  background: #6943ff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  color: whitesmoke;
  margin-top: 40px;
}
input {
  width: 95px;
  font-size: 4rem;
  font-weight: bold;
  color: whitesmoke;
  border: 1px solid #b295ff;
  border-radius: 0.4rem;
  background: transparent;
  text-align: center;
}
.conversion-btn {
  width: 100px;
  padding: 0.6rem;
  margin: 1.8rem 0;
  border-radius: 0.2rem;
  border: transparent;
  cursor: pointer;
  background: white;
}
.conversion-btn:hover {
  background: rgb(196, 196, 196);
}
.body {
  background-color: #f4f4f4;
  padding: 5px;
}
.body-dark {
  background-color: #1f2937;
}

.section1,
.section2,
.section3 {
  background: rgb(255, 255, 255);
  padding: 1.5rem;
  margin: 25px;
}

.section-dark {
  background-color: #273549;
}

h3 {
  margin: 0 0 15px 0;
  color: #5a537b;
}

.h3-dark {
  color: #ccc1ff;
}

p {
  margin: 0;
  font-size: 0.9rem;
}
.p-dark {
  color: white;
}

.svg {
  position: absolute;
  top: 0; /* Position at the top */
  right: 0; /* Position at the right */
  background: transparent;
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
}
.svg-icon-light {
  fill: white;
}
</style>
