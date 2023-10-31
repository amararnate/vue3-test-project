<template>
  <footer class="app-footer">
    <div class="app-footer__container">
      <span>© T Systems International</span>
      <span>Impressum</span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  margin: 0px $left-right-margin;
  height: 80px;

  &__container {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }
}
</style>
