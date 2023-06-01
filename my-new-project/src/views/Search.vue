<template>
  <div class="search">
    <search-bar @search="onSearch"/>
    <div v-if="objects.length > 0">
      <h2>搜索结果</h2>
      <div class="objects">
        <div
            v-for="object in objects"
            class="object"
            @click="goToDetail(object)">
          <img :src="object.primaryImageSmall || null" :alt="object.title">
          <div class="details">
            <p class="title">{{object.title}}</p>
            <p class="date">{{object.objectDate}}</p>
          </div>
        </div>
      </div>
      <paginate
          :page-count="pageCount"
          :click-handler="fetchData"
          :prev-text="'上一页'"
          :next-text="'下一页'"/>
    </div>
    <div v-else>
      <h2>未搜索到相关藏品</h2>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

export default {
  data() {
    return {
      objects: [],
      pageCount: 0,
      currentPage: 1
    }
  },
  components: {
    SearchBar,
    Paginate
  },
  methods: {
    onSearch(keyword) {
      this.searchObjects(keyword, this.currentPage)
    },
    goToDetail(object) {
      this.$router.push(`/object/${object.objectID}`);
    },
    fetchData(pageNum) {
      this.currentPage = pageNum;
      this.searchObjects(this.$route.query.q, this.currentPage);
    }
  }
}
</script>