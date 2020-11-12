<template>
  <div class="card-grid">
    <Postcard
      @added="add"
      v-for="(item, index) in objectDetails"
      v-bind="item"
      :objectData="item"
      :key="index"
    ></Postcard>
  </div>
</template>