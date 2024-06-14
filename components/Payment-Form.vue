<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h4 class="mb-0">Kredi Kartı Ödeme Formu</h4>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="cardNumber" class="form-label">Kredi Kartı Numarası</label>
                                <input type="text" class="form-control" id="cardNumber"
                                    placeholder="1234 5678 9012 3456" required>
                            </div>
                            <div class="mb-3">
                                <label for="expiryDate" class="form-label">Son Kullanma Tarihi</label>
                                <input type="text" class="form-control" id="expiryDate" placeholder="MM/YY" required>
                            </div>
                            <div class="mb-3">
                                <label for="cvc" class="form-label">CVC</label>
                                <input type="text" class="form-control" id="cvc" placeholder="123" required>
                            </div>
                            <div class="mb-3">
                                <label for="cardHolderName" class="form-label">Kart Sahibinin Adı</label>
                                <input type="text" class="form-control" id="cardHolderName" placeholder="John Doe"
                                    required>
                            </div>
                            <button type="submit" class="btn btn-primary">Ödemeyi Tamamla</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style></style>