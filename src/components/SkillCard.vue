<script setup>
defineProps(
    {
        skill: Object
    }
);

</script>

<template>

     <div class="skill-card">

        <h2>{{ skill.name }}</h2>

        <h3>{{ skill.category }}</h3>

        <p>{{ skill.level }}</p>

     </div>

</template>