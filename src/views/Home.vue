<template>
    <div class="home">
        <Banner v-for="(data, idx) in multaskoData.data"
            :data="data"
            :key="idx"
        />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import multaskoData from '../services/initData'; 

export default {
  name: 'Home',
  components: {
      Banner,
  },
  data() {
      return {
          multaskoData: multaskoData,
      }
  },
}
</script>

<style scoped>
.home {
    width: 100%;
}
</style>
