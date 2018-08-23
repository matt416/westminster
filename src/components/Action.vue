<template>
	<li :class="has_event" @click="toggle_edit_state">
		<template v-if="!editing">{{ title }}</template>
		<input v-model="action.title" ref="field" type="text" v-show="editing" @blur="toggle_edit_state(false)" @keypress.enter="next" />
	</li>
</template>

<script>

export default {
	name : "Action",
	props : { action : [Object, String] },
	data(){
		return {
			editing : false
		}
	},
	mounted() {

	},
	computed : {
		has_event(){

			if (this.action.event) 
				return ['has_event', `event-type_${this.action.event}`]

			return false
		},

		title(){

			return this.action.title;


		}

	},

	methods : {

		toggle_edit_state(state = true){

			this.editing = state//!this.editing
			
			this.$nextTick(function(){this.$refs.field.focus()})
			
		},

	}
}

</script>