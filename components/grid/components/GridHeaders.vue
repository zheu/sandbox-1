<script>
export default {
  render() {
    return <tr>{this.$scopedSlots.default({})}</tr>;
  }
};
</script>
