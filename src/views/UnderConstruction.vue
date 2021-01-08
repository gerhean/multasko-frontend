<template>
  <div class="under-construction">
	<i class="mdi mdi-48px mdi-cog"/>
	<div>This page is under construction!</div>
	<div>We promise to bring it to you as soon as possible.</div>
	<div>Stay tuned!</div>
  </div>
</template>

<script>
export default {
  name: 'UnderConstruction',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.under-construction {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	font-weight: 600;
	width: 100%;
	div {
		margin-bottom: 1rem;
	}
}
</style>
