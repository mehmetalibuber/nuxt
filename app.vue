<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const LoadGoogleAnalytics = async () => {
  if (process.client) {
    setTimeout(() => {
      const Scripts = [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-9LEF8C3X3P",
          async: true,
        },
        {
          innerHTML: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9LEF8C3X3P');
            `,
        },
      ];

      Scripts.forEach((script) => {
        const scriptEl = document.createElement("script");
        if (script.src) {
          scriptEl.src = script.src;
        }
        if (script.async) {
          scriptEl.async = true;
        }
        if (script.innerHTML) {
          scriptEl.innerHTML = script.innerHTML;
        }
        document.head.appendChild(scriptEl);
      });
    }, 15000);
  }
};

onMounted(() => {
  LoadGoogleAnalytics();
});
</script>
