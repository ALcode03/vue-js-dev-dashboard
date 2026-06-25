<script setup>

import { ref, computed } from "vue";

import { skills } from "../data/skills";

const selectedSkill = ref("");

const skillList = ref([...skills]);

const searchList = ref ("");

const filteredSkills = computed(() => {
   
    return skillList.value.filter((skill) =>
        (!selectedSkill.value || skill.category === selectedSkill.value)&&
        skill.name.toLowerCase().includes(searchList.value.toLowerCase())
    );
});

</script>

<template>

    <section>

        <h1>Skills</h1>

    <input v-model="searchList" 
           type="text" 
           placeholder="Search here..."
    >


    <select v-model="selectedSkill">

         <option value="">
                All categories
            </option>
         
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="database">Datbase</option>
            <option value="devops">Devops</option>

    </select>
        
        <div class="skills-grid">
            <SkillCard v-for="skill in filteredSkills" :key="skill.id" :skill="skill" />

        </div>


    </section>

</template>