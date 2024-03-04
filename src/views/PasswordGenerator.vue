<template>
  <div class="container">
    <h2>Generate a <span>random password</span></h2>
    <p>Never use an insecure password again.</p>
    <button @click="generatePasswords">Generate passwords</button>
    <div class="passwords">
      <div class="password-field" @click="copyToClipboard(passwordOne)">
        {{ passwordOne }}
      </div>
      <div class="password-field" @click="copyToClipboard(passwordTwo)">
        {{ passwordTwo }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '~',
        '`',
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '{',
        '[',
        '}',
        ']',
        ',',
        '|',
        ':',
        ';',
        '<',
        '>',
        '.',
        '?',
        '/',
      ],
      passwordLength: 15,
      passwordOne: '',
      passwordTwo: '',
    };
  },
  methods: {
    generateRandomCharacter() {
      return this.characters[
        Math.floor(Math.random() * this.characters.length)
      ];
    },
    generateRandomPassword() {
      let randomPassword = '';
      for (let i = 0; i < this.passwordLength; i++) {
        randomPassword += this.generateRandomCharacter();
      }
      return randomPassword;
    },
    generatePasswords() {
      this.passwordOne = this.generateRandomPassword();
      this.passwordTwo = this.generateRandomPassword();
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 1em auto;
  background: #1f2937;

  padding: 2em 2em 5em 3em;
  border-radius: 5px;
}

h2 {
  margin-bottom: 0;
  color: white;
  font-weight: 700;
  font-size: 3rem;
}
p {
  color: lightgray;
  font-size: 1.6rem;
  margin-top: 20px;
}
button {
  background: #10b981;
  color: white;
  border: none;
  padding: 13px 22px;
  font-size: 1.3rem;
  border-radius: 0.4rem;
  margin: 40px 0 40px 0;
  cursor: pointer;
}
button:hover {
  background: #12dd9a;
}
span {
  color: #10b981;
  display: block;
}
.passwords {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 40px;
  border-top: 1px solid #273549;
}

.password-field {
  width: 200px;
  height: 25px;
  padding: 5px 15px;
  font-size: 1.2rem;
  border-radius: 0.4rem;
  color: #10b981;
  background: #233042;
  text-align: center;
}

.password-field:hover {
  background-color: #273549;
  cursor: copy;
}
</style>
