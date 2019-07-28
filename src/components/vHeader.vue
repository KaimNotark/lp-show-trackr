<template>
  <div class="vheader">
    <div class="container">
      <div class="vheader-wrap">
        <div class="vheader-logo">
          <img src="../img/header-logo.png" alt="Show Trackr logo" class="vheader-logo__img">
        </div>
        <nav class="vheader-navigation">
          
          <ul class="vheader-list">
            <li class="vheader-item">
              <a href class="vheader-item__link">Features</a>
            </li>
            <li class="vheader-item">
              <a href class="vheader-item__link">Community</a>
            </li>
            <li class="vheader-item">
              <a href class="vheader-item__link">Get Started</a>
            </li>
          </ul>
        </nav>
        <div class="vheader-buttons">
          <a href class="vheader-buttons__log-in">Log in</a>
          <a href class="vheader-buttons__get-started">Get started</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vheader {
  width: 100%;
  height: 50px;

  &-wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  &-logo {
    margin-left: -20px;
    user-select: none;
  }

  &-list {
    display: flex;
  }

  &-item {
    display: block;

    &__link {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      text-align: center;
      text-decoration: none;
      margin-left: 28px;
      margin-right: 28px;
    }
  }

  &-buttons {
    margin-right: 0px;
    display: flex;

    &__log-in {
      display: block;
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;
      text-align: center;
      text-decoration: none;
      margin-right: 30px;
    }

    &__get-started {
      display: block;
      width: 102px;
      height: 25px;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      text-align: center;
      background: #540cfa;
      border-radius: 4px;
      box-shadow: 0px 2px 4px rgba(60, 9, 179, 0.3);
      text-decoration: none;
      margin-top: -6px;
      padding-top: 7px;
    }
  }
}
</style>

<script>

</script>