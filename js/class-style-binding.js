const app = Vue.createApp({
  data: () => ({
    isLarge: true,
    hasError: true,
    largeClass: "large",
    dangerClass: "text-danger",
    classObject: {
      large: true,
      "text-danger": true,
    },
    largeClassObject: {
      large: true,
      "bg-gray": true,
    },
    color: "blue",
    fontSize: 36,
    styleObject: {
      color: "blue",
      fontSize: "48px",
    },
  }),
});
app.mount("#app");
