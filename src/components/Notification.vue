<template>
  <div class="overlay">
    <div class="notification">
      <p class="notification__message">
        {{ message }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Notification',
  data() {
    return {
      message: 'Test notification.'
    };
  }
};

</script>
<style scoped>

.overlay {
    /* background: rgba(0,0,0, .65); */
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.notification {
    background: rgba(0,0,0, .65);
    border-radius: 2rem;

    color: white;

    display: flex;
    position: relative;

    min-height: 50vw;
    min-width: 50vw;
    margin: auto;
    padding: 2rem;
    z-index: 10;

    justify-content: center;
    align-items: center;
}

.notification__message {
}
</style>