export default {
  data() {
    return {
      timeout: '',
    };
  },
  methods: {
    deboundce(func, wait = 1000) {
      clearTimeout(this.timeout);
      setTimeout(func, wait);
    },
  },
};
