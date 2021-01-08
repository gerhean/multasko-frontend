<template>
    <div class="home">
        <Banner v-for="(data, idx) in foundMemos"
            :data="data"
            :isCategories="false"
            :key="idx"
        />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import { searchMemo } from '../services/initData'; 

export default {
  name: 'Home',
  components: {
      Banner,
  },
  computed: {
    foundMemos: function() {
      return searchMemo(this.$route.query.search);
    },
  }
}
</script>

<style scoped>
.home {
    width: 100%;
}
</style>
