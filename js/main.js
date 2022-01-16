const app = Vue.createApp({
  data: () => ({
    newItem: "",
  }),
  methods: {
    addItem(event) {
      alert("Clicked!");
    },
  },
});
app.mount("#app");
