import http from "../httpcommun";
class CartDataService {
  getAll() {
    return http.get("/cart");
  }
  deleteAll() {
    return http.delete("cart/empty-cart");
  }
  findById(id) {
    return http.get(`/cart?id=${id}`);
  }
}
export default new CartDataService();