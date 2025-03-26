import React from "react";
import { useAtom } from "jotai";
import { cartAtom, totalAtom, postsAtom, fetchPostsAtom, loadingAtom } from "./atom/shopping-cart";

export default function ShoppingCart() {
  const [cart, setCart] = useAtom(cartAtom);
  const [total] = useAtom(totalAtom);
  const [posts] = useAtom(postsAtom);
  const [loading] = useAtom(loadingAtom);
  const [, fetchPosts] = useAtom(fetchPostsAtom); // Use fetchPostsAtom to trigger fetching

  React.useEffect(() => {
    fetchPosts(); // Trigger the fetchPostsAtom when the component mounts
  }, [fetchPosts]);

  const addItem = (item) => {
    return setCart((prev) => [...prev, item]);
  };

  const removeItem = (idx) => {
    return setCart((prev) =>
      prev.filter((_, index) => {
        return index !== idx;
      })
    );
  };

  console.log("posts", posts);
  
  return (
    <>
      <h1>Shopping Cart</h1>
      <ul>
        {cart?.map((item, idx) => {
          return (
            <li key={idx}>
              {item.name} :- {item.price}
              <button onClick={() => removeItem(idx)}>Remove Item</button>
            </li>
          );
        })}
      </ul>
      <h4>Total: {total}</h4>
      <button onClick={() => addItem({ name: "Apple", price: 20 })}>
        Add Apple
      </button>
      <button onClick={() => addItem({ name: "Banana", price: 10 })}>
        Add Banana
      </button>
      <h2>Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post, idx) => (
            <li key={idx}>{JSON.stringify(post)}</li>
          ))}
        </ul>
      )}
    </>
  );
}
