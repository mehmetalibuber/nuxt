<template>
  <div class="default-layout">
    <!-- <TopHeader /> -->
    <Header />
    <slot />
    <NuxtSnackbar />
    <Cookie-Accept />
    <Callback-Request />
    <Footer />
  </div>
</template>
