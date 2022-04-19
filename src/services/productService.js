import http from "../httpcommun";
class ProductDataService {
  getAll() {
    return http.get("/tutorials");
  }
}
export default new ProductDataService();