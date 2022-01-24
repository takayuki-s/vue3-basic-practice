const app = Vue.createApp({
  data: () => ({
    counter: 0,
    message: "",
  }),
  methods: {
    clickHandler(event) {
      this.counter++;
      console.log(event.target); //<button>Click2</button>
      console.log(event.target.tagName); //BUTTON
      console.log(event.target.innerHTML); // Click2
      console.log(event.target.type); //submit
      console.log(event.target.id); //btn
    },
    clickHandler2($event, message) {
      this.message = message;
      console.log($event);
    },
  },
});
app.mount("#app");
