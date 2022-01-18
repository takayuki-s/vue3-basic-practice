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
  }),
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
  },
});
app.mount("#app");
