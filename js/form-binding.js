const app = Vue.createApp({
  data: () => ({
    message: "Hello Vue.js",
    checked: false,
    colors: [],
    color: "",
    selected: "",
    selections: "",
    lazyMessage: "",
    trimMessage: "",
  }),
});
app.mount("#app");
