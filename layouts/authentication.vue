<template>
  <div class="custom-layout">
    <TopHeader />
    <Header />
    <slot />
    <NuxtSnackbar />
    <Cookie-Accept />
    <Footer />
  </div>
</template>
