<template>
  <section class="h-100 h-custom" style="background-color: #eee">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card">
            <div class="card-body p-4">
              <div class="row">
                <div class="col-lg-7">
                  <h5 class="mb-3">
                    <a href="#!" class="text-body"
                      ><i class="fas fa-long-arrow-alt-left me-2"></i>Continue
                      shopping</a
                    >
                  </h5>
                  <hr />

                  <div
                    class="d-flex justify-content-between align-items-center mb-4"
                  >
                    <div>
                      <p class="mb-1">Shopping cart</p>
                      <p class="mb-0">
                        You have {{ products.length }} items in your cart
                      </p>
                    </div>
                    <div>
                      <p class="mb-0">
                        <span class="text-muted">Sort by:</span>
                        <a href="#!" class="text-body"
                          >price <i class="fas fa-angle-down mt-1"></i
                        ></a>
                      </p>
                    </div>
                  </div>
                  <div v-for="product in products" :key="product">
                    <div class="card mb-3">
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <div class="d-flex flex-row align-items-center">
                            <div>
                              <img
                                :src="product.image"
                                class="img-fluid rounded-3"
                                style="width: 65px"
                              />
                            </div>
                            <div style="padding-left: 40px">
                              <h5>{{ product.productId.name }}</h5>
                              <p class="small mb-0">
                                {{ product.productId._id }}
                              </p>
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center">
                            <div style="width: 50px">
                              <h5 class="fw-normal mb-0">
                                {{ product.quantity }}
                              </h5>
                            </div>
                            <div style="width: 80px">
                              <h5 class="mb-0">{{ product.price }}</h5>
                            </div>
                            <href @click="removeAllItems">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-trash"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                />
                              </svg>
                            </href>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="card-header py-3">
                    <h5 class="mb-0">Summary</h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                      >
                        Products
                        <span>${{ sum }}</span>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0"
                      >
                        Shipping
                        <span>Free</span>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3"
                      >
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p class="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span
                          ><strong>${{ sum }}</strong></span
                        >
                      </li>
                    </ul>

                    <button
                      type="button"
                      class="btn btn-primary btn-lg btn-block"
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CartDataService from "../services/cartService";
export default {
  name: "cart-shopping",
  data() {
    return {
      products: [],
      id: "",
      sum: 0,
    };
  },
  methods: {
    cartDisplay() {
      CartDataService.getAll()
        .then((response) => {
          this.products = response.data.data.items;
          for (const product of this.products) {
            this.sum += product.price;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    removeAllItems() {
      CartDataService.deleteAll()
        .then((response) => {
          console.log(response);
          this.cartDisplay();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchItem() {
      CartDataService.findById(this.id)
        .then((response) => {
          this.products = response.data.data.items;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    this.cartDisplay();
  },
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
