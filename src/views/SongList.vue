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
.rondo-bar-search {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .rondo-bar-search__input {
    flex: 1;
    margin-left: 10px;
  }

  .rondo-bar-search__logo {
    width: 50px;
  }

  label {
    background: #4A4A4A;
    border: 0;
    height: 32px;
    display: inline-block;
    border-radius: 5px;

    .placeholder-icon {
      color: #CCC !important;
      font-size: 140%;
      position: absolute;
      margin-top: 5px;
      margin-left: 6px;
    }

    .placeholder-icon:first-child {
      padding-right: 0;
    }

    input {
      color: #FFF;
      letter-spacing: initial;
      width: 100%;
      padding: 5px;
      padding-left: 34px;
      padding-right: 30px;
      font-size: 16px;
      line-height: 22px;
      border: none;
      background: transparent;
      // vectora has a bad baseline, so we use another font for inputs
      font-family: -apple-system, system-ui, Roboto, sans-serif;
    }

    input::-webkit-input-placeholder {
      color: #CCC;
      font-size: 16px;
    }
  }

  .clear-search {
    font-size: 140%;
    position: absolute;
    top: 7px;
    right: 52px;
    display: block;
    height: 32px;
    width: 40px;
    text-align: center;
    padding-top: 5px;
    padding-left: 10px;

    i {
      color: #CCC !important;
    }
  }

  .about-icon {
    display: inline-block;
    padding-left: 10px;
    padding-right: 12px;
    margin-right: -12px;
    color: white;
    position: relative;
    top: 2px;

    i {
      font-size: 220%;
    }
  }
}

.md {
  .rondo-bar-search {
    .clear-search {
      top: 12px;
    }
  }
}

.rondo-list {
  .item {
    border: none;
    font-size: 16px;

    .item-content {
      padding: 8px 16px;
    }
  }

  .alt-title,
  .main-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 30px;
  }

  .main-title {
    font-weight: bold;
    letter-spacing: 2px;
  }

  .alt-title {
    letter-spacing: 1px;
  }
}

.rondo-list--not-available {
  ion-list-header {
    color: white;

    a {
      color: darkorange;
      text-decoration: none;
    }
  }

  .alt-title,
  .main-title {
    color: #555;
  }
}
</style>
