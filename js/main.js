const app = Vue.createApp({
  data: () => ({}),
  methods: {
    addItem(event) {
      alert("Clicked!");
    },
  },
});
app.mount("#app");
