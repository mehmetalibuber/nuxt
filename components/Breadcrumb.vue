<template>
  <section class="breadcrumb">
    <div class="container-fluid">
      <div class="d-flex justify-content-center align-items-center">
        <span>
          <NuxtLink :to="localPath('/')" :title="$t('Home')">{{
            $t("Home")
          }}</NuxtLink>
        </span>
        <span>&nbsp;/&nbsp;</span>
        <span>{{ $t(PageTitle) }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  PageTitle: String,
});
const localPath = useLocalePath();
</script>

<style scoped>
.breadcrumb {
  width: 100%;
  height: 60px;
  background-color: #1f407e;
  /* background-color: #b24693; */
  color: #fff;
  margin-bottom: 0;
}

.breadcrumb .container-fluid .d-flex {
  height: 60px;
}

.breadcrumb span {
  font-size: 18px;
}

.breadcrumb a {
  color: #fff;
}
</style>
