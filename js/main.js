const app = Vue.createApp({
  data: () => ({
    newItem: "",
    todos: [],
  }),
  methods: {
    addItem(event) {
      alert("Clicked!");
      let todo = {
        item: this.newItem,
      };
      this.todos.push(todo);
    },
  },
});
app.mount("#app");
