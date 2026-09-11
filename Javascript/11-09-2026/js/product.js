import { getProduct , saveProducts } from "./helper.js";

export function seedProducts(){
  const existing = getProduct()

  if(existing.length > 0){
    return;
  }

  fetch('https://fakestoreapi.com/products').then((response) => {
    return response.json()
  }).then((data) => {
    saveProducts(data)
  })
}