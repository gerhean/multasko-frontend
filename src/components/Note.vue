<template lang="pug">
.note
    .note-content {{ topNote.content }}
    .holder
        .priorities priorities
        // check priority level and assign class accordingly for css color
        .priority(:class=`{
				'low': topNote.priorityLevel == 0,
				'medium': topNote.priorityLevel == 1,
				'high': topNote.priorityLevel == 2,
			}`
		)
        apexchart(type="donut", width="380",
            :options="chartOptions", :series="chartData")
        .timestamp {{ topNote.timestamp }}
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Note',

  data: function () {
    return {
      chartOptions: {
        chart: {
          width: 380,
          type: 'donut',
        },
        dataLabels: {
          enabled: false
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
        fill: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        }
      },
    }
  },

  components: {
    apexchart: VueApexCharts,
  },

  props: {
      notes: Array, 
  },

  computed: {
    topNote: function () {
      return this.notes[this.notes.length - 1]
    },

    chartData: function () {
      const data = [0, 0, 0];
      for (const note in this.notes) {
          data[note.priorityLevel] += 1;
      }
      return data;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/mixin.scss";

.note {
    position: relative;
    width: 250px;
    height: 250px;
    background-color: $note-color;
    padding: 1rem;
    margin-top: 2rem;
    margin-right: 2rem;
    overflow: hidden;
    border-radius: 12px 12px 12px 0px;
    .note-content {
        font-size: 14px;
        text-align: justify;
        color: rgb(110, 110, 110);
    }
    .holder {
        .priorities {
            position: absolute;
            left: 20px;
            bottom: 20px;
            z-index: 2;
        }
        .priority {
            position: absolute;
            bottom: 35px;
            right: 0;
            z-index: 2;
            height: 20px;
            width: 70px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
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
        .timestamp {
            font-size: 12px;
            font-weight: 500;
            color: rgb(146, 146, 146);
            position: absolute;
            bottom: 10px;
            right: 10px;
            z-index: 2;
        }
    }
}

.note:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-width: 0 16px 16px 0;
    border-style: solid;
    border-color: white $note-color-dark; 
}

.note::after {
    display: flex;
    justify-content: center;
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 130px;
    background: linear-gradient(transparent, $note-color 50%);
    z-index: 1;
}
</style>
