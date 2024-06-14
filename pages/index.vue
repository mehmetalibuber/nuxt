<template>
  <h1>burası anasayfa</h1>
</template>

<script setup>
const { session, refresh, update, reset } = await useSession();

onMounted(async () => {
  await update({ date: Date.now() });

  console.log(session.value);
});
</script>

<style></style>
