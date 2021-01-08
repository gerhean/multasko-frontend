<template>
    <div class="home">
        <Banner v-for="(data, idx) in foundMemos"
            :data="data"
            :isCategories="false"
            :key="idx"
			@viewnote="emitOpenNoteViewerSearch"
        />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import { searchMemo } from '../services/initData'; 

export default {
  name: 'Search',
  components: {
      Banner,
  },
  computed: {
    foundMemos: function() {
      return searchMemo(this.$route.query.search);
	},
  },
  methods: {
	emitOpenNoteViewerSearch(data) {
		// console.log('emit search open note view');
		this.$emit('viewnote', data);
	},
  },
}
</script>

<style scoped>
.home {
    width: 100%;
}
</style>
