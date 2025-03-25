import react from "react";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Fixed the typo
        height: "100vh", // Full viewport height to center vertically
        width: "100vw",
      }}
    >
      <h2>Cats are Loading... &nbsp; &nbsp; ≽^•⩊•^≼</h2>
      {/* <div
        class="tenor-gif-embed"
        data-postid="4719292840264554724"
        data-share-method="host"
        data-aspect-ratio="1.77857"
        data-width="100%"
      >
        <a href="https://tenor.com/view/tom-and-jerry-sleeping-gif-4719292840264554724">
          Tom And Jerry Sleeping GIF
        </a>
        from{" "}
        <a href="https://tenor.com/search/tom+and+jerry-gifs">
          Tom And Jerry GIFs
        </a>
      </div>{" "}
      <script
        type="text/javascript"
        async
        src="https://tenor.com/embed.js"
      ></script> */}
    </div> 
  );
}
