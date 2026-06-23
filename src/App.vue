<script setup>
import { ref, computed} from "vue";

import ProfileCard from "./componemts/ProfileCard.vue";
import StatsCard from "./components/StatsCard.vue";
import TechCard from "./components/TechCard.vue";

import { technologies } from "./data/technologies";

const search = ref("");

const filterTechnologies = computed(() => {
    return technologies.filter((tech) =>
    tech.name.toLowerCase().includes(
        search.value.toLowerCase()
    )
  );
});
</script>

<template>
    
    <div class="container">
        <header class="her">
            <h1>Vue Developer Dashboard</h1>

            <p>Building modern interface with Vue.js</p>

        </header>

        <section class=""top-section>

            <profileCard />

            <div class="stats-gride">
                
                <StatsCard
                titile="Projects"
                :value="12"
                />

                <StatsCard
                titile="Students"
                :value="150"
                />

                <StatsCard
                titile="Years of experiance"
                :value="3"
                />

            </div>

        </section>

        <section class="search-section">

            <input
                  v-model="search"
                  type="text"
                  placeholder="Search technology..."
            >
        </section>

            <section class="tech-grid">
                <TechCard
                v-for="tech in filterTechnologies"
                :key="tech.id"
                :technology="tech"
                />

        </section>
    </div>

</template>
