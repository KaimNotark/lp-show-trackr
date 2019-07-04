<template>
  <div class="teach">
    <hr />
    <h1>{{ teachText }}</h1>
    <div class="content">
      <p class="content__text _green">обогащенный</p>
      <p class="content__text _green _small">бифидобактериями</p>
      <div class="content__devider"></div>
      <p class="content__text _blue">
        классический
        <br />пломбир
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "teach",
  props: {
    teachText: String
  }
};
</script>

<style lang="scss" scoped>
$color-blue: #3333aa;
$color-red: #ff0000;
$color-green: #008000;

.teach {
}
h1 {
  color: $color-red;
}
.content {
  width: 200px;
  margin-left: 50%;
  transform: translateX(-50%);

  &__text {
    font-style: italic;
    font-size: 30px;
    text-align: left;
  }
  &__text._blue {
    color: $color-blue;
  }
  &__text._green {
    color: $color-green;
    margin: 0;
  }
  &__text._small {
    font-size: 20px;
  }
  &__devider {
    width: 0;
    margin-left: 50%;
    margin-top: 30px;
    transform: translateX(-50%);
    border: 6px solid green;
    border-radius: 50%;
  }
  &__devider::before {
    content: "";
    position: absolute;
    right: 15px;
    bottom: -2.5px;
    width: 80px;
    height: 4px;
    background-color: green;
  }
  &__devider::after {
    content: "";
    position: absolute;
    left: 15px;
    bottom: -2.5px;
    width: 80px;
    height: 4px;
    background-color: green;
  }
}
</style>