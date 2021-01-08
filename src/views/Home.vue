<template>
    <div class="home">
        <Banner v-for="(data, idx) in multaskoHomeData.data"
            :data="data"
            :isCategories="false"
            :key="idx"
        />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import service from '../services/initData'; 

export default {
  name: 'Home',
  components: {
      Banner,
  },
  data() {
      return {
          multaskoHomeData: service.multaskoHomeData,
      }
  },
}
</script>

<style scoped>
.home {
    width: 100%;
}
</style>
