<template>
    <div class="categories">
        <div class="list-of-categories">
            <div class="category-tag" 
                v-for="(category, idx) in multaskoListOfCategories"
                :key="idx"
            >
                <span class="tag is-dark is-rounded is-large"> 
                    {{ category }}
                    <i class="mdi mdi-16px mdi-close" style="margin-left: 0.5rem" @click="confirmDeleteCategory(category)"/> 
                </span>
            </div>
            <span class="tag is-info is-rounded is-large category-tag add-category" @click="openAddCategory"> 
                Add Category 
                <i class="mdi mdi-16px mdi-plus" style="margin-left: 0.5rem"/>
            </span>
        </div>
        <Banner v-for="(data, idx) in multaskoCategoriesData.data"
            :data="data"
            :isCategories="true"
            :key="idx"
        />

        <transition name="add-category-panel-transition">
            <div v-if="isAddingCategory" class="add-category-panel modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">What categories interest you?</p>
                        <button class="delete" aria-label="close" @click="closeAddCategory"></button>
                    </header>
                    <section class="modal-card-body">
                        <textarea class="add-category-content" v-model="addCategoryName" placeholder="Don't be shy, list them here!"/>
                    </section>
                    <section class="modal-card-body">
                        <div class="add-category-instructions"> List the categories with a <strong>comma</strong> seperating them! </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success is-light is-outlined is-rounded" @click="postCategory">
                            Add them!
                        </button>
                        <button class="button is-warning is-light is-outlined is-rounded" @click="closeAddCategory">
                            Cancel
                        </button>
                    </footer>
                </div>
            </div>
        </transition>
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
          multaskoListOfCategories: service.multaskoListOfCategories,
          multaskoCategoriesData: service.multaskoCategoriesData,
          isAddingCategory: false,
          addCategoryName: '',
      }
  },
  methods: {
      postCategory() {
          console.log(this.addCategoryName);
          this.closeAddCategory();
      },
      openAddCategory() {
          this.isAddingCategory = true;
      },
      closeAddCategory() {
          this.addCategoryContent = '';
          this.isAddingCategory = false;
      },
      deleteCategory(category) {
          console.log(category);
      },
      confirmDeleteCategory(category) {
          this.$buefy.dialog.confirm({
                title: `Deleting "${category}" category`,
                message: 'Are you sure you want proceed?\n This action cannot be undone.',
                confirmText: 'Delete',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: () => this.deleteCategory(category), 
          })
      },
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.categories {
    width: 100%;
    .list-of-categories {
        display: flex;
        flex-wrap: wrap;
        padding: 2rem 2rem 0rem 2rem;
        text-transform: lowercase;
        .category-tag {
            margin-right: 0.5rem;
            opacity: 0.9
        }
        .category-tag:hover {
            cursor: pointer;
            opacity: 1;
        }
    }
}

.add-category-panel {
    .modal-card {
        .add-category-content {
            border: none;
            font-size: 18px;
            color: $written-words;
            width: 100%;
            height: 400px;
        }
        .add-category-instructions {
            font-weight: bold;
            padding-bottom: 0.5rem;
        }
    }
    textarea {
        resize: none;
    }
    textarea:focus {
        outline: none;
    }
}

.add-category-panel-transition-enter-active {
    transition: all 0.3s ease;
}

.add-category-panel-transition-enter, .add-category-panel-transition-leave-to {
    transform: translateY(-15px);
    opacity: 0;
}

</style>
