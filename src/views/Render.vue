<template>
    <div class="layout">
        <div class="side-panel"> 
            <div class="multasko">
                MULTASKO
            </div>
            <div class="search">
                <div class="field">
                    <div class="control has-icons-left">
                        <input class="input is-info" type="text">
                        <span class="icon is-left">
                            <i class="mdi mdi-18px mdi-magnify"></i>
                        </span>
                    </div>
                </div>
            </div>
            <aside class="menu">
                <ul class="menu-list">
                    <router-link to="/">
                        <li><a>
                            <i class="mdi mdi-24px mdi-home"></i>
                            &nbsp;
                            <span>Home</span>
                        </a></li>
                    </router-link>
                    <router-link to="/categories">
                        <li><a>
                            <i class="mdi mdi-24px mdi-folder"></i>
                            &nbsp;
                            <span>Categories</span>
                        </a></li>
                    </router-link>
                    <router-link to="/calendar">
                        <li><a>
                            <i class="mdi mdi-24px mdi-calendar"></i>
                            &nbsp;
                            <span>Calendar</span>
                        </a></li>
                    </router-link>
                    <router-link to="/transfer">
                        <li><a>
                            <i class="mdi mdi-24px mdi-swap-horizontal"></i>
                            &nbsp;
                            <span>Transfer</span>
                        </a></li>
                    </router-link>
                    <router-link to="/analytics">
                        <li><a>
                            <i class="mdi mdi-24px mdi-google-analytics"></i>
                            &nbsp;
                            <span>Analytics</span>
                        </a></li>
                    </router-link>
                    <router-link to="/settings">
                        <li><a>
                            <i class="mdi mdi-24px mdi-cogs"></i>
                            &nbsp;
                            <span>Settings</span>
                        </a></li>
                    </router-link>
                </ul>
            </aside>
        </div>

        <router-view/>

        <i class="add-memo mdi mdi-36px mdi-plus-circle-outline" @click="toggleAddMemo"/>

        <div class="modal" :class="{'is-active': isAddingMemo}">
            <div class="modal-background" @click="toggleAddMemo"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" aria-label="close" @click="toggleAddMemo"></button>
                </header>
                <section class="modal-card-body">
                <!-- Content ... -->
                </section>
                <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button" @click="toggleAddMemo">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
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
