// Increase the EventEmitter listeners limit to resolve MaxListenersExceededWarning
require('events').EventEmitter.defaultMaxListeners = 50;

// module.exports = {
//   plugins: [
//     {
//       resolve: `gatsby-transformer-sharp`,
//       options: {
//         shouldOnCreateNode: (args) => {
//           // your logic here
//         },
//       },
//     },
//   ],
// };