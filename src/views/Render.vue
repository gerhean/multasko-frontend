<template>
    <div class="layout">
        <div class="side-panel"> 
            <div class="multasko">
                MULTASKO
            </div>
            <div class="search">
                <div class="field">
                    <div class="control has-icons-left">
                        <input class="input is-info" type="text" placeholder="Finding something?">
                        <span class="icon is-left">
                            <i class="mdi mdi-18px mdi-magnify" style="color: black"></i>
                        </span>
                    </div>
                </div>
            </div>
            <aside class="menu">
                <ul class="menu-list">
                    <div :class="{'is-active-view': selectedOption == 'home'}" @click="selectedOption = 'home'">
                        <router-link to="/">
                            <li><a>
                                <i class="mdi mdi-24px mdi-home"></i>
                                &nbsp;
                                <span>Home</span>
                            </a></li>
                        </router-link>
                    </div>
                    <div :class="{'is-active-view': selectedOption == 'categories'}" @click="selectedOption = 'categories'">
                        <router-link to="/categories">
                            <li><a>
                                <i class="mdi mdi-24px mdi-folder"></i>
                                &nbsp;
                                <span>Categories</span>
                            </a></li>
                        </router-link>
                    </div>
                    <div :class="{'is-active-view': selectedOption == 'calendar'}" @click="selectedOption = 'calendar'">
                        <router-link to="/calendar">
                            <li><a>
                                <i class="mdi mdi-24px mdi-calendar"></i>
                                &nbsp;
                                <span>Calendar</span>
                            </a></li>
                        </router-link>
                    </div>
                   <div :class="{'is-active-view': selectedOption == 'transfer'}" @click="selectedOption = 'transfer'"> 
                        <router-link to="/transfer">
                            <li><a>
                                <i class="mdi mdi-24px mdi-swap-horizontal"></i>
                                &nbsp;
                                <span>Transfer</span>
                            </a></li>
                        </router-link>
                    </div>
                    <div :class="{'is-active-view': selectedOption == 'analytics'}" @click="selectedOption = 'analytics'"> 
                        <router-link to="/analytics">
                            <li><a>
                                <i class="mdi mdi-24px mdi-google-analytics"></i>
                                &nbsp;
                                <span>Analytics</span>
                            </a></li>
                        </router-link>
                    </div>
                    <div :class="{'is-active-view': selectedOption == 'settings'}" @click="selectedOption = 'settings'"> 
                        <router-link to="/settings">
                            <li><a>
                                <i class="mdi mdi-24px mdi-cogs"></i>
                                &nbsp;
                                <span>Settings</span>
                            </a></li>
                        </router-link>
                    </div>
                </ul>
            </aside>
            <div class="profile">
                <i class="mdi mdi-48px mdi-account-circle"></i> 
                <span class="name"> {{ username }} </span>
            </div>
        </div>

        <transition appear name="change-view-transition">
            <router-view/>
        </transition>

        <i class="add-memo mdi mdi-36px mdi-plus-circle-outline" @click="openAddMemo"/>

        <transition name="add-memo-panel-transition">
            <div v-if="isAddingMemo" class="add-memo-panel modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Let's pen your thoughts, shall we?</p>
                        <button class="delete" aria-label="close" @click="closeAddMemo"></button>
                    </header>
                    <section class="modal-card-body">
                        <textarea class="add-memo-content" v-model="addMemoContent" placeholder="What are you thinking about?"/>
                    </section>
                    <section class="modal-card-body note-priority">
                        <div class="priority-text"> How important is this note? </div>
                        <div class="buttons has-addons priority-buttons">
                            <button class="button is-success" :class="{'is-outlined': selectedNotePriority != 0}" @click="selectedNotePriority = 0">
                                Low
                            </button>
                            <button class="button is-warning" :class="{'is-outlined': selectedNotePriority != 1}" @click="selectedNotePriority = 1">
                                Medium
                            </button>
                            <button class="button is-danger" :class="{'is-outlined': selectedNotePriority != 2}" @click="selectedNotePriority = 2">
                                High
                            </button>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success is-light is-outlined is-rounded" @click="postMemo">
                            Stick It On!
                        </button>
                        <button class="button is-info is-light is-outlined is-rounded" @click="addAnotherMemo">
                            Next!
                        </button>
                        <button class="button is-warning is-light is-outlined is-rounded" @click="closeAddMemo">
                            Never Mind!
                        </button>
                    </footer>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'Render',
  data() {
      return {
          isAddingMemo: false,
          addMemoContent: '',
          selectedNotePriority: 1,
          selectedOption: 'home',
          username: 'John Doe',
      }
  },
  methods: {
      postMemo() {
          console.log(this.addMemoContent);
          console.log(this.selectedNotePriority);
          this.closeAddMemo();
      },
      addAnotherMemo() {
          console.log(this.addMemoContent);
          console.log(this.selectedNotePriority);
          this.selectedNotePriority = 0;
          this.addMemoContent = '';
      },
      closeAddMemo() {
          this.selectedNotePriority = 0;
          this.isAddingMemo = false;
          this.addMemoContent = '';
      },
      openAddMemo() {
          this.isAddingMemo = true; 
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

.is-active-view {
    background-color: $side-panel-bg-dark-color;
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
        font-size: 32px;
        letter-spacing: 5px;
        padding-bottom: 1rem;
    }
    .search {
        padding: 1rem 2rem;
        .input {
            // background-color: $side-panel-search-bg-color;
            // color: $side-panel-word-color;
            border: 0;
            border-radius: 15px;
        }
    }
    .menu {
        font-size: 18px;
        padding: 2rem 0rem;
    }
    .profile {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        // left: 35px;
        bottom: 35px;
        width: 100%;
        color: white;
        opacity: 0.8;
        background-color: #69798a;
        .name {
            text-transform: uppercase;
            font-weight: 800;
            letter-spacing: 2px;
            padding-left: 0.5rem;
        }
    }
    .profile:hover {
        opacity: 1;
        cursor: pointer;
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

.add-memo-panel {
    .modal-card {
        .add-memo-content {
            border: none;
            font-size: 18px;
            color: $written-words;
            width: 100%;
            height: 400px;
        }
        .note-priority {
            padding-bottom: 1.5rem;
            .priority-text {
                font-weight: bold;
                padding-bottom: 0.5rem;
            }
        }
    }
    textarea {
        resize: none;
    }
    textarea:focus {
        outline: none;
    }
}

.add-memo-panel-transition-enter-active {
    transition: all 0.3s ease;
}

.add-memo-panel-transition-enter, .add-memo-panel-transition-leave-to {
    transform: translateY(-15px);
    opacity: 0;
}

.change-view-transition-enter-active {
    transition: all 1s ease;
}

.change-view-transition-enter, .change-view-transition-leave-to {
	transform: translateX(-40px);
	opacity: 0;
}

</style>
