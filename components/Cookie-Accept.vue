<template>
    <div v-if="ShowCookieModal" class="cookie-popup">
        <div class="cookie-content">
            <p>We use cookies to improve your experience on our website.</p>
            <button @click="acceptCookies">Accept Cookies</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ShowCookieModal: false,
        };
    },
    methods: {
        acceptCookies() {
            this.ShowCookieModal = false;
            localStorage.setItem('CookieAccepted', 'true');
        },
    },
    mounted() {
        setTimeout(() => {
            const accepted = localStorage.getItem('CookieAccepted');
            if (accepted === 'true') {
                this.ShowCookieModal = false;
            }
            else {
                this.ShowCookieModal = true;
            }
        }, 1500);
    },
};
</script>

<style scoped>
.cookie-popup {
    position: fixed;
    bottom: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 20px 10px;
    width: 100%;
    z-index: 99999;
}

.cookie-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.cookie-content p {
    margin: 0;
}

.cookie-content button {
    margin-left: 10px;
    background-color: #1F407E;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}
</style>