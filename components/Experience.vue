<template>
    <section class="experience-section">
        <div class="container my-5">
            <div class="text-center pt-3">
                <h2>Home, but better</h2>
            </div>
            <div class="row top">
                <div class="col-lg-6">
                    <figure>
                        <img class="img-fluid" src="/assets/home/experience-1.jpg" alt="geccele experience">
                    </figure>
                </div>
                <div class="col-lg-6">
                    <h2>
                        Extraordinary <br> experiences
                    </h2>
                    <p>
                        While helping you live like a true local in a new neighborhood or city, we elevate each day with
                        exclusive partner services* -from meal kits and wine delivery to on-demand fitness and car
                        rentals.
                    </p>
                </div>
            </div>
            <div class="row bottom">
                <div class="col-lg-6">
                    <h2>
                        Extraordinary <br> experiences
                    </h2>
                    <p>
                        While helping you live like a true local in a new neighborhood or city, we elevate each day with
                        exclusive partner services* -from meal kits and wine delivery to on-demand fitness and car
                        rentals.
                    </p>
                </div>
                <div class="col-lg-6">
                    <figure>
                        <img class="img-fluid" src="/assets/home/experience-2.jpg" alt="geccele experience">
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.experience-section .text-center h2 {
    margin: 15px auto 25px auto;
    font-size: 2.2em;
}

.experience-section .col-lg-6 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
}

.experience-section .col-lg-6 h2 {
    text-align: center;
}

.experience-section .col-lg-6 p {
    padding: 0 75px;
    text-align: center;
    font-size: 1.2em;
}

.experience-section .top img {
    border-top-left-radius: 150px;
}

.experience-section .top .col-lg-6:last-child {
    background-color: #FBF7F4;
    border-top-right-radius: 150px;

}

.experience-section .bottom img {
    border-bottom-right-radius: 150px;
}

.experience-section .bottom .col-lg-6:first-child {
    background-color: #FBF7F4;
    border-bottom-left-radius: 150px;

}
</style>