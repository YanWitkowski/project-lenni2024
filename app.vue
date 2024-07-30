<template>
  <div id="app" class="app">
    <PageHeader ref="header" class="app__header" />
      <main class="app__main">
        <NuxtPage />
      </main>
      <PageFooter />
  </div>
  <ModalPp />
</template>
<script setup>
const store = useStore();
useHead({
  bodyAttrs: {
    class: {
      body: true,
      "show-nav": () => store.navActive,
      overflow: () => store.getModal
    }
  },
  meta: [{
    name: "format-detection",
    content: "telephone=no"
  }],
  link: [{
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
{
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossorigin: "anonymous"
},
{
  href: "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap",
  rel: "stylesheet"
}]
})
</script>
