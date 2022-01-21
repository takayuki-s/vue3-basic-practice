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
    basePrice: 100,
    km: 0,
    m: 0,
    firstName: "",
    lastName: "",
    // fullName: "",
    colors: [{ name: "Red" }, { name: "Green" }, { name: "Blue" }],
    items: null,
    keyword: "",
    wordMessage: "",
  }),
  watch: {
    message(newValue, oldValue) {
      console.log("new: %s, old: %s", newValue, oldValue);
    },
    km(value) {
      this.km = value;
      this.m = value * 1000;
    },
    m(value) {
      this.km = value / 1000;
      this.m = value;
    },
    // firstName(value) {
    //   this.fullName = value + " " + this.lastName;
    // },
    // lastName(value) {
    //   this.fullName = this.firstName + " " + value;
    // },
    colors: {
      handler(newValue, oldValue) {
        console.log("Update!");
      },
      deep: true,
    },
    keyword(newKeyword, oldKeyword) {
      console.log(newKeyword);
      this.wordMessage = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    },
  },
  mounted() {
    // this.keyword = "JavaScript";
    // this.getAnswer();
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000);
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
    taxIncludedPrice: {
      get() {
        return this.basePrice * 1.1;
      },
      set(value) {
        this.basePrice = value / 1.1;
      },
    },
    computedNumber() {
      return Math.random();
    },
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
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
    reversedMessageMethod() {
      return this.message.split("").reverse().join("");
    },
    methodsNumber() {
      return Math.random();
    },
    onClick(event) {
      this.colors[1].name = "White";
    },
    getAnswer() {
      if (this.keyword === "") {
        console.log("karamoji");
        this.items = null;
        return;
      }
      this.wordMessage = "Loading...";
      const vm = this;
      const params = { page: 1, per_page: 20, query: this.keyword };
      axios
        .get("https://qiita.com/api/v2/items", { params })
        .then((response) => {
          // console.log(response);
          vm.items = response.data;
        })
        .catch((error) => {
          vm.wordMessage = "Error!" + error;
        })
        .finally(() => {
          vm.wordMessage = "";
        });
    },
  },
});
app.mount("#app");
