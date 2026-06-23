/*
*insisde the script tag we declare the imports
*and the component logic
*/
<script setup>
       const developer = {
        name: "Alexandra KEDJU",
        role: "Full Stack Developer",
        country: "KINSHASA-DRC"
       };
       </script>

       /*
       *Inside the template tag we declare the 
       * elements inside the component
       */

       

       <template>
        <div class="profile-card">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nrgLYLwTSL_wEKgcHXc1n9pqbS640QUeinVF_gQkEA&s"
                alt="Profile picture"
            >
             
            <h2>{{ developer.name }}</h2>
            <p>{{ developer.role }}</p>
            <span>{{ developer.country }}</span>
        </div>
       </template>