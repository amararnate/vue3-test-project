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
  margin-left: 88px;
    margin-right: 88px;
    position: fixed;
    left: 0;
    right: 0;
    height: 80px;

  &__container{
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }
}
</style>