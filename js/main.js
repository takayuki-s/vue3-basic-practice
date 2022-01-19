const app = Vue.createApp({
  data: () => ({
    newItem: "",
    todos: [],
    message: "Hello Vue.js!",
    number: 100,
    ok: true,
    preMessage: "Hello Vue.js! v-pre practice!",
    htmlMessage:
      'Hello <span style="color: red">Vue.js!</span> v-html practice!',
    cloakMessage: "Hello Vue.js! v-cloak practice!",
    textMessage: "Hello Vue.js! v-text practice!",
    url: "https://google.com",
    basePrice: 100,
    km: 0,
    m: 0,
  }),
  watch: {
    message(newValue, oldValue) {
      console.log("new: %s, old: %s", newValue, oldValue);
    },
    km(value) {
      this.km = value;
      this.m = value * 1000;
    },
    m(value) {
      this.km = value / 1000;
      this.m = value;
    },
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
    taxIncludedPrice: {
      get() {
        return this.basePrice * 1.1;
      },
      set(value) {
        this.basePrice = value / 1.1;
      },
    },
    computedNumber() {
      return Math.random();
    },
  },
  methods: {
    addItem(event) {
      if (this.newItem === "") return;
      let todo = {
        item: this.newItem,
        isDone: false,
      };
      this.todos.push(todo);
      this.newItem = "";
    },
    deleteItem(index) {
      this.todos.splice(index, 1);
    },
    clickHandler() {
      this.message = this.message.split("").reverse().join("");
    },
    reversedMessageMethod() {
      return this.message.split("").reverse().join("");
    },
    methodsNumber() {
      return Math.random();
    },
  },
});
app.mount("#app");
