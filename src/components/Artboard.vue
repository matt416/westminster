<template>
	<div class="artboard">
		
		<Block v-for="(block, index) in blocks" :key="index" :block="block"></Block>

	</div>
</template>

<script>

import Block from "./Block.vue"


export default {
	name: 'Artboard',
	components : { Block },

	computed : {

		blocks() {
			
			return this.$store.state.blocks

		}

	}

}
</script>
