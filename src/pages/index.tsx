// import { getItemsInCart, setItemsInCart } from "@/redux/cartSlice";
// import { useSelector, useDispatch } from "react-redux";

// export default function Home() {
//   const itemsInCart: any = useSelector(getItemsInCart);
//   const dispatch = useDispatch();

//   const addItemsToCart = () => {
//     dispatch(setItemsInCart(parseInt(itemsInCart) + 1))
//   }

//   return (
//     <>
//       <h2>
//         Items in Cart : {itemsInCart}
//       </h2>
//       <button value="Add" type="button" onClick={addItemsToCart}>
//         Add
//       </button>
//     </>
//   )
// }

import { Header, Layout, Modal, Pagination, Table } from "@/components";

function Landing() {
	return (
		<Layout>
			<Header />
			<Table />
			<Pagination />
			<Modal />
		</Layout>
	);
}

export default Landing;
