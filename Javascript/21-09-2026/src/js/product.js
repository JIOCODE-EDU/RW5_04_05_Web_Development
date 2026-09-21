import { getProduct , saveProducts } from "./helper.js";

export function seedProducts(){
  const existing = getProduct()

  if(existing.length > 0){
    return;
  }

  fetch('http://localhost:3000/products').then((response) => {
    return response.json()
  }).then((data) => {
    saveProducts(data)
  })
}