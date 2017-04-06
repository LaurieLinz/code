// /**
//  * 
//  * @file
//  * In this assignment, you need to author a function to perform an arbitrary
//  * image search.
//  * 
//  */

// class ImageSearch {
//     constructor(url) {
//         // this.network = require(''); // require the module needed to make requests
//     }

//     /**
//      * Gets a photo given a keyword.
//      * @param {string} keyword The keyword to search for.  
//      * @param {Number} idx (Optional) The index of the results to store.
//      */
//     getPhoto(keyword, idx = 0) {
//         this.search(keyword).then((result) => {
//             // flickr's API is weird/bad, must define this fn
//             var jsonFlickrApi = function(photos) {
//                 this.getFlickrPhoto(photos['photos']['photo'][idx]).then((contents) => {
//                     this.storeFile(keyword + '.jpg', contents);
//                 });
//             };
//             eval(result); // flickr's API is weird
//         });
//     }

//     /**
//      * Gets the photo contents and returns the network response as a promise.
//      * Takes an input of an ID.
//      * @param {String} id The Flickr photo ID.
//      * @return {Promise} A promise that resolves with the photo contents of the
//      * ID.
//      */
//     getFlickrPhoto(id) {
//         // TODO
//     }

//     /**
//      * This function should initiate the request and return a promise with the
//      * image URL for the first result.  Note that you'll need to initiate two
//      * requests to make this happen.
//      * 
//      * ex. 
//      * format=json
//      * method=flickr.photos.search
//      * api_key=d103d9be76c00510e3738c283338125e
//      * text=waterfall
//      * 
//      * https://www.flickr.com/services/api/flickr.photos.search.html
//      * https://www.flickr.com/services/api/flickr.photos.getSizes.html
//      * 
//      * @param {String} keyword The keyword to search and pass to the Flickr API.
//      * @return {Promise} A promise that resolves with the search listing of the
//      * inputted keyword.
//      */
//     search(keyword) {
//         // this.network(SOME_URL, SOME_CALLBACK)
//         // TODO
//     }

//     /**
//      * Stores the file in the filesystem.
//      * @param {String} filename The filename to use.
//      * @param {String} contents The contents of the file.
//      */
//     storeFile(filename, contents) {
//         // TODO
//     }
// }

// module.exports = ImageSearch;