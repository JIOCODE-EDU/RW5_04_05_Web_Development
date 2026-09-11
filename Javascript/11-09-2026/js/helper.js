export const getProduct = () => {
  return JSON.parse(localStorage.getItem("product")) || [];
}

export const saveProducts = (products) => {
  localStorage.setItem("product" , JSON.stringify(products))
}

export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export const saveCart = (cart) => {
  localStorage.setItem("cart" , JSON.stringify(cart))
}

export const formatPrice = (amount) => {
  return "&#8377" + Number(amount).toLocaleString("en-IN")
}

export const updateCartCount = () => {
  const badge = document.getElementById("cartCount");
  if(!badge) return;

  const cart = getCart();

  const totalQty = cart.reduce((sum , item) => {
    sum + item.qty , 0
  })
  badge.textContent = totalQty;
}