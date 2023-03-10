<script setup>
    defineProps(['modelValue']);
    defineEmits(['update:ModelValue']);
</script>

<template>
    <input 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>