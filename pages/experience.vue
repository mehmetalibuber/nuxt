<template>
  <Head>
    <Title>{{ $t("Experience") }}</Title>
    <Meta name="description" content="geccele experience"> </Meta>
  </Head>
  <Breadcrumb :PageTitle="$t('Experience')" />
  <section class="experience-section">
    <div class="container-fluid px-0">
      <figure>
        <img
          src="/assets/images/experience/experience-main.jpg"
          alt="experience main"
          class="img-fluid"
        />
      </figure>
    </div>
    <div class="container">
      <!-- ########## top ############### -->
      <div class="experience mb-5">
        <div class="row">
          <div class="text-center my-5">
            <h2>{{ $t("PerfectionHiddenInDetails") }}</h2>
            <p class="op-6">
              {{ $t("PerfectionHiddenInDetailsDesc") }}
            </p>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-lg-6 left">
            <div class="col-lg-12">
              <div class="row box">
                <div class="col-10">
                  <div class="title">
                    <h2 class="fs-5">{{ $t("Discover") }}</h2>
                  </div>
                  <div class="desc">
                    <p class="op-6">
                      {{ $t("DiscoverDesc") }}
                    </p>
                  </div>
                </div>
                <div class="col-2">
                  <img src="/assets/icons/search.png" alt="search" />
                </div>
              </div>
              <div class="row box">
                <div class="col-10">
                  <div class="title">
                    <h2 class="fs-5">{{ $t("Help") }}</h2>
                  </div>
                  <div class="desc">
                    <p class="op-6">
                      {{ $t("HelpDesc") }}
                    </p>
                  </div>
                </div>
                <div class="col-2">
                  <img src="/assets/icons/support.png" alt="support" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 right bordered-left">
            <div class="row box">
              <div class="col-2">
                <img src="/assets/icons/honesty.png" alt="honesty" />
              </div>
              <div class="col-10">
                <div class="title">
                  <h2 class="fs-5">{{ $t("Reliability") }}</h2>
                </div>
                <div class="desc">
                  <p class="op-6">
                    {{ $t("ReliabilityDesc") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="row box">
              <div class="col-2">
                <img src="/assets/icons/review.png" alt="review" />
              </div>
              <div class="col-10">
                <div class="title">
                  <h2 class="fs-5">{{ $t("EnjoyIt") }}</h2>
                </div>
                <div class="desc">
                  <p class="op-6">
                    {{ $t("EnjoyItDesc") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ########## middle ############### -->
      <div class="middle">
        <div class="content">
          <div class="row">
            <div class="text-center">
              <h2>{{ $t("StartLiving") }}</h2>
              <p class="op-6">
                {{ $t("StartLivingDesc") }}
              </p>
            </div>
            <div class="row first">
              <div class="col-lg-6">
                <figure>
                  <img
                    class="img-thumbnail"
                    src="/assets/images/experience/experience-1.jpg"
                    alt="residence"
                  />
                </figure>
              </div>
              <div class="col-lg-6">
                <div>
                  <h2 class="fs-5">
                    {{ $t("ReadyForUseTechnology") }}
                  </h2>
                  <p class="op-6">
                    {{ $t("ReadyForUseTechnologyDesc") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="row second">
              <div class="col-lg-6">
                <div>
                  <h2 class="fs-5">{{ $t("MeticulouslyFurnished") }}</h2>
                  <p class="op-6">
                    {{ $t("MeticulouslyFurnishedDesc") }}
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <figure>
                  <img
                    class="img-thumbnail"
                    src="/assets/images/experience/experience-2.jpg"
                    alt="residence"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ########## bottom ############### -->
      <div class="bottom">
        <div class="text-center">
          <h2>{{ $t("ResidenceProvides") }}</h2>
          <p class="op-6">
            {{ $t("ResidenceProvidesDesc") }}
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <figure>
              <img
                class="img-thumbnail"
                src="/assets/images/experience/experience-3.jpg"
                alt="experience 1"
              />
            </figure>
            <figcaption>{{ $t("ResidenceProvides1") }}</figcaption>
          </div>
          <div class="col-lg-4">
            <figure>
              <img
                class="img-thumbnail"
                src="/assets/images/experience/experience-4.jpg"
                alt="experience 2"
              />
            </figure>
            <figcaption>{{ $t("ResidenceProvides2") }}</figcaption>
          </div>
          <div class="col-lg-4">
            <figure>
              <img
                class="img-thumbnail"
                src="/assets/images/experience/experience-5.jpg"
                alt="experience 3"
              />
            </figure>
            <figcaption>{{ $t("ResidenceProvides3") }}</figcaption>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section .experience {
  background-color: #fafbfd;
  border-radius: 6px;
  padding: 25px 15px;
}
.experience-section h2 {
  color: #3b65c4;
  font-weight: 600;
  font-size: 1.4em;
}
.experience-section .fs-5 {
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
}
.experience-section .op-6 {
  color: rgba(0, 0, 0, 0.6);
}
.experience-section .experience .bordered-left {
  border-left: 1px solid #cbcbcb;
  padding-top: 100px;
}
.experience-section .experience .box {
  height: 180px;
}
.experience-section .img-fluid {
  width: 100%;
  height: 375px;
  object-fit: cover;
  image-rendering: optimizeQuality;
}
/* ######### left ######## */
.experience-section .experience .left .col-lg-12 {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
.experience-section .experience .left .title {
  display: flex;
  justify-content: flex-end;
}
.experience-section .experience .left .des {
  display: flex;
  justify-content: flex-end;
}
.experience-section .experience .left .desc p {
  padding-left: 150px;
  text-align: right;
}
.experience-section .experience .left img {
  width: 45px;
  margin: 0 5px;
  object-fit: cover;
}
/* ######### right ######## */
.experience-section .experience .right .col-lg-12 {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.experience-section .experience .right .title {
  display: flex;
  justify-content: flex-start;
}
.experience-section .experience .right .des {
  display: flex;
  justify-content: flex-start;
}
.experience-section .experience .right .desc p {
  padding-right: 150px;
  text-align: left;
}
.experience-section .experience .right img {
  width: 45px;
  margin: 0 5px;
  object-fit: cover;
}
.experience-section .experience .box .col-lg-2 {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
/* ###################### middle ###################### */
.experience-section .middle {
  display: flex;
  justify-content: center;
}
.experience-section .middle .content {
  width: 850px;
}
.experience-section .middle figure {
  width: 100%;
}
.experience-section .middle img {
  border-radius: 22px;
  height: 250px;
  width: 350px;
  object-fit: cover;
}
.experience-section .middle .col-lg-6 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.experience-section .middle .first h2,
.experience-section .middle .second h2 {
  color: rgba(0, 0, 0, 0.7);
}
.experience-section .middle p {
  padding-right: 120px;
  color: rgba(0, 0, 0, 0.6);
}
.experience-section .middle .text-center p {
  padding: 5px 15px;
}
/* ###################### bottom ###################### */
.experience-section .bottom {
  margin-top: 85px;
  background-color: #fafbfd;
  border-radius: 6px;
  padding: 25px 60px;
}
.experience-section .bottom img {
  border-radius: 22px;
}
.experience-section .bottom figcaption {
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 8px;
}
@media (max-width: 996px) {
  .experience-section .experience .bordered-left {
    border-left: none;
    padding-top: 15px;
  }
  .experience-section .experience .left .desc p {
    padding-left: 0;
    text-align: right;
  }
  .experience-section .middle p {
    padding-right: 0;
  }
  .experience-section .experience .right .desc p {
    padding-right: 0;
  }
  .experience-section .middle .content {
    width: 100%;
  }
  .experience-section .first {
    padding-right: 0;
  }
  .experience-section .middle .col-lg-6 {
    margin-top: 15px;
  }
  .experience-section .bottom {
    margin-top: 85px;
    background-color: #fafbfd;
    border-radius: 6px;
    padding: 25px 15px;
  }
  .bottom .col-lg-4 {
    margin-top: 15px;
  }
}
</style>
