const app = Vue.createApp({
  data: () => ({
    isLarge: true,
    hasError: true,
    largeClass: "large",
    dangerClass: "text-danger",
  }),
});
app.mount("#app");
