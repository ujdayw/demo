<template>
  <div class="search-bar">
    <input v-model="keyword" placeholder="输入关键词搜索">
    <button @click="search">搜索</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', this.keyword)
    }
  }
}
</script>