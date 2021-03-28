// /**
//  * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/ssr-apis/
//  */

// // // You can delete this file if you're not using it
// // const React = require("react")

// // exports.onRenderBody = ({ setPostBodyComponents }) => {
// //   setPostBodyComponents([<script type="text/javascript" src={"/js/pts.js"} />])
// // }

// import React from "react"
// export const onRenderBody = (
//   { setHeadComponents, setPostBodyComponents },
//   pluginOptions
// ) => {
//   // setHeadComponents([
//   //   <script
//   // 		key="tracking"
//   //     src="https://cdnjs.cloudflare.com/ajax/libs/tracking.js/1.1.3/tracking-min.js"
//   //     type="text/javascript"
//   //     async
//   //   />,
//   // ])
//   setHeadComponents([
//     // <script
//     //   key="particlesjs"
//     //   src="/js/tsparticles.js"
//     //   type="text/javascript"
//     //   defer
//     // />,
//     <script
//       src="js/scrollActiveSecton.js"
//       type="text/javascript"
//       async
//     ></script>,
//   ])
// }
