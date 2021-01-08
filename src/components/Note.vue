<template>
	<div class="note">
		<div class="note-content">{{ topNote.text }}</div>
		<div v-if="hasOnlyOneNote" class="priority-one-note" 
			:class="{
				'low': topNote.priority_level == 0,
				'medium': topNote.priority_level == 1,
				'high': topNote.priority_level == 2,
			}"
		>
		</div>
		<apexchart v-else class="priority-multiple-notes" type="donut" width="90" :options="chartOptions" :series="chartData"></apexchart>
		<div class="note-count"> {{ notes.length }} </div>
		<div class="timestamp">{{ topNote.date_posted[1] | formatTime }}</div>
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
  },

  computed: {
	hasOnlyOneNote: function() {
		return this.notes.length == 1;
	},
    topNote: function () {
      return this.notes[this.notes.length - 1]
    },

    chartData: function () {
      const data = [0, 0, 0];
      for (const note of this.notes) {
          data[note.priority_level] += 1;
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
	z-index: 1;
	.note-content {
		font-size: 14px;
		text-align: justify;
		color: $written-words; 
	}
	.priority-one-note {
		position: absolute;
		bottom: 35px;
		right: 0;
		z-index: 3;
		height: 20px;
		width: 80px;
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
	.priority-multiple-notes {
		position: absolute;
		top: 190px;
		left: 0px;
		z-index: 3;
	}
	.note-count {
		font-size: 12px;
		font-weight: 500;
		color: rgb(146, 146, 146);
		position: absolute;
		top: 220px;
		right: 10px;
		z-index: 3;
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

.note-stack {
	width: 250px;
	height: 30px;
	background-color: $note-color;
	border-radius: 12px 12px 12px 0px;
	z-index: 1;
	.corner {
		position: absolute;
		bottom: 100;
		left: 0;
		border-width: 0 16px 16px 0;
		border-style: solid;
		border-color: white $note-color-dark; 
	}
}

note-stack-one {
	position: absolute;
	top: 280px;
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
	height: 140px;
	background: linear-gradient(transparent, $note-color 50%);
	z-index: 1;
}
</style>
