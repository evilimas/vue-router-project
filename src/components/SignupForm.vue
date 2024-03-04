<template>
  <div class="backdrop">
    <div class="modal">
      <button @click="closeForm" class="close-btn">X</button>
      <h2>Registration Form</h2>
      <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" required v-model="email" />

        <label>Password:</label>
        <input type="password" required v-model="password" />
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <label>Role:</label>
        <select v-model="role" required>
          <option value="ux-ui">UX/UI Designer</option>
          <option value="front-end">Front-End</option>
          <option value="back-end">Back-End</option>
          <option value="full-stack">Full-Stack</option>
        </select>

        <label for="">Skills:</label>
        <input
          type="text"
          v-model="tempSkill"
          placeholder="CSS, VUE,  hold alt key when pressing comma"
          @keyup.alt="addSkill"
        />
        <div v-for="skill in skills" :key="skill" class="pill">
          <span @click="deleteSkill(skill)">{{ skill }}</span>
        </div>

        <div class="terms">
          <input type="checkbox" id="terms" v-model="terms" required />
          <label for="terms">Accept terms and conditions</label>
        </div>

        <div class="submit">
          <button>Create an Account</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showForm'],
  data() {
    return {
      email: '',
      password: '',
      role: 'ux-ui',
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError: '',
    };
  },
  methods: {
    closeForm() {
      this.$emit('close-form'); // Emit an event to the parent
    },
    addSkill(e) {
      if (e.key === ',' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }

        this.tempSkill = '';
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
      //   this.skills.splice(this.skills.indexOf(e.target.textContent), 1);
    },
    handleSubmit() {
      // validate password
      this.passwordError =
        this.password.length > 5
          ? ''
          : 'Password must be at least 6 characters long';
      if (!this.passwordError) {
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        console.log('Role:', this.role);
        console.log('Skills:', this.skills);
        console.log('Terms:', this.terms);
      }
    },
  },
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
  position: relative;
  z-index: 9999;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.479);
  width: 100%;
  height: 100%;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  color: #777;
  cursor: pointer;
}
h2 {
  margin-bottom: -40px;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}
button:hover {
  background: #3887fd;
}
.close-btn {
  padding: 5px 10px;
  background: red;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
.close-btn:hover {
  background: #810032;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
