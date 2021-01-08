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
import { multaskoHomeData, searchMemo } from '../services/initData'; 

export default {
  name: 'Home',
  components: {
      Banner,
  },
  data() {
      return {
          multaskoHomeData: multaskoHomeData,
      }
  },
  computed: {
    foundMemos: function() {
      return searchMemo(this.$route.query);
    },
  }
}
</script>

<style scoped>
.home {
    width: 100%;
}
</style>
