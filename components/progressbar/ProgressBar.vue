<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "65", // Default size in pixels
  },
});
</script>

<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Circular track -->
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="rgba(1, 1, 1, 0.5)"
      stroke-width="4"
    ></circle>
    <!-- Animated spinning arc -->
    <circle
      class="progress-spinner"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
    ></circle>
  </svg>
</template>

<style>
/* Spinning arc animation */
.progress-spinner {
  stroke-dasharray: 125.6; /* Total circumference */
  stroke-dashoffset: 0;
  animation: spinner-rotate 1.5s linear infinite,
    spinner-dash 1.5s ease-in-out infinite;
  transform-origin: center;
  transform: rotate(-90deg); /* Start from the top */
}

/* Continuous rotation */
@keyframes spinner-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Pulsating dash */
@keyframes spinner-dash {
  0% {
    stroke-dasharray: 1, 125.6; /* Small segment grows */
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 125.6; /* Arc is nearly full */
    stroke-dashoffset: -25; /* Smooth transition */
  }
  100% {
    stroke-dasharray: 1, 125.6; /* Small segment shrinks */
    stroke-dashoffset: -125.6;
  }
}
</style>
