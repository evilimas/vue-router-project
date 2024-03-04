<template>
  <div>
    <h1>Available Positions</h1>
    <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="job">
        <router-link
          :to="{ name: 'jobDetails', params: { id: job.id } }"
          class="job-link"
          :job="job"
        >
          <h2>{{ job.title }}</h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      <h3>Loading jobs....</h3>
    </div>
  </div>
</template>

<script>
import JobDetails from './JobDetails.vue';

export default {
  components: { JobDetails },
  data() {
    return {
      jobs: [
        { title: 'UX Designer', id: 1, details: 'lorem' },
        { title: 'Front-end Developer', id: 2, details: 'lorem' },
        { title: 'Back-end Developer', id: 3, details: 'lorem' },
      ],
    };
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>
