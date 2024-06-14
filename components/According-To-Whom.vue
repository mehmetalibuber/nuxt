<template>
    <section class="according-to-section">
        <div class="container my-5">
            <div class="text-left pt-5">
                <h2>
                    Reinventing living for
                </h2>
            </div>
            <div class="row boxes">
                <div class="col-lg-6">
                    <div class="box">
                        <figure>
                            <img src="/assets/home/according-to-1.jpg" alt="according-to">
                        </figure>
                        <h2>
                            The minimalist
                        </h2>
                        <p>
                            Guests looking to travel light, with an eco-conscious approach to living.
                        </p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="box">
                        <figure>
                            <img src="/assets/home/according-to-2.jpg" alt="according-to">
                        </figure>
                        <h2>
                            The explorer
                        </h2>
                        <p>
                            Renters excited to hop around, experiment, and discover a new apartment, neighborhood, or
                            city.
                        </p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="box">
                        <figure>
                            <img src="/assets/home/according-to-3.jpg" alt="according-to">
                        </figure>
                        <h2>
                            The business traveler
                        </h2>
                        <p>
                            Employees and mobility managers searching for a quality, tech-savvy alternative to hotels.
                        </p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="box">
                        <figure>
                            <img src="/assets/home/according-to-4.jpg" alt="according-to">
                        </figure>
                        <h2>
                            The student
                        </h2>
                        <p>
                            Students seeking housing that offers savings, flexibility, convenience and campus proximity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.according-to-section .text-left h2 {
    font-size: 2.2em;
}

.boxes {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.box {
    height: 380px;
    margin-top: 25px;
}

.box img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
}

.box h2 {
    margin-top: 8px;
    font-size: 1.6em;
}
</style>