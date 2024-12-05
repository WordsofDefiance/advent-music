<template>
  <div class="wrapper max-w-screen-xl my-0 mx-auto">
    <header class="mb-6">
      <h1 class="main-title text-center">Jingle Jams</h1>
      <h2 class="subtitle text-center">
        <span class="adventure">A Very Merry Musical Advent-ture</span>
      </h2>
    </header>
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
.main-title {
  font-size: 4rem;
  font-family: "Tangerine", cursive;
  background: linear-gradient(to right, #4e65ff, #c55151);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  animation: shimmer 2s infinite;
}

.subtitle {
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  color: #ffc107;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
}

.subtitle .highlight {
  color: #6cc551;
  font-weight: bold;
}

.subtitle .adventure {
  color: #ff4e50;
  font-style: italic;
}

@keyframes shimmer {
  0% {
    background-position: -100%;
  }
  100% {
    background-position: 100%;
  }
}
</style>
