export default {
    data() {
      return {
        readList: JSON.parse(sessionStorage.getItem('readList')) || []
      };
    },
    watch: {
      readList: {
        handler(newVal) {
          sessionStorage.setItem('readList', JSON.stringify(newVal));
        },
        deep: true
      }
    },
    methods: {
      addToreadList(item) {
        this.readList.push(item);
      }
    }
  };
  