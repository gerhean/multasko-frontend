<template>
    <div class="wrapper">

        <div class="note" :class="{'normal-note': !isView, 'view-note': isView}" @click="emitOpenNoteViewerNote">
            <div class="note-content">
                {{ topNote.text }}
                <div class="note-summary" v-if="topNote.summary != null && topNote.summary.length > 0"> 
                    Summary:
                    <div class="holder" style="margin-bottom: 0.1rem"></div>
                    <div
                        class="phrase"
                        v-for="(phrase, idx) in topNote.summary"
                        :key="idx"
                    >
                        {{ phrase.trim() }}
                    </div>
                </div>
            </div>
            <div v-if="hasOnlyOneNote" class="priority-one-note" 
                :class="{
                    'low': topNote.priority_level == 0,
                    'medium': topNote.priority_level == 1,
                    'high': topNote.priority_level == 2,
                }"
            >
            </div>
            <apexchart v-else class="priority-multiple-notes" type="donut" width="90" :options="chartOptions" :series="chartData"></apexchart>
            <div class="note-count-wrapper">
                <div v-if="!hasOnlyOneNote" class="note-count"> {{ notes.length }} Notes </div>
            </div>
            <div class="timestamp">{{ topNote.date_posted[1] | formatTime }}</div>
        </div>

        <!-- hacky memo stack implementation -->
        <div v-for="(pad,index) in getStackNum" :key="`pad-${index}`" style="position:absolute;top:0">
            <div class="note" v-bind:style="{top: pad[0],zIndex:pad[1]}">
            </div>
        </div>

    </div>

<!-- - .note-container
-   // https://stackoverflow.com/questions/7324722/cut-corners-using-css 
-   .note-stack.note-stack-one
-     .corner -->

</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import filters from '../filters';

const formatTime = filters.formatTime;

export default {
  name: 'Note',
  filters: {
    formatTime,
  },
  data: function () {
    return {
      isViewingNotes: false,
      chartOptions: {
        stroke: {
         colors:['#efe9cc']
        },
        dataLabels: {
          enabled: false,
        },
        labels: ['Low', 'Medium', 'High'],
        fill: {
          colors: ['#79DE79', '#FFE662', '#FB6962']
        },
        plotOptions: {
          pie: {
            donut: {
              size: '40%'
            }
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          show: false
        },
      },
    }
  },

  components: {
    apexchart: VueApexCharts,
  },

  props: {
      notes: Array, 
      isView: Boolean,
  },

  computed: {
    hasOnlyOneNote: function() {
        return Array.isArray(this.notes) ? this.notes.length == 1 : true;
    },
    topNote: function () {
      return Array.isArray(this.notes) ? this.notes[this.notes.length - 1] : this.notes
    },

    chartData: function () {
      const data = [0, 0, 0];
      for (const note of this.notes) {
          data[note.priority_level] += 1;
      }
      return data;
    },
	getStackNum: function() {
        let toRet = []
            let offset = 10
            for(let i = 1; i < this.notes.length && i < 3; i += 1){
                toRet.push([(offset * i).toString() + "px", -i])
            }
            return toRet
	},
  },
  methods: {
      emitOpenNoteViewerNote() {
        //   console.log('emit note open');
          if (Array.isArray(this.notes)) {
            this.$emit('viewnote', this.notes);
          } else {
            this.$emit('viewnote', [this.notes]);
          }
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/mixin.scss";

.note-summary {
    margin: 0.5rem 0rem;
    font-weight: 600;
    .phrase {
        margin: 0.125rem 0rem;
    }
}

.wrapper {
    position: relative;
}

.normal-note {
    overflow: hidden;
}

.view-note {
    padding: 0rem 0rem 3rem 0rem;
    overflow: visible;
    .note-content {
        height: 180px;
        overflow: scroll;
    }
}

.note {
    position: relative;
    background-color: $note-color;
    width: 250px;
    height: 250px;

    background:
        linear-gradient(45deg, transparent 50%, $note-color-dark 50%),
        linear-gradient(45deg, $note-color, $note-color),
        linear-gradient(135deg, $note-color, $note-color),
        linear-gradient(45deg, transparent 11px, $note-color 10px);
    background-size: 15px 15px, 0 0, 0 0, 100% 100%;
    background-position: 0 100%, 0 0, 100% 100%, 100% 0;
    background-repeat: no-repeat;
	filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.21)) drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.11));

    padding: 1rem;
    margin-top: 2rem;
    margin-right: 2rem;
    // overflow: hidden;
    border-radius: 12px 12px 12px 0px;
    z-index: 1;
    opacity: 0.9;
    .note-content {
        font-size: 14px;
        text-align: justify;
        color: $written-words; 
    }
    .priority-one-note {
        position: absolute;
        top: 200px;
        left: 0;
        z-index: 3;
        height: 20px;
        width: 80px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .high {
        background-color: $note-priority-high;
    }
    .medium {
        background-color: $note-priority-medium;
    }
    .low {
        background-color: $note-priority-low;
    }
    .priority-multiple-notes {
        position: absolute;
        top: 190px;
        left: 0px;
        z-index: 3;
    }
    .note-count-wrapper {
        // wrapper to centralize note-count
        // display: flex;
        // justify-content: center;
        // width: 100%;
        .note-count {
            font-size: 14px;
            font-weight: 600;
            color: rgb(146, 146, 146);
            position: absolute;
            top: 185px;
            right: 0px;
            // bottom: 0px;
            z-index: 3;
            background-color: lightgrey;
            padding: 0rem 0.5rem;
        }
    }
    .timestamp {
        font-size: 12px;
        font-weight: 500;
        color: rgb(146, 146, 146);
        position: absolute;
        top: 220px;
        right: 10px;
        z-index: 3;
    }   
}

.normal-note:hover {
    cursor: pointer;
    opacity: 1;
}

// .note-stack {
//     width: 250px;
//     height: 30px;
//     background-color: $note-color;
//     border-radius: 12px 12px 12px 0px;
//     z-index: 1;
//     .corner {
//         position: absolute;
//         bottom: 100;
//         left: 0;
//         border-width: 0 16px 16px 0;
//         border-style: solid;
//         border-color: white $note-color-dark; 
//     }
// }
// note-stack-one {
//     position: absolute;
//     top: 280px;
// }

// old memo bottom left fold
// .note:before {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     border-width: 0 16px 16px 0;
//     border-style: solid;
//     border-color: white $note-color-dark; 
// }

.normal-note::after {
    display: flex;
    justify-content: center;
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 150px;
    background: linear-gradient(transparent, $note-color 50%);
    z-index: 1;
}

</style>
