const app = Vue.createApp({
  data: () => ({
    newItem: "",
    todos: [],
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
  },
});
app.mount("#app");
