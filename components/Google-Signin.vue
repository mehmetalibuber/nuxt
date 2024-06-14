<script setup>
import { ref } from "vue";
import { GoogleSignInButton } from "vue3-google-signin";
import { jwtDecode } from "jwt-decode";

const userInfo = ref(null);

// handle success event
const handleLoginSuccess = (response) => {
  const { credential } = response;
  try {
    const decoded = jwtDecode(credential);
    userInfo.value = decoded;
    console.log("User Info:", userInfo.value);
  } catch (error) {
    console.error("Error decoding JWT:", error);
  }
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>
<template>
  <div>
    <GoogleSignInButton
      @success="handleLoginSuccess"
      @error="handleLoginError"
    ></GoogleSignInButton>
  </div>
</template>
