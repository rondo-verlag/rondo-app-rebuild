<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <div class="rondo-bar-search">
          <label class="rondo-bar-search__input">
            <i class="icon rondo-icon-search placeholder-icon"></i>
            <input type="text" placeholder="Search..." id="song-search-input" autocorrect="off" autocapitalize="off" />
            <span class="clear-search" v-if="query" @click="clearSearch()">
              <i class="icon rondo-icon-close-circle"></i>
            </span>
          </label>
          <div class="rondo-bar-search__logo">
            <span class="about-icon" @click="$router.push('/about')">
              <i class="rondo-icon-logo"></i>
            </span>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>


  </ion-page>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>
