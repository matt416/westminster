<template>
	<div class="block" :style="set_position" @mouseover="mouseover()" @mouseout="mouseout()">
		<h2>{{ block.title }}</h2>
		<ul>
			<action v-for="(action, index) in block.lines" :key="index" :action="action"></action>
			<!--li v-if="is_hover">Add new</li-->
		</ul>
	</div>
</template>

<script>

import Action from "./Action"

export default {
	name : "Block",
	components : { Action },
	props : {
		block : Object
	},

	data(){
		return {

			is_hover : false


		}
	},

	computed : {

		set_position(){

			return ""//return "top:20px;left:20px;position:absolute;"

		}

	},

	methods : {
		mouseover(){
			this.is_hover = true
		},
		mouseout(){
			this.is_hover = false
		}
	}

	// created(){

	// 	console.log(this.block);

	// }
}

</script>
