<template>
  <div class="categories">
        <Banner v-for="(data, idx) in multaskoCategoriesData.data"
            :data="data"
            :isCategories="true"
            :key="idx"
        />
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import service from '../services/initData';

export default {
  name: 'Categories',
  components: {
    Banner,
  },
  data() {
      return {
          multaskoCategoriesData: service.multaskoCategoriesData,
      }
  },
}
</script>

<style scoped>
.categories {
    width: 100%;
}
</style>
