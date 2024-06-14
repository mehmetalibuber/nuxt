<template>
  <div class="lang-dropdown dropdown">
    <button
      class="btn dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      :title="t('SelectLanguage')"
    >
      {{ GetCurrentLanguage() }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li
        v-for="item in locales"
        :key="typeof item === 'object' ? item.code : item"
        class="dropdown-item"
      >
        <span @click="SelectLanguage(item)">
          {{ typeof item === "object" ? item.name : item }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { locales, locale, setLocale, t } = useI18n();

const language = computed({
  get: () => {
    return locale.value;
  },
  set: (value) => {
    setLocale(value);
  },
});

function GetCurrentLanguage() {
  const currentLocale = language.value;
  const currentLanguage = locales.value.find((item) =>
    typeof item === "object"
      ? item.code === currentLocale
      : item === currentLocale
  );
  return typeof currentLanguage === "object"
    ? currentLanguage.name
    : currentLocale;
}

function SelectLanguage(item) {
  const selectedLocale = typeof item === "object" ? item.code : item;
  language.value = selectedLocale;
}
</script>

<style>
.lang-dropdown {
  align-self: center;
}
.lang-dropdown button {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  border: none;
  margin: auto 12px auto 12px;
}
.dropdown-menu {
  min-width: min-content !important;
  padding: 0;
}
.dropdown-menu li {
  width: max-content;
  cursor: pointer;
}
.dropdown-menu li span {
  color: rgba(0, 0, 0, 0.8);
}
.dropdown-toggle::after {
  position: relative;
  margin-top: 11px;
  margin-left: 8px;
}
</style>
