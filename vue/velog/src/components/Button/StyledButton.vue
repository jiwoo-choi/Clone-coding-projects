<template>
    <button @click="$emit('btc')" >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "styled-button",
}
</script>

<style scoped>
    button {
        background:black;
        border-radius:20px;
        color:white;
        padding:10px 15px;
        font-weight:bold;
    }

</style>