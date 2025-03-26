import { atom } from "jotai";

export const cartAtom = atom([])

export const totalAtom = atom( (get) => get(cartAtom).reduce((total, currentValue) => total + currentValue.price, 0))


export const postsAtom = atom([]);
export const loadingAtom = atom(false);
export const fetchPostsAtom = atom(null, async (get, set) => {
  set(loadingAtom, true);
  try {
    const response = await fetch('https://api.apify.com/v2/datasets/PuK5V5AiYgBdZgzlt/items?clean=true&format=json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
      
    }
    const data = await response.json();
    console.log("Fetched data:", data);

    // Ensure the path exists before setting postsAtom
    const posts = data?.graphql?.user?.edge_owner_to_timeline_media?.edges || [];
    set(postsAtom, posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    set(postsAtom, []); // Set an empty array as fallback
  } finally {
    set(loadingAtom, false);
  }
});

console.log("postsAtom", postsAtom);
console.log("loadingAtom", loadingAtom);
