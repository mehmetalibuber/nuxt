<template>
  <Head>
    <Title>{{ $t("HowToMakeReservation") }}</Title>
    <Meta name="description" content=""> </Meta>
  </Head>
  <Breadcrumb :PageTitle="$t('HowToMakeReservation')" />

  <section class="make-reservation">
    <div class="container my-5">
      <div class="row">
        <div class="col">
          <picture
            ><img
              class="img-fluid"
              src="/assets/images/reservation.jpg"
              alt="reservation"
              loading="lazy"
          /></picture>
        </div>
      </div>
      <div class="row my-4">
        <h2 class="title">Nasıl Rezervasyon Yapılır?</h2>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="desc">
            <h2>
              <img src="/assets/icons/call-center.png" alt="call center" />
              &nbsp; Çağrı Merkezi ile Rezervasyon
            </h2>
            <ol>
              <li>
                <p>
                  Rezervasyon yaptırmak istediğiniz otel için tarih ve kişi
                  sayısını belir- terek fiyat bilgisi alabilir, kredi kartı veya
                  havale ile rezervasyonunuzu kısa sürede
                  gerçekleştirebilirsiniz.
                </p>
              </li>
              <li>
                <p>
                  EFT / Havale ödemelerinde ön rezervasyon oluşturulduktan sonra
                  tarafınıza verilecek ön rezervasyon numaranız ve TC Kimlik
                  numaranızı işlem açıklaması belirterek ödemenizi yapabilir ve
                  sonrasında Seyehat Danışmanlarımıza onaylatabilirsiniz.
                </p>
              </li>
              <li>
                <p>
                  Rezervasyonunuz tamamlandıktan sonra otel giriş belgeniz ve
                  sözleşmeniz belirtmiş olduğunuz e-posta gönderilecektir.
                </p>
              </li>
            </ol>
          </div>
          <div class="bottom">
            <div>
              <p>
                <a :href="'tel:' + PhoneNumber" :title="PhoneNumber">{{
                  PhoneNumber
                }}</a>
                nolu Çağrı Merkezimizden Seyahat Danışmanlarımız aracılığı ile
                rezervasyon yaptırabilirsiniz.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="desc">
            <h2>
              <img src="/assets/icons/res-okey.png" alt="call center" /> &nbsp;
              Online Rezervasyon
            </h2>
            <ol>
              <li>
                <p>Rezervasyon yaptırmak istediğiniz Lokasyon / Oda seçiniz.</p>
              </li>
              <li>
                <p>
                  Odanın toplam fiyatını görmek için “Giriş Tarihi-Çıkış Tarihi”
                  ve “Kişi” sayısını seçiniz.
                </p>
              </li>
              <li>
                <p>
                  Seçtiğiniz tarih ve kişi sayısına uygun olan odalardan oda
                  seçiminizi yaparak “İleri” butonuna basarak devam ediniz (
                  Bazı lokasyonlarda birden fazla oda tipi bulunmaktadır).
                </p>
              </li>
              <li>
                <p>
                  Odada kalacak kişilerin isim soyisim, iletişim, fatura ve
                  ödeme bilgiler- ini seçiniz.
                </p>
              </li>
              <li>
                <p>
                  Kredi kartı bilgilerinizi yazarak Rezervasyonu Tamamla
                  butonuna basarak rezervasyonunuzu gerçekleştirebilirsiniz.
                </p>
              </li>
              <li>
                <p>
                  İşlem sonrasında e-posta adresinize gelecek olan Sözleşme ve
                  Confir- mation Belgenizi onaylayarak işleminizi
                  tamamlayabilirsiniz
                </p>
              </li>
              <li>
                <p>
                  Belgelerinize Üye giriş bölümünden oluşturacağınız kullanıcı
                  adı ve şifre ile istediğiniz zaman ulaşabilirsiniz.
                </p>
              </li>
            </ol>
          </div>
          <div class="bottom">
            <div>
              <p>
                www.geccele.com veya çok yakında Mobil uygulamamızdan 7/24
                online rezervasyon yapabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
const RuntimeConfig = useRuntimeConfig();
// information
const PhoneNumber = ref("");
if (RuntimeConfig.public) {
  PhoneNumber.value = RuntimeConfig.public.CALL_CENTER_PHONE_NUMBER;
}
</script>

<style scoped>
.make-reservation .title {
  font-weight: 600;
  font-size: 2.2em;
  color: #214280;
}
.make-reservation img {
  border-radius: 6px;
}
.make-reservation ol {
  padding-left: 15px;
}
.make-reservation h2 {
  font-size: 1.8em;
}
.make-reservation p {
  margin-bottom: 4px;
  font-size: 1.1em;
}
.make-reservation .col-lg-6 .desc {
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  border: 0.5px solid #3b64c436;
  background-color: #fafbfd;
  border-radius: 8px;
  padding: 25px;
  height: 500px;
}
.make-reservation .col-lg-6 .desc h2 {
  font-weight: 600;
  font-size: 1.4em;
}
.make-reservation .bottom {
  margin-top: 25px;
  border: 1px solid #3b64c436;
  background-color: #fafbfd;
  padding: 25px;
  border-radius: 8px;
}
@media (max-width: 996px) {
  .make-reservation .title {
    font-size: 1.8em;
  }
  .make-reservation .col-lg-6 .desc h2 {
    font-size: 1.2em;
  }
  .make-reservation .col-lg-6:last-child {
    margin-top: 25px;
  }
  .make-reservation .col-lg-6 .desc {
    height: auto;
  }
  .make-reservation .col-lg-6 .desc,
  .make-reservation .bottom {
    padding: 15px;
  }
}
</style>
