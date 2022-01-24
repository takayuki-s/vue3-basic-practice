const app = Vue.createApp({
  data: () => ({
    counter: 0,
  }),
  methods: {
    clickHandler() {
      this.counter++;
    },
  },
});
app.mount("#app");
