
<script>
  /**
   * 调试输出
   */

  export default {
    data() {
      return {

      }
    },
    props: ['log', 'info', 'warn', 'error'],
    mounted() {
      if ('log' in this) {
        console.log(this.log);
      }
      if ('info' in this) {
        console.info(this.info);
      }
      if ('warn' in this) {
        console.warn(this.warn);
      }
      if ('error' in this) {
        console.error(this.error);
      }
    }
  }
</script>
