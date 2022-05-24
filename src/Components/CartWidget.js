
const CartWidget = () => {
  return (
    <>
      <button class=" carrito bi bi-cart2  position-relative">


        <span class=" notify position-absolute top-20  start-100 translate-middle badge rounded-pill bg-danger">
          0
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>
    </>
  );
}
export default CartWidget;