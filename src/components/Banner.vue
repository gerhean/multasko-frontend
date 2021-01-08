<template lang="pug">
    .banner
        .date {{ data.date }}
        .border-line
        .holder
            Note(v-for="(note, idx) in data.memos"
                :note="note"
                :key="idx"
            )
</template>

<script>
import Note from './Note.vue';
export default {
  name: 'Banner',
  components: {
      Note,
  },
  props: {
      data: Object, 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner {
    margin: 4rem 2rem;
    .date {
        font-size: 32px;
        font-family: Futura;
        text-transform: uppercase;
        margin-left: 1rem;
        margin-right: 1rem;
        padding: 1rem;
    }
    .border-line {
        margin: 0 1rem;
        border-bottom: solid lightgrey;
        border-width: thin;
        width: 25rem;
    }
    .holder {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
