<template>
    <button @click="$emit('btc')" >
    </button>
</template>

<script>
export default {
    name: "icon-button",
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