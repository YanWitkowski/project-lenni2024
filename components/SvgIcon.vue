<template>
    <component
        v-if="iconPath"
        class="svg-icon"
        :is="iconPath"
        :width="width"
        :height="height">
        </component>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    height: {
        type: [String, Number],
        default: undefined
    },
    width: {
        type: [String, Number],
        default: undefined
    },
});

const iconPath = props.name ? defineAsyncComponent(() => import(`@/assets/svg-icons/${props.name}.svg`)) : null;
</script>
