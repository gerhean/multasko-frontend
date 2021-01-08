<template lang="pug">
    .layout
        .side-panel
            .multasko MULTASKO
            .search
                .field
                    .control.has-icons-left
                        input.input.is-info(type="text")
                        span.icon.is-left
                            i.mdi.mdi-18px.mdi-magnify
            aside.menu
                ul.menu-list
                    router-link(to="/")
                        li
                            a
                                i.mdi.mdi-24px.mdi-home
                                span &nbsp; Home
                    router-link(to="/categories")
                        li
                            a
                                i.mdi.mdi-24px.mdi-folder
                                span &nbsp; Categories
                    router-link(to="/calendar")
                        li
                            a
                                i.mdi.mdi-24px.mdi-calendar
                                span &nbsp; Calendar
                    router-link(to="/transfer")
                        li
                            a
                                i.mdi.mdi-24px.mdi-swap-horizontal
                                span &nbsp; Transfer
                    router-link(to="/analytics")
                        li
                            a
                                i.mdi.mdi-24px.mdi-google-analytics
                                span &nbsp; Analytics
                    router-link(to="/settings")
                        li
                            a
                                i.mdi.mdi-24px.mdi-cogs
                                span &nbsp; Settings
        
        router-view

        i.add-memo.mdi.mdi-36px.mdi-plus-circle-outline(@click="toggleAddMemo")

        .modal(:class="{'is-active': isAddingMemo}")
            .modal-background(@click="toggleAddMemo")
            .modal-card
                header.modal-card-head
                    p.modal-card-title Modal title
                    button.delete(aria-label="close" @click="toggleAddMemo")
                section.modal-card-body <!-- Content ... -->
                footer.modal-card-foot
                button.button.is-success Save changes
                button.button(@click="toggleAddMemo") Cancel
</template>

<script>
export default {
  name: 'Render',
  data() {
      return {
          isAddingMemo: false,
      }
  },
  methods: {
      toggleAddMemo() {
          this.isAddingMemo = !this.isAddingMemo;
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/mixin.scss";

.layout {
    display: flex;
    position: relative;
}

.side-panel {
    position: sticky;
    top: 0;
    height: 100vh;
    text-align: center;
    background-color: $side-panel-bg-color;
    min-width: 22rem;
    padding: 2rem 0;
    border-right: 0.5px solid #9b9691;
    .multasko {
        color: $side-panel-word-color;
        font-weight: bold;
        font-size: 24px;
        letter-spacing: 5px;
        padding-bottom: 1rem;
    }
    .search {
        padding: 1rem 2rem;
        .input {
            background-color: $side-panel-search-bg-color;
            color: $side-panel-word-color;
            border: 0;
            border-radius: 15px;
        }
    }
    .menu {
        font-size: 18px;
        padding: 2rem 0rem;
    }
}

.add-memo {
    position: sticky;
    top: 25px;
    right: 25px;
    height: 100%;
    opacity: 0.5;
}

.add-memo:hover {
    opacity: 0.8;
    cursor: pointer;
}

</style>
