<template>
  <div v-if="job">
    <h1>Job Details</h1>
    <h2>The job title is {{ job.title }}</h2>
    <p>The job id is {{ job.id }}</p>
    <p>The job details are {{ job.details }}</p>
  </div>
  <div v-else>
    <h3>Loading job details....</h3>
  </div>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
};
</script>
