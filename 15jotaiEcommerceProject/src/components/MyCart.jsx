import React from "react";
import { cartAtom, totalAtom } from "../atom/cartAtom";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";

export default function MyCart() {
  const [cart, setCart] = useAtom(cartAtom);
  const [total] = useAtom(totalAtom);
  console.log("MyCart", cart);

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  return (
    <div className="container mx-auto">
      {/* <button
        className="absolute top-3 right-4 text-2xl cursor-pointer"
        onClick={onClose}
      >
        ✖
      </button> */}

      {cart.length === 0 ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            viewBox="0 0 1000 1000"
            enable-background="new 0 0 1000 1000"
            id="Catsittinginthehouse"
            height={"50vh"}
            className="mx-auto"
          >
            <path
              d="M0 0h1000v1000H0z"
              fill="#f6f8f4"
              class="colorf4f5f8 svgShape"
            ></path>
            <path
              d="M243.86 634.66v30.931h-61.862M305.722 665.591H243.86V634.66M212.929 665.591h61.862v30.931h-61.862z"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <path
              d="M261.437 727.453H243.86v-30.931h61.862M181.998 696.522h61.862v30.931h-50.163M160.911 665.591h52.018v30.931h-30.931"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <path
              d="M319.432 696.522h-44.641v-30.931h21.443M817.643 441.418v30.931h61.862M755.781 472.349h61.862v-30.931"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <path
              d="M786.712 472.349h61.862v30.931h-61.862z"
              transform="rotate(-180 817.643 487.814)"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <path
              d="M800.066 534.211h17.577V503.28h-61.862M879.505 503.28h-61.862v30.931h50.162M900.592 472.349h-52.018v30.931h30.931M742.07 503.28h44.642v-30.931h-21.444"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <circle
              cx="587.034"
              cy="251.851"
              r="56.006"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></circle>
            <path
              d="M587.034 201.561v5.471M587.034 296.67v5.47M637.323 251.851h-5.47M542.215 251.851h-5.471"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <circle
              cx="587.034"
              cy="251.851"
              r="4.523"
              fill="#e5e5e5"
              class="colore5e5e5 svgShape"
            ></circle>
            <path
              d="m587.034 251.851 24.151-29.889"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <path
              d="m571.795 236.906 15.239 14.945"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <path
              d="M135.838 252.95H259.14v125.311H135.838z"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <path
              d="M154.255 271.175h86.469v88.86h-86.469z"
              transform="rotate(90 197.49 315.605)"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <path
              d="M289.227 212.972h108.626v77.757H289.227z"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <path
              d="M320.612 213.488h45.856v76.725h-45.856z"
              transform="rotate(90 343.54 251.85)"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <path
              d="M292.697 352.597h72.635v47.673h-72.635z"
              transform="rotate(90 329.014 376.433)"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <path
              d="M289.227 324.166h79.575v104.536h-79.575z"
              fill="none"
              stroke="#e5e5e5"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokee5e5e5 svgStroke"
            ></path>
            <path
              d="m833.833 784.156 7.917.013M802.333 784.221h18.5M473 784.221h315.333M200 784.221h252M156.5 784.221h22M126.5 784.221h12"
              fill="none"
              stroke="#a82f27"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokea83727 svgStroke"
            ></path>
            <path
              d="M330.899 674.41c-18.226-11.597-50.343-32.032-64.218-74.435-9.675-29.567-9.915-66.84.523-70.338 12.062-4.041 33.152 38.776 40.916 35.106 6.091-2.879-6.607-29.368-8.333-74.333-1.176-30.636 3.236-56.933 17-80.333 6.32-10.745 10.931-18.583 16-18 20.905 2.403 14.971 144.005 37.333 146.667 10.509 1.251 18.928-29.177 30.667-26.667 9.98 2.135 16.691 26.844 18.47 42.808.088.789.152 1.418.197 1.858 5.241 51.897-25.052 89.304-35.333 102-15.256 18.839-25.639 22.554-33.554 22.667-8.346.119-14.722-3.854-19.668-7z"
              fill="#9ae45f"
              class="color6dcca3 svgShape"
            ></path>
            <path
              d="M325.5 477c3.514 37 24.486 93.253 27.612 141a397.125 397.125 0 0 1-3 81"
              fill="none"
              stroke="#d45985"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStroke465172 svgStroke"
            ></path>
            <path
              d="M422.01 784.221H267.002a87.357 87.357 0 0 1 1.543-88.518l22.799-37.286H397.67l22.149 34.519a87.356 87.356 0 0 1 5.17 85.106l-2.979 6.179z"
              fill="#26d7fe"
              class="color2359b2 svgShape"
            ></path>
            <path
              d="M375.022 561.879s-.404 17.005-23.783 39.121M301.112 601s15.691 32 52.846 32"
              fill="none"
              stroke="#d45985"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStroke465172 svgStroke"
            ></path>
            <path
              d="M382.324 684.799s23.577 15.359 23.577 52.28"
              opacity=".67"
              fill="none"
              stroke="#54211e"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStroke1e2a54 svgStroke"
            ></path>
            <path
              d="M523.593 794.04c0 29.249 49.86 52.96 111.365 52.96 48.154 0 89.17-14.534 104.708-34.882l-116.47 8.401-99.603-26.479z"
              fill="#d6d6d6"
              class="colord6d6d6 svgShape"
            ></path>
            <path
              d="M723.662 791.053c-2.929-.613-5.962-.331-8.746.767-17.59 6.941-48.385 11.543-83.44 11.543-54.676 0-99-11.193-99-25 0-12.216 34.697-22.383 80.559-24.565l3.154-16.718c-62.905 3.907-110.714 23.366-110.714 46.784 0 26.234 59.994 47.5 134 47.5 32.41 0 62.131-4.079 85.302-10.868 15.181-4.449 14.368-26.202-1.115-29.443z"
              fill="#f72e21"
              class="colorf78a21 svgShape"
            ></path>
            <path
              d="m671.141 801.275 47.994-10.468s12.576 1.345 14.899 8.008c3.983 11.422-4.18 18.372-4.18 18.372s-3.187-26.38-58.713-15.912z"
              opacity=".26"
              fill="#d85b53"
              class="color9b463d svgShape"
            ></path>
            <path
              d="M723.662 791.053c-2.929-.613-5.962-.331-8.746.767-17.59 6.941-48.385 11.543-83.44 11.543-54.676 0-99-11.193-99-25 0-12.216 34.697-22.383 80.559-24.565l3.154-16.718c-62.905 3.907-110.714 23.366-110.714 46.784 0 26.234 59.994 47.5 134 47.5 32.41 0 62.131-4.079 85.302-10.868 15.181-4.449 14.368-26.202-1.115-29.443h0z"
              fill="none"
              stroke="#a82f27"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokea83727 svgStroke"
            ></path>
            <path
              d="M714.301 439.872c-16.036-5.119-33.69-7.956-52.231-7.956-18.394 0-35.916 2.789-51.851 7.832-9.651-22.737-22.863-41.212-36.842-52.724-2.196-1.808-5.491-1.153-6.868 1.335-27.714 50.066-40.134 107.362-34.862 169.87 4.825 69.769 31.701 146.546 57.209 225.771h146.843c25.594-79.238 52.183-155.102 57.164-223.986 5.462-62.905-7.089-120.413-35.615-171.013-1.401-2.485-4.715-3.111-6.894-1.27-13.692 11.575-26.591 29.805-36.053 52.141z"
              fill="#f72e21"
              class="colorf78a21 svgShape"
            ></path>
            <path
              d="M674.446 533.937c0 3.717-5.541 6.729-12.375 6.729-6.835 0-12.376-3.013-12.376-6.729l12.545-2.812 12.206 2.812zM713.321 782.594s.01-7.862 1.5-14.5c13.167-58.667 4.522-76.75 4.522-76.75l-27.833 91.471 21.811-.221zM608.819 782.594s-.01-7.862-1.5-14.5c-13.167-58.667-4.522-76.75-4.522-76.75l27.833 91.471-21.811-.221z"
              opacity=".26"
              fill="#d85b53"
              class="color9b463d svgShape"
            ></path>
            <path
              d="M714.301 439.872c-16.036-5.119-33.69-7.956-52.231-7.956-18.394 0-35.916 2.789-51.851 7.832-9.651-22.737-22.863-41.212-36.842-52.724-2.196-1.808-5.491-1.153-6.868 1.335-27.714 50.066-40.134 107.362-34.862 169.87 4.825 69.769 31.701 146.546 57.209 225.771h146.843c25.594-79.238 52.183-155.102 57.164-223.986 5.462-62.905-7.089-120.413-35.615-171.013-1.401-2.485-4.715-3.111-6.894-1.27-13.692 11.575-26.591 29.805-36.053 52.141z"
              fill="none"
              stroke="#a82f27"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokea83727 svgStroke"
            ></path>
            <circle
              cx="620.603"
              cy="479.815"
              r="8"
              fill="#a82f27"
              class="colora83727 svgShape"
            ></circle>
            <circle
              cx="703.603"
              cy="479.815"
              r="8"
              fill="#a82f27"
              class="colora83727 svgShape"
            ></circle>
            <path
              d="M668.771 506.725a67.276 67.276 0 0 0-13.235 0c-2.056.204-2.817 2.31-1.2 3.367 1.379.901 2.764 1.846 4.151 2.833 2.014 1.434 5.318 1.434 7.333 0a126.559 126.559 0 0 1 4.151-2.833c1.617-1.057.856-3.164-1.2-3.367z"
              fill="#a82f27"
              class="colora83727 svgShape"
            ></path>
            <path
              d="M719.135 694.221c-1.698 29.521-15.369 60.479-24.833 90H662.07l.223-83.087"
              fill="#f72e21"
              class="colorf78a21 svgShape"
            ></path>
            <path
              d="M605.006 694.221c1.698 29.521 18.369 60.479 27.833 90h29.232l-.223-83.087"
              fill="#f72e21"
              class="colorf78a21 svgShape"
            ></path>
            <path
              d="M680.487 532.998a13.064 13.064 0 0 1-6.243 1.56c-6.675 0-12.086-4.865-12.086-10.866M643.74 532.998c1.822.99 3.959 1.56 6.243 1.56 6.675 0 12.086-4.865 12.086-10.866M719.135 694.221c-1.698 29.521-18.369 60.479-27.833 90H662.07l.223-83.087"
              fill="none"
              stroke="#a82f27"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokea83727 svgStroke"
            ></path>
            <path
              d="M605.006 694.221c1.698 29.521 15.369 60.479 24.833 90h32.232l-.223-83.087"
              fill="none"
              stroke="#a82f27"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokea83727 svgStroke"
            ></path>
            <path
              d="M729.07 451.389c7.429-22.698 18.159-28.476 18.159-28.476s7.841 2.889 7.841 33.841M595.07 451.389c-7.429-22.698-18.159-28.476-18.159-28.476s-7.841 2.889-7.841 33.841"
              opacity=".26"
              fill="#d85b53"
              class="color9b463d svgShape"
            ></path>
            <path
              d="m644.267 772.25 2.5 11.25M679.873 772.25l-2.5 11.25"
              fill="none"
              stroke="#a82f27"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              class="colorStrokea83727 svgStroke"
            ></path>
            <g opacity=".24" fill="#000000" class="color000000 svgShape">
              <path
                d="M706.967 528.65c12.085 3.169 24.556 3.836 36.641 2M703.57 536.255c11.015 7.038 22.382 11.795 33.397 14.271M706.967 517.859c9.895-.662 20.105-3.374 30-8.134M617.173 528.65c-12.085 3.169-24.556 3.836-36.641 2M620.57 536.255c-11.015 7.038-22.382 11.795-33.397 14.271M617.173 517.859c-9.895-.662-20.105-3.374-30-8.134"
                fill="none"
                stroke="#a82f27"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                class="colorStrokea83727 svgStroke"
              ></path>
            </g>
          </svg>

          <h1 className="mx-auto text-5xl text-center p-1.5">
            Cart is Empty!!! 😿😿
          </h1>
        </>
      ) : (
        <>
          <h1 className="font-bold text-4xl p-4 text-center m-4">Your Cart</h1>

          <div className="overflow-x-auto">
            <table className=" border-collapse mx-auto">
              <thead>
                <tr className="bg-gray-100 font-medium text-2xl">
                  <th className="border-t-b border-gray-300 p-4 text-center">
                    Item
                  </th>

                  <th className="border-t-b border-gray-300 p-4 text-left">
                    Price
                  </th>
                  <th className="border-t-b border-gray-300 p-4 text-left">
                    Quantity
                  </th>
                  <th className="border-t-b border-gray-300 p-4 text-left">
                    Total
                  </th>
                  <th className="border-t-b border-gray-300  text-left">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 border-b border-gray-300 "
                  >
                    <td className="p-4 flex items-center gap-4 mx-1.5">
                      <img
                        className="w-35 object-contain"
                        src={item.image}
                        alt={item.title}
                      />
                      <span className="font-semibold text-3xl">
                        {item.title}
                      </span>
                    </td>
                    <td className="p-4 font-medium text-2xl ">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="p-4 font-medium text-2xl text-center">
                      {item.quantity}
                    </td>
                    <td className="p-4 font-medium text-2xl">
                      ${Math.ceil(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="font-medium text-2xl pl-4 text-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-gray-200  hover:bg-green-500 rounded-md flex items-center justify-center  p-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="30"
                          viewBox="0 -960 960 960"
                          width="30"
                        >
                          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full lg:w-1/2 mx-auto mr-72 mt-6">
            <div className="flex justify-between py-5 text-3xl border-b border-gray-300">
              <span className="font-medium">Sub Total:</span>
              <span className="font-medium">
                ${Math.ceil(total).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between py-5 text-3xl border-b border-gray-300">
              <span className="font-medium">Sales Tax (6%):</span>
              <span className="font-medium">
                ${Math.ceil(total * 0.06).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between py-5 text-3xl border-b border-gray-300">
              <span className="font-medium">Grand Total:</span>
              <span className="text-5xl font-medium">
                ${Math.ceil(total + total * 0.06).toFixed(2)}
              </span>
            </div>
            <div className="flex flex-row items-end py-5 gap-20 text-3xl border-b border-gray-300">
              <div className="flex justify-between py-5">
                <span className="font-medium">
                  Congrats, you're eligible for{" "}
                  <span className="text-green-500">Free Shipping</span>
                </span>
                <span>
                  <i className="fas fa-truck text-green-500 fa-1x"></i>
                </span>
              </div>
              <div className="flex justify-between py-5">
                <span className="font-medium">Continue Shopping:</span>
                <Link
                  to="/"
                  className="hover:translate-x-[-10px] transition-transform duration-300 ease-in-out"
                >
                  {/* <span > */}
                  <i className="fas fa-arrow-left text-blue-500 fa-2x"></i>
                  {/* </span> */}
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
