<script setup>
defineProps(
    {
        technology:Object 
    }
);
</script>

<template>
    <div clas="tech-card">
        <h3>{{ technology.name }}</h3>
        <p>{{ technology.level }}</p>

    </div>
</template>