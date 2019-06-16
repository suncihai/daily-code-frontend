module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/java.png":
/*!*****************************!*\
  !*** ./assets/img/java.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/java_b445a81eeba2b76be7867b1d265a789a.png";

/***/ }),

/***/ "./assets/img/javascript.png":
/*!***********************************!*\
  !*** ./assets/img/javascript.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/javascript_1250263643f239ebcd7c7e410621d7e1.png";

/***/ }),

/***/ "./assets/img/logo.png":
/*!*****************************!*\
  !*** ./assets/img/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/logo_dfd27ce6e4aa3bdf8190943dae47dfcd.png";

/***/ }),

/***/ "./assets/img/submit_green.png":
/*!*************************************!*\
  !*** ./assets/img/submit_green.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/submit_green_dbe1ab5561bea36395a9b96466e03577.png";

/***/ }),

/***/ "./assets/img/submit_white.png":
/*!*************************************!*\
  !*** ./assets/img/submit_white.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/submit_white_2eaafef9fe06c08d55c62336df441fd1.png";

/***/ }),

/***/ "./common/css/constant.js":
/*!********************************!*\
  !*** ./common/css/constant.js ***!
  \********************************/
/*! exports provided: headHeight, footerHeight, lineHeight, fontSize, themeColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headHeight", function() { return headHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerHeight", function() { return footerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return lineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeColor", function() { return themeColor; });
/* 头部导航 */
var headHeight = '50px';
/* 底部 */

var footerHeight = '50px';
/* 统一 UI 样式 */

var lineHeight = '1.5'; // 默认行高

var fontSize = '14px'; // 默认字体大小

var themeColor = '#6abb03'; // 默认主题颜色

/***/ }),

/***/ "./common/css/style.css":
/*!******************************!*\
  !*** ./common/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./common/js/axios.js":
/*!****************************!*\
  !*** ./common/js/axios.js ***!
  \****************************/
/*! exports provided: axiosClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosClient", function() { return axiosClient; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./common/js/utils.js");
 // import axiosRetry from 'axios-retry'
// const axiosOrigin = require('axios-proxy-fix')



 // import utils from 'utils'
// axiosOrigin.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axiosOrigin.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

if (false) { var Fingerprint2; }

var cookieData; // if (process.browser) {
//   cookieData =  cookie.parse(document.cookie)
// }

/**
 * [axiosClient description]
 * @type {[type]}
 */

var axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'X-BM-CLIENT': 'WEB',
    'X-BM-DEVICE': 1,
    'X-BM-VERSION': process.env.version || '1.0.0'
  },
  transformRequest: function transformRequest(data, headers) {
    cookieData = cookie__WEBPACK_IMPORTED_MODULE_2___default.a.parse(document.cookie);
    headers['X-BM-DEVICE'] = window.device || 1;
    headers['Authorization'] = cookieData && cookieData.accessToken;
    return qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(data);
  },
  transformResponse: function transformResponse(res) {
    //console.log("res",res);
    var host = window.location.host;
    var webDomain = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["breakDownHostUrl"])(host);
    var cookieOptions;

    if (webDomain.indexOf('localhost') < 0) {
      cookieOptions = {
        maxAge: 0,
        domain: ".".concat(webDomain)
      };
    } else {
      cookieOptions = {
        maxAge: 0
      };
    }

    if (+res.code === -6) {
      document.cookie = cookie__WEBPACK_IMPORTED_MODULE_2___default.a.serialize('accessToken', null, cookieOptions);
      document.cookie = cookie__WEBPACK_IMPORTED_MODULE_2___default.a.serialize('accessSalt', null, cookieOptions);
      document.cookie = cookie__WEBPACK_IMPORTED_MODULE_2___default.a.serialize('loginName', null, cookieOptions);
    }

    var ret = JSON.parse(res);
    return ret;
  } // baseURL: process.env.baseUrl,

});
axiosClient.interceptors.response.use(function (res) {
  if (res.status === 200) {
    return res.data;
  }

  return res;
}, function (err) {
  return err;
});

/***/ }),

/***/ "./common/js/const.js":
/*!****************************!*\
  !*** ./common/js/const.js ***!
  \****************************/
/*! exports provided: problemList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problemList", function() { return problemList; });
var problemList = ["Two Sum", "Add Two Numbers", "Longest Substring Without Repeating Characters", "Median of Two Sorted Arrays", "Longest Palindromic Substring", "ZigZag Conversion", "Reverse Integer", "String to Integer (atoi)", "Palindrome Number", "Regular Expression Matching", "Container With Most Water", "Integer to Roman", "Roman to Integer", "Longest Common Prefix", "3Sum", "3Sum Closest", "Letter Combinations of a Phone Number", "4Sum", "Remove Nth Node From End of List", "Valid Parentheses", "Merge Two Sorted Lists", "Generate Parentheses", "Merge k Sorted Lists", "Swap Nodes in Pairs", "Reverse Nodes in k-Group", "Remove Duplicates from Sorted Array", "Remove Element", "Implement strStr()", "Divide Two Integers", "Substring with Concatenation of All Words", "Next Permutation", "Longest Valid Parentheses", "Search in Rotated Sorted Array", "Search for a Range", "Search Insert Position", "Valid Sudoku", "Sudoku Solver", "Count and Say", "Combination Sum", "Combination Sum II", "First Missing Positive", "Trapping Rain Water", "Multiply Strings", "Wildcard Matching", "Jump Game II", "Permutations", "Permutations II", "Rotate Image", "Group Anagrams", "Pow(x, n)", "N-Queens", "N-Queens II", "Maximum Subarray", "Spiral Matrix", "Jump Game", "Merge Intervals", "Insert Interval", "Length of Last Word", "Spiral Matrix II", "Permutation Sequence", "Rotate List", "Unique Paths", "Unique Paths II", "Minimum Path Sum", "Valid Number", "Plus One", "Add Binary", "Text Justification", "Sqrt(x)", "Climbing Stairs", "Simplify Path", "Edit Distance", "Set Matrix Zeroes", "Search a 2D Matrix", "Sort Colors", "Minimum Window Substring", "Combinations", "Subsets", "Word Search", "Remove Duplicates from Sorted Array II", "Search in Rotated Sorted Array II", "Remove Duplicates from Sorted List II", "Remove Duplicates from Sorted List", "Largest Rectangle in Histogram", "Maximal Rectangle", "Partition List", "Scramble String", "Merge Sorted Array", "Gray Code", "Subsets II", "Decode Ways", "Reverse Linked List II", "Restore IP Addresses", "Binary Tree Inorder Traversal", "Unique Binary Search Trees II", "Unique Binary Search Trees", "Interleaving String", "Validate Binary Search Tree", "Recover Binary Search Tree", "Same Tree", "Symmetric Tree", "Binary Tree Level Order Traversal", "Binary Tree Zigzag Level Order Traversal", "Maximum Depth of Binary Tree", "Construct Binary Tree from Preorder and Inorder Traversal", "Construct Binary Tree from Inorder and Postorder Traversal", "Binary Tree Level Order Traversal II", "Convert Sorted Array to Binary Search Tree", "Convert Sorted List to Binary Search Tree", "Balanced Binary Tree", "Minimum Depth of Binary Tree", "Path Sum", "Path Sum II", "Flatten Binary Tree to Linked List", "Distinct Subsequences", "Populating Next Right Pointers in Each Node", "Populating Next Right Pointers in Each Node II", "Pascal's Triangle", "Pascal's Triangle II", "Triangle", "Best Time to Buy and Sell Stock", "Best Time to Buy and Sell Stock II", "Best Time to Buy and Sell Stock III", "Binary Tree Maximum Path Sum", "Valid Palindrome", "Word Ladder II", "Word Ladder", "Longest Consecutive Sequence", "Sum Root to Leaf Numbers", "Surrounded Regions", "Palindrome Partitioning", "Palindrome Partitioning II", "Clone Graph", "Gas Station", "Candy", "Single Number", "Single Number II", "Copy List with Random Pointer", "Word Break", "Word Break II", "Linked List Cycle", "Linked List Cycle II", "Reorder List", "Binary Tree Preorder Traversal", "Binary Tree Postorder Traversal", "LRU Cache", "Insertion Sort List", "Sort List", "Max Points on a Line", "Evaluate Reverse Polish Notation", "Reverse Words in a String", "Maximum Product Subarray", "Find Minimum in Rotated Sorted Array", "Find Minimum in Rotated Sorted Array II", "Min Stack", "Binary Tree Upside Down", "Read N Characters Given Read4", "Read N Characters Given Read4 II - Call multiple times", "Longest Substring with At Most Two Distinct Characters ", "Intersection of Two Linked Lists *", "One Edit Distance", "Find Peak Element", "Missing Ranges", "Maximum Gap", "Compare Version Numbers", "Fraction to Recurring Decimal", "Two Sum II - Input array is sorted", "Excel Sheet Column Title", "Majority Element", "Two Sum III - Data structure design", "Excel Sheet Column Number", "Factorial Trailing Zeroes", "Binary Search Tree Iterator", "Dungeon Game", "Combine Two Tables", "Second Highest Salary", "Nth Highest Salary", "Rank Scores", "Largest Number", "Consecutive Numbers", "Employees Earning More Than Their Managers", "Duplicate Emails", "Customers Who Never Order", "Department Highest Salary", "Department Top Three Salaries", "Reverse Words in a String II", "Repeated DNA Sequences", "Best Time to Buy and Sell Stock IV", "Rotate Array", "Reverse Bits", "Number of 1 Bits", "Word Frequency #", "Valid Phone Numbers #", "Transpose File #", "Tenth Line #", "Delete Duplicate Emails", "Rising Temperature", "House Robber", "Binary Tree Right Side View", "Number of Islands", "Bitwise AND of Numbers Range", "Happy Number", "Remove Linked List Elements", "Count Primes", "Isomorphic Strings", "Reverse Linked List", "Course Schedule", "Implement Trie (Prefix Tree)", "Minimum Size Subarray Sum", "Course Schedule II", "Add and Search Word - Data structure design", "Word Search II", "House Robber II", "Shortest Palindrome", "Kth Largest Element in an Array", "Combination Sum III", "Contains Duplicate", "The Skyline Problem", "Contains Duplicate II", "Contains Duplicate III", "Maximal Square", "Count Complete Tree Nodes", "Rectangle Area", "Basic Calculator", "Implement Stack using Queues", "Invert Binary Tree", "Basic Calculator II", "Summary Ranges", "Majority Element II", "Kth Smallest Element in a BST", "Power of Two", "Implement Queue using Stacks", "Number of Digit One", "Palindrome Linked List", "Lowest Common Ancestor of a Binary Search Tree", "Lowest Common Ancestor of a Binary Tree", "Delete Node in a Linked List", "Product of Array Except Self", "Sliding Window Maximum", "Search a 2D Matrix II", "Different Ways to Add Parentheses", "Valid Anagram", "Shortest Word Distance ", "Shortest Word Distance II ", "Shortest Word Distance III ", "Strobogrammatic Number ", "Strobogrammatic Number II ", "Strobogrammatic Number III ", "Group Shifted Strings ", "Count Univalue Subtrees ", "Flatten 2D Vector", "Meeting Rooms", "Meeting Rooms II", "Factor Combinations", "Verify Preorder Sequence in Binary Search Tree", "Paint House", "Binary Tree Paths", "Add Digits", "3Sum Smaller", "Single Number III", "Graph Valid Tree", "Trips and Users", "Ugly Number", "Ugly Number II", "Paint House II", "Palindrome Permutation", "Palindrome Permutation II", "Missing Number", "Alien Dictionary", "Closest Binary Search Tree Value", "Encode and Decode Strings", "Closest Binary Search Tree Value II", "Integer to English Words", "H-Index", "H-Index II", "Paint Fence", "Find the Celebrity", "First Bad Version", "Perfect Squares", "Wiggle Sort", "Zigzag Iterator", "Expression Add Operators", "Move Zeroes", "Peeking Iterator", "Inorder Successor in BST", "Walls and Gates", "Find the Duplicate Number", "Unique Word Abbreviation", "Game of Life", "Word Pattern", "Word Pattern II", "Nim Game", "Flip Game", "Flip Game II", "Find Median from Data Stream", "Best Meeting Point", "Serialize and Deserialize Binary Tree", "Binary Tree Longest Consecutive Sequence", "Bulls and Cows", "Longest Increasing Subsequence", "Remove Invalid Parentheses", "Smallest Rectangle Enclosing Black Pixels", "Range Sum Query - Immutable", "Range Sum Query 2D - Immutable", "Number of Islands II", "Additive Number", "Range Sum Query - Mutable", "Range Sum Query 2D - Mutable", "Best Time to Buy and Sell Stock with Cooldown", "Minimum Height Trees", "Sparse Matrix Multiplication", "Burst Balloons", "Super Ugly Number", "Binary Tree Vertical Order Traversal", "Count of Smaller Numbers After Self", "Remove Duplicate Letters", "Shortest Distance from All Buildings", "Maximum Product of Word Lengths", "Bulb Switcher", "Generalized Abbreviation", "Create Maximum Number", "Coin Change", "Number of Connected Components in an Undirected Graph", "Wiggle Sort II", "Maximum Size Subarray Sum Equals k", "Power of Three", "Count of Range Sum", "Odd Even Linked List", "Longest Increasing Path in a Matrix", "Patching Array", "Verify Preorder Serialization of a Binary Tree", "Reconstruct Itinerary", "Largest BST Subtree ", "Increasing Triplet Subsequence", "Self Crossing", "Palindrome Pairs", "House Robber III", "Counting Bits", "Nested List Weight Sum", "Longest Substring with At Most K Distinct Characters", "Flatten Nested List Iterator", "Power of Four", "Integer Break", "Reverse String", "Reverse Vowels of a String", "Moving Average from Data Stream", "Top K Frequent Elements", "Design Tic-Tac-Toe", "Intersection of Two Arrays", "Intersection of Two Arrays II", "Android Unlock Patterns", "Data Stream as Disjoint Intervals", "Design Snake Game", "Russian Doll Envelopes", "Design Twitter", "Line Reflection", "Count Numbers with Unique Digits", "Rearrange String k Distance Apart", "Logger Rate Limiter", "Sort Transformed Array", "Bomb Enemy", "Design Hit Counter", "Max Sum of Rectangle No Larger Than K", "Nested List Weight Sum II ", "Water and Jug Problem", "Find Leaves of Binary Tree", "Valid Perfect Square", "Largest Divisible Subset", "Plus One Linked List", "Range Addition", "Sum of Two Integers", "Super Pow", "Find K Pairs with Smallest Sums", "Guess Number Higher or Lower", "Guess Number Higher or Lower II", "Wiggle Subsequence", "Combination Sum IV", "Kth Smallest Element in a Sorted Matrix", "Design Phone Directory ", "Insert Delete GetRandom O(1)", "Insert Delete GetRandom O(1) - Duplicates allowed", "Linked List Random Node", "Ransom Note", "Shuffle an Array", "Mini Parser", "Lexicographical Numbers", "First Unique Character in a String", "Longest Absolute File Path", "Find the Difference", "Elimination Game", "Perfect Rectangle", "Is Subsequence", "UTF-8 Validation", "Decode String", "Longest Substring with At Least K Repeating Characters", "Rotate Function", "Integer Replacement", "Random Pick Index", "Evaluate Division", "Nth Digit", "Binary Watch", "Remove K Digits", "Frog Jump", "Sum of Left Leaves", "Convert a Number to Hexadecimal", "Queue Reconstruction by Height", "Trapping Rain Water II", "Valid Word Abbreviation", "Longest Palindrome", "Split Array Largest Sum", "Minimum Unique Word Abbreviation", "Fizz Buzz", "Arithmetic Slices", "Third Maximum Number", "Add Strings", "Partition Equal Subset Sum", "Pacific Atlantic Water Flow", "Sentence Screen Fitting", "Battleships in a Board", "Strong Password Checker", "Maximum XOR of Two Numbers in an Array", "Valid Word Square", "Reconstruct Original Digits from English", "Longest Repeating Character Replacement", "Word Squares", "Convert Binary Search Tree to Sorted Doubly Linked List", "Construct Quad Tree", "Serialize and Deserialize N-ary Tree", "N-ary Tree Level Order Traversal", "Flatten a Multilevel Doubly Linked List", "Encode N-ary Tree to Binary Tree", "All O`one Data Structure", "Minimum Genetic Mutation", "Number of Segments in a String", "Non-overlapping Intervals", "Find Right Interval", "Path Sum III", "Find All Anagrams in a String", "Ternary Expression Parser ", "K-th Smallest in Lexicographical Order", "Arranging Coins", "Find All Duplicates in an Array", "String Compression", "Sequence Reconstruction", "Add Two Numbers II", "Arithmetic Slices II - Subsequence", "Number of Boomerangs", "Find All Numbers Disappeared in an Array", "Serialize and Deserialize BST", "Delete Node in a BST", "Sort Characters By Frequency", "Minimum Number of Arrows to Burst Balloons", "Minimum Moves to Equal Array Elements", "4Sum II", "Assign Cookies", "132 Pattern", "Circular Array Loop", "Poor Pigs", "Repeated Substring Pattern", "LFU Cache", "Hamming Distance", "Minimum Moves to Equal Array Elements II", "Island Perimeter", "Can I Win", "Optimal Account Balancing ", "Count The Repetitions", "Unique Substrings in Wraparound String", "Validate IP Address", "Convex Polygon ", "Implement Rand10() Using Rand7()", "Encode String with Shortest Length ", "Concatenated Words", "Matchsticks to Square", "Ones and Zeroes", "Heaters", "Number Complement", "Total Hamming Distance", "Generate Random Point in a Circle", "Largest Palindrome Product", "Sliding Window Median", "Magical String", "License Key Formatting", "Smallest Good Base", "Find Permutation ", "Max Consecutive Ones", "Predict the Winner", "Max Consecutive Ones II", "Zuma Game", "Robot Room Cleaner", "The Maze ", "Increasing Subsequences", "Construct the Rectangle", "Reverse Pairs", "Target Sum", "Teemo Attacking", "Next Greater Element I", "Random Point in Non-overlapping Rectangles", "Diagonal Traverse", "The Maze III", "Keyboard Row", "Find Mode in Binary Search Tree", "IPO", "Next Greater Element II", "Base 7", "The Maze II", "Relative Ranks", "Perfect Number", "Most Frequent Subtree Sum", "Fibonacci Number", "Inorder Successor in BST II", "", "", "Find Bottom Left Tree Value", "Freedom Trail", "Find Largest Value in Each Tree Row", "Longest Palindromic Subsequence", "Super Washing Machines", "Coin Change 2", "Random Flip Matrix", "Detect Capital", "Longest Uncommon Subsequence I", "Longest Uncommon Subsequence II", "Continuous Subarray Sum", "Longest Word in Dictionary through Deleting", "Contiguous Array", "Beautiful Arrangement", "Word Abbreviation ", "Random Pick with Weight", "Minesweeper", "Minimum Absolute Difference in BST", "Lonely Pixel I ", "K-diff Pairs in an Array", "Lonely Pixel II ", "Design TinyURL", "Encode and Decode TinyURL", "Construct Binary Tree from String", "Complex Number Multiplication", "Convert BST to Greater Tree", "Minimum Time Difference", "Single Element in a Sorted Array", "Reverse String II", "01 Matrix", "Diameter of Binary Tree", "Output Contest Matches", "Boundary of Binary Tree", "Remove Boxes", "Friend Circles", "Split Array with Equal Sum ", "Binary Tree Longest Consecutive Sequence II", "", "Student Attendance Record I", "Student Attendance Record II", "Optimal Division", "Brick Wall", "Split Concatenated Strings", "Next Greater Element III", "Reverse Words in a String III", "Quad Tree Intersection", "Maximum Depth of N-ary Tree", "Subarray Sum Equals K", "Array Partition I", "Longest Line of Consecutive One in Matrix", "Binary Tree Tilt", "Find the Closest Palindrome", "Array Nesting", "Reshape the Matrix", "Permutation in String", "Maximum Vacation Days", "Median Employee Salary", "Managers with at Least 5 Direct Reports", "Find Median Given Frequency of Numbers", "Subtree of Another Tree", "Squirrel Simulation", "Winning Candidate", "Distribute Candies", "Out of Boundary Paths", "Employee Bonus", "Get Highest Answer Rate Question", "Find Cumulative Salary of an Employee", "Count Student Number in Departments", "Shortest Unsorted Continuous Subarray", "Kill Process", "Delete Operation for Two Strings", "Find Customer Referee", "Investments in 2016", "Customer Placing the Largest Number of Orders", "Erect the Fence", "Design In-Memory File System", "N-ary Tree Preorder Traversal", "N-ary Tree Postorder Traversal", "Tag Validator", "Fraction Addition and Subtraction", "Valid Square", "Longest Harmonious Subsequence", "Big Countries", "Classes More Than 5 Students", "Friend Requests I: Overall Acceptance Rate", "Range Addition II", "Minimum Index Sum of Two Lists", "Non-negative Integers without Consecutive Ones", "Human Traffic of Stadium", "Friend Requests II: Who Has the Most Friends", "Consecutive Available Seats", "Design Compressed String Iterator", "Can Place Flowers", "Construct String from Binary Tree", "Sales Person", "Tree Node", "Find Duplicate File in System", "Triangle Judgement", "Valid Triangle Number", "Shortest Distance in a Plane", "Shortest Distance in a Line", "Second Degree Follower", "Average Salary: Departments VS Company", "Add Bold Tag in String", "Merge Two Binary Trees", "Students Report By Geography", "Biggest Single Number", "Not Boring Movies", "Task Scheduler", "Design Circular Queue", "Add One Row to Tree", "Maximum Distance in Arrays", "Minimum Factorization", "Exchange Seats", "Swap Salary", "Maximum Product of Three Numbers", "K Inverse Pairs Array", "Course Schedule III", "Design Excel Sum Formula", "Smallest Range", "Sum of Square Numbers", "Find the Derangement of An Array", "Design Log Storage System ", "Exclusive Time of Functions", "Average of Levels in Binary Tree", "Shopping Offers", "Decode Ways II", "Solve the Equation", "Design Circular Deque", "Design Search Autocomplete System", "Maximum Average Subarray I", "Maximum Average Subarray II", "Set Mismatch", "Maximum Length of Pair Chain", "Palindromic Substrings", "Replace Words", "Dota2 Senate", "2 Keys Keyboard", "4 Keys Keyboard ", "Find Duplicate Subtrees", "Two Sum IV - Input is a BST", "Maximum Binary Tree", "Print Binary Tree", "Coin Path", "Judge Route Circle", "Find K Closest Elements", "Split Array into Consecutive Subsequences", "Remove 9", "Image Smoother", "Maximum Width of Binary Tree", "Equal Tree Partition ", "Strange Printer", "Non-decreasing Array", "Path Sum IV", "Beautiful Arrangement II", "Kth Smallest Number in Multiplication Table", "Trim a Binary Search Tree", "Maximum Swap", "Second Minimum Node In a Binary Tree", "Bulb Switcher II", "Number of Longest Increasing Subsequence", "Longest Continuous Increasing Subsequence", "Cut Off Trees for Golf Event", "Implement Magic Dictionary", "Map Sum Pairs", "Valid Parenthesis String", "24 Game", "Valid Palindrome II", "Next Closest Time ", "Baseball Game", "K Empty Slots", "Redundant Connection", "Redundant Connection II", "Repeated String Match", "Longest Univalue Path", "Knight Probability in Chessboard", "Maximum Sum of 3 Non-Overlapping Subarrays", "Employee Importance", "Stickers to Spell Word", "Top K Frequent Words", "Binary Number with Alternating Bits", "Number of Distinct Islands", "Max Area of Island", "Count Binary Substrings", "Degree of an Array", "Partition to K Equal Sum Subsets", "Falling Squares", "Search in a Binary Search Tree", "Insert into a Binary Search Tree", "Search in a Sorted Array of Unknown Size", "Kth Largest Element in a Stream", "Binary Search", "Design HashSet", "Design HashMap", "Design Linked List", "Insert into a Cyclic Sorted List", "To Lower Case", "Random Pick with Blacklist", "Number of Distinct Islands II ", "Minimum ASCII Delete Sum for Two Strings", "Subarray Product Less Than K", "Best Time to Buy and Sell Stock with Transaction Fee", "Range Module", "Max Stack", "1-bit and 2-bit Characters", "Maximum Length of Repeated Subarray", "Find K-th Smallest Pair Distance", "Longest Word in Dictionary", "Accounts Merge", "Remove Comments", "Candy Crush", "Find Pivot Index", "Split Linked List in Parts", "Number of Atoms", "Minimum Window Subsequence", "Self Dividing Numbers", "My Calendar I", "Count Different Palindromic Subsequences", "My Calendar II", "My Calendar III", "Flood Fill", "Sentence Similarity", "Asteroid Collision", "Parse Lisp Expression", "Sentence Similarity II", "Monotone Increasing Digits", "Daily Temperatures", "Delete and Earn", "Cherry Pickup", "Closest Leaf in a Binary Tree", "Network Delay Time", "Find Smallest Letter Greater Than Target", "Prefix and Suffix Search", "Min Cost Climbing Stairs", "Largest Number At Least Twice of Others", "Shortest Completing Word", "Contain Virus", "Number Of Corner Rectangles ", "IP to CIDR", "Open the Lock", "Cracking the Safe", "Reach a Number", "Pour Water", "Pyramid Transition Matrix", "Set Intersection Size At Least Two", "Bold Words in String", "Employee Free Time", "Find Anagram Mappings ", "Special Binary String", "Prime Number of Set Bits in Binary Representation", "Partition Labels", "Largest Plus Sign", "Couples Holding Hands", "Toeplitz Matrix", "Reorganize String", "Max Chunks To Make Sorted (ver. 2)", "Max Chunks To Make Sorted (ver. 1)", "Basic Calculator IV", "Jewels and Stones", "Basic Calculator III", "Sliding Puzzle", "Minimize Max Distance to Gas Station", "Global and Local Inversions", "Split BST", "Swap Adjacent in LR String", "Swim in Rising Water", "K-th Symbol in Grammar", "Reaching Points", "Rabbits in Forest", "Transform to Chessboard", "Minimum Distance Between BST Nodes", "Letter Case Permutation", "Is Graph Bipartite?", "K-th Smallest Prime Fraction", "Cheapest Flights Within K Stops", "Rotated Digits", "Escape The Ghosts", "Domino and Tromino Tiling", "Custom Sort String", "Number of Matching Subsequences", "Preimage Size of Factorial Zeroes Function", "Valid Tic-Tac-Toe State", "Number of Subarrays with Bounded Maximum", "Rotate String", "All Paths From Source to Target", "Smallest Rotation with Highest Score", "Champagne Tower", "Similar RGB Color", "Minimum Swaps To Make Sequences Increasing", "Find Eventual Safe States", "Bricks Falling When Hit", "Unique Morse Code Words", "Split Array With Same Average", "Number of Lines To Write String", "Max Increase to Keep City Skyline", "Soup Servings", "Expressive Words", "Chalkboard XOR Game", "Subdomain Visit Count", "Largest Triangle Area", "Largest Sum of Averages", "Binary Tree Pruning", "Bus Routes", "Ambiguous Coordinates", "Linked List Components", "Race Car", "Most Common Word", "Short Encoding of Words", "Shortest Distance to a Character", "Card Flipping Game", "Binary Trees With Factors", "Goat Latin", "Friends Of Appropriate Ages", "Most Profit Assigning Work", "Making A Large Island ", "Unique Letter String ", "Consecutive Numbers Sum", "Positions of Large Groups", "Masking Personal Information", "Flipping an Image ", "Find And Replace in String", "Sum of Distances in Tree", "Image Overlap", "Rectangle Overlap", "New 21 Game", "Push Dominoes", "Similar String Groups", "Magic Squares In Grid", "Keys and Rooms", "Split Array into Fibonacci Sequence", "Guess the Word", "Backspace String Compare", "Longest Mountain in Array", "Hand of Straights", "Shortest Path Visiting All Nodes", "Shifting Letters", "Maximize Distance to Closest Person", "Rectangle Area II", "Loud and Rich", "Peak Index in a Mountain Array", "Car Fleet", "K-Similar Strings", "Exam Room", "Score of Parentheses", "Minimum Cost to Hire K Workers", "Mirror Reflection", "Buddy Strings", "Lemonade Change", "Score After Flipping Matrix", "Shortest Subarray with Sum at Least K", "All Nodes Distance K in Binary Tree", "Shortest Path to Get All Keys", "Smallest Subtree with all the Deepest Nodes", "Prime Palindrome", "Transpose Matrix", "Binary Gap", "Reordered Power of 2", "Advantage Shuffle", "Minimum Number of Refueling Stops", "Leaf-Similar Trees", "Length of Longest Fibonacci Subsequence", "Walking Robot Simulation", "Koko Eating Bananas", "Middle of the Linked List", "Stone Game", "Nth Magical Number", "Profitable Schemes", "Decoded String at Index", "Boats to Save People", "Reachable Nodes In Subdivided Graph", "Projection Area of 3D Shapes", "Uncommon Words from Two Sentences", "Spiral Matrix III", "Possible Bipartition", "Super Egg Drop", "Fair Candy Swap", "Construct Binary Tree from Preorder and Postorder Traversal", "Find and Replace Pattern", "Sum of Subsequence Widths", "Surface Area of 3D Shapes", "Groups of Special-Equivalent Strings", "All Possible Full Binary Trees", "Maximum Frequency Stack", "Monotonic Array", "Increasing Order Search Tree", "Bitwise ORs of Subarrays", "Orderly Queue", "RLE Iterator", "Online Stock Span", "Numbers At Most N Given Digit Set", "Valid Permutations for DI Sequence", "Fruit Into Baskets", "Sort Array By Parity", "Super Palindromes", "Sum of Subarray Minimums", "Smallest Range I", "Snakes and Ladders", "Smallest Range II", "Online Election"];

/***/ }),

/***/ "./common/js/utils.js":
/*!****************************!*\
  !*** ./common/js/utils.js ***!
  \****************************/
/*! exports provided: transLang, transLang2, rand, insertSignToParams, filterNAN, isMoneyType, validatePwd, getBrowserLang, breakDownHostUrl, getMainSite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transLang", function() { return transLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transLang2", function() { return transLang2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rand", function() { return rand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertSignToParams", function() { return insertSignToParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNAN", function() { return filterNAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMoneyType", function() { return isMoneyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePwd", function() { return validatePwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowserLang", function() { return getBrowserLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakDownHostUrl", function() { return breakDownHostUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainSite", function() { return getMainSite; });
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js/md5 */ "crypto-js/md5");
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__);
 // 正常转化

var transLang = function transLang(lang) {
  var langParam = 'en_US';

  if (lang === 'cn') {
    langParam = 'zh_CN';
  } else if (lang === 'jp') {
    langParam = 'ja_JP';
  } else if (lang === 'kr') {
    langParam = 'ko_KR';
  } else if (lang === 'vn') {
    langParam = 'vi_VN';
  } else if (lang === 'ru') {
    langParam = 'ru_RU';
  } else if (lang === 'cn_tw') {
    langParam = 'zh_TW';
  } else if (lang === 'tr') {
    langParam = 'tr_TR';
  } else {
    langParam = 'en_US';
  }

  return langParam;
}; // 变态转化 只给极验用

var transLang2 = function transLang2(lang) {
  var langParam = 'en';

  if (lang === 'cn') {
    langParam = 'zh-cn';
  } else {
    langParam = 'en';
  }

  return langParam;
};
var rand = function rand(length, current) {
  current = current ? current : '';
  return length ? rand(--length, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 60)) + current) : current;
};
/**
 *
 */

var insertSignToParams = function insertSignToParams(params, timestamp, salt) {
  // asii timsstamp salt => md5
  var keyArr = Object.keys(params);
  var ret = '';
  keyArr = keyArr.sort();
  keyArr.forEach(function (keyName) {
    if (keyName !== 'timestamp') {
      ret = "".concat(ret, "&").concat(keyName, "=").concat(params[keyName]);
    }
  });
  ret = ret.slice(1);
  ret = "".concat(ret).concat(timestamp).concat(salt);
  ret = crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(ret).toString();
  params.sign = ret; // 最后把sign偷偷加上

  return ret;
}; // 对输入框输入数字做格式处理，并返回正确内容

var filterNAN = function filterNAN(str) {
  //得到第一个字符是否为负号
  var s = str.toString();
  var t = str.toString().charAt(0); //先把非数字的都替换掉，除了数字和.

  s = s.replace(/[^\d\.]/g, ''); //必须保证第一个为数字而不是.

  s = s.replace(/^\./g, ''); //保证只有出现一个.而没有多个.

  s = s.replace(/\.{2,}/g, '.'); //保证.只出现一次，而不能出现两次以上

  s = s.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.'); //如果第一位是负号，则允许添加

  if (t == '-') {
    s = '-' + s;
  }

  return s;
}; // 判断是否符合金融格式 只能有一位小数点， 小数点后最长8位， 仅包含数字和一个小数点

var isMoneyType = function isMoneyType(str) {
  var s = str.toString();
  var reg = /^(([1-9]\d*|0)(\.\d{1,8})?)$|(0\.0?([1-9]\d?))$/;
  return reg.test(s);
}; // 8-32  必须包括数字 英文 可以包括 特殊字符 不含空格

var validatePwd = function validatePwd(str) {
  var ret = /[a-zA-Z[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]+/.test(str) && /\d+/.test(str) && str.length >= 6 && str.length <= 32 && !/\s/.test(str);
  return ret;
};
var getBrowserLang = function getBrowserLang() {
  var lang = window.navigator.language;
  var locale;

  if (lang === 'zh-CN' || lang === 'cn') {
    locale = 'cn';
  } else if (lang === 'vi-VN') {
    locale = 'vn';
  } else if (lang === 'ja-JP') {
    locale = 'jp';
  } else if (lang === 'ko-KR') {
    locale = 'kr';
  } else if (lang === 'ru-RU') {
    locale = 'ru';
  } else if (lang === 'zh-TW') {
    locale = 'cn_tw';
  } else if (lang === 'tr-TR') {
    locale = 'tr';
  } else {
    locale = 'en';
  }

  return locale;
};
var breakDownHostUrl = function breakDownHostUrl(url) {
  var hostUrl = url;
  var newUrl = hostUrl; // 防止未做301跳转，产生XXX.XXX的域名

  if (hostUrl.split('.') && hostUrl.split('.').length <= 2) {
    newUrl = hostUrl;
  } else {
    var number = hostUrl.indexOf('.');
    newUrl = hostUrl.slice(number + 1);
  }

  return newUrl;
};
var getMainSite = function getMainSite() {
  var mainSite = 'https://www.bitmart.com';
  var host = window.location.host;
  var webDomain = breakDownHostUrl(host);

  if (process.env.web_env === 'dev') {
    mainSite = "https://web-frontend-v2-dev-d981hkl2m.".concat(webDomain);
  } else if (process.env.web_env === 'testing') {
    mainSite = "https://web-frontend-v2-testing.".concat(webDomain);
  } else if (process.env.web_env === 'master') {
    mainSite = "https://www.".concat(webDomain);
  }

  return mainSite;
};

/***/ }),

/***/ "./components/code/AddRecord.js":
/*!**************************************!*\
  !*** ./components/code/AddRecord.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer/style/css */ "antd/lib/drawer/style/css");
/* harmony import */ var antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/drawer */ "antd/lib/drawer");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style/css */ "antd/lib/button/style/css");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row/style/css */ "antd/lib/row/style/css");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/spin/style/css */ "antd/lib/spin/style/css");
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col/style/css */ "antd/lib/col/style/css");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_radio_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/radio/style/css */ "antd/lib/radio/style/css");
/* harmony import */ var antd_lib_radio_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/radio */ "antd/lib/radio");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/switch/style/css */ "antd/lib/switch/style/css");
/* harmony import */ var antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/switch */ "antd/lib/switch");
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/form/style/css */ "antd/lib/form/style/css");
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/message/style/css */ "antd/lib/message/style/css");
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/select/style/css */ "antd/lib/select/style/css");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _common_js_axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/js/axios */ "./common/js/axios.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../store */ "./store.js");
/* harmony import */ var _assets_img_submit_green_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../assets/img/submit_green.png */ "./assets/img/submit_green.png");
/* harmony import */ var _assets_img_submit_green_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_img_submit_green_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _assets_img_submit_white_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../assets/img/submit_white.png */ "./assets/img/submit_white.png");
/* harmony import */ var _assets_img_submit_white_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_img_submit_white_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _common_css_constant__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../common/css/constant */ "./common/css/constant.js");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_30__);






















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Body = styled_components__WEBPACK_IMPORTED_MODULE_23___default.a.div.withConfig({
  displayName: "AddRecord__Body",
  componentId: "sc-1hr4qll-0"
})([""]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_23___default.a.div.withConfig({
  displayName: "AddRecord__Icon",
  componentId: "sc-1hr4qll-1"
})(["position:fixed;right:25px;transform:translateY(-80%);top:20%;padding:10px;border-radius:40px;border:2px solid ", ";cursor:pointer;transition:background 0.4s ease-in-out;.record-icon{width:30px;transition:all 0.4s ease-in-out;}&.hover-icon{background:", ";}"], _common_css_constant__WEBPACK_IMPORTED_MODULE_29__["themeColor"], _common_css_constant__WEBPACK_IMPORTED_MODULE_29__["themeColor"]);
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_20___default.a.Option;

var AddRecordWrap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddRecordWrap, _React$Component);

  function AddRecordWrap() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddRecordWrap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddRecordWrap)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      hover: false,
      visible: false,
      disableSelect: false,
      switchCheck: true,
      language: 'javascript',
      selectedPro: ''
    });

    _defineProperty(_assertThisInitialized(_this), "fetchProblems",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee() {
      var ret;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_common_js_axios__WEBPACK_IMPORTED_MODULE_22__["axiosClient"])({
                method: 'GET',
                url: '/api/get_problems'
              });

            case 2:
              ret = _context.sent;

              if (ret.code === 0) {
                _this.props.getProblems(ret.data);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "submitRecord",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee2() {
      var timestamp, params, ret;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              timestamp = new Date().getTime();
              params = {
                username: 'suncihai@gmail.com',
                problems: _this.state.selectedPro,
                timestamp: timestamp,
                language: _this.state.language,
                success: _this.state.switchCheck
              };
              _context2.next = 4;
              return Object(_common_js_axios__WEBPACK_IMPORTED_MODULE_22__["axiosClient"])({
                method: 'GET',
                url: '/api/submit_record',
                params: params
              });

            case 4:
              ret = _context2.sent;

              if (ret.code === 0) {
                setTimeout(function () {
                  _this.setState({
                    loading: false,
                    visible: false
                  });

                  antd_lib_message__WEBPACK_IMPORTED_MODULE_17___default.a.success('添加刷题记录成功！');

                  _this.props.updateRecords();
                }, 1000);
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "showDrawer", function () {
      _this.setState({
        visible: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      if (e.length <= 4) {
        _this.setState({
          switches: e.length,
          disableSelect: false,
          selectedPro: _this.filterProblems(e).join('-')
        }, function () {});
      } else {
        _this.setState({
          switches: e.length,
          disableSelect: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "radioChange", function (e) {
      _this.setState({
        language: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "switchChange", function (checked) {
      _this.setState({
        switchCheck: checked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterProblems", function (arr) {
      return arr.map(function (ele) {
        return ele.split('-')[0];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        visible: false
      });
    });

    return _this;
  }

  _createClass(AddRecordWrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchProblems();
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          _this2.setState({
            loading: true
          }, function () {
            _this2.submitRecord();
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          loading = _this$state.loading,
          hover = _this$state.hover,
          visible = _this$state.visible,
          disableSelect = _this$state.disableSelect,
          switchCheck = _this$state.switchCheck,
          language = _this$state.language;
      var icon = hover ? _assets_img_submit_white_png__WEBPACK_IMPORTED_MODULE_27___default.a : _assets_img_submit_green_png__WEBPACK_IMPORTED_MODULE_26___default.a;
      var iconStyle = classname__WEBPACK_IMPORTED_MODULE_30___default()({
        'hover-icon': hover
      });
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var problems = this.props.problems;
      return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(Body, null, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(Icon, {
        className: iconStyle
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("img", {
        className: "record-icon",
        onMouseOver: function onMouseOver() {
          _this3.setState({
            hover: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          _this3.setState({
            hover: false
          });
        },
        onClick: this.showDrawer,
        src: icon
      })), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
        title: "Create a new record",
        width: 450,
        onClose: this.onClose,
        visible: visible
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_15___default.a, {
        layout: "vertical",
        hideRequiredMark: true,
        onSubmit: function onSubmit(e) {
          return _this3.handleSubmit(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_7___default.a, {
        spinning: loading
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 24
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        label: "Problem"
      }, getFieldDecorator('problem', {
        rules: [{
          required: true,
          message: 'Please select at lease one problem'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(SelectWrapper, {
        onChange: this.onChange,
        problems: problems,
        disableSelect: disableSelect
      }))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        label: "Pass or Fail"
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_switch__WEBPACK_IMPORTED_MODULE_13___default.a, {
        defaultChecked: true,
        onChange: this.switchChange
      })), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        label: "Language"
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default.a.Group, {
        onChange: this.radioChange,
        value: language
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default.a, {
        value: "javascript"
      }, "Javascript"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default.a, {
        value: "java"
      }, "Java"))))))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right'
        }
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onClick: this.onClose,
        style: {
          marginRight: 8
        }
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        },
        type: "primary"
      }, "Submit"))));
    }
  }]);

  return AddRecordWrap;
}(react__WEBPACK_IMPORTED_MODULE_21___default.a.Component);

var SelectWrapper = Object(react__WEBPACK_IMPORTED_MODULE_21__["forwardRef"])(function (props, ref) {
  if (!props.disableSelect) {
    return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_20___default.a, {
      mode: "multiple",
      size: "large",
      onChange: props.onChange,
      ref: ref,
      placeholder: "Please select at lease one problem"
    }, props.problems.map(function (item, index) {
      var v = "".concat(item.number, "-").concat(item.name);
      return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(Option, {
        key: item.name,
        value: v
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", null, v));
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_20___default.a, {
      mode: "multiple",
      size: "large",
      ref: ref,
      onChange: props.onChange,
      placeholder: "Please select at lease one problem"
    }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(Option, {
      key: "000",
      value: "000",
      disabled: true
    }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", null, "You may at least select five problems!")));
  }
});
var mapDispatchToProps = {
  getRecords: _store__WEBPACK_IMPORTED_MODULE_25__["getRecords"],
  getProblems: _store__WEBPACK_IMPORTED_MODULE_25__["getProblems"]
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var problems = _ref3.problems;
  return {
    problems: problems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_24__["connect"])(mapStateToProps, mapDispatchToProps)(antd_lib_form__WEBPACK_IMPORTED_MODULE_15___default.a.create()(AddRecordWrap)));

/***/ }),

/***/ "./components/code/Calendar.js":
/*!*************************************!*\
  !*** ./components/code/Calendar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style/css */ "antd/lib/spin/style/css");
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_calendar_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/calendar/style/css */ "antd/lib/calendar/style/css");
/* harmony import */ var antd_lib_calendar_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_calendar_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/calendar */ "antd/lib/calendar");
/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/popover/style/css */ "antd/lib/popover/style/css");
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tooltip/style/css */ "antd/lib/tooltip/style/css");
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/tooltip */ "antd/lib/tooltip");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_js_axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/js/axios */ "./common/js/axios.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_js_const__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/js/const */ "./common/js/const.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store */ "./store.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _AddRecord__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AddRecord */ "./components/code/AddRecord.js");
/* harmony import */ var _assets_img_java_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/img/java.png */ "./assets/img/java.png");
/* harmony import */ var _assets_img_java_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_img_java_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_img_javascript_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/img/javascript.png */ "./assets/img/javascript.png");
/* harmony import */ var _assets_img_javascript_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_img_javascript_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _common_css_constant__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/css/constant */ "./common/css/constant.js");










function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var Body = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div.withConfig({
  displayName: "Calendar__Body",
  componentId: "sc-1mq0gob-0"
})(["min-height:87vh;padding-top:200px;margin:0 auto;"]);
var CalendarRow = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div.withConfig({
  displayName: "Calendar__CalendarRow",
  componentId: "sc-1mq0gob-1"
})(["display:flex;justify-content:space-around;width:1200px;margin:0 auto;"]);
var CalendarBox = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div.withConfig({
  displayName: "Calendar__CalendarBox",
  componentId: "sc-1mq0gob-2"
})(["display:inline-block;width:350px;border:1px solid #d9d9d9;border-radius:4px;.ant-fullcalendar-last-month-cell,.ant-fullcalendar-next-month-btn-day{color:#ccc;}.ant-fullcalendar-selected-day .ant-fullcalendar-value{background:transparent;color:rgba(0,0,0,0.65);box-shadow:none;}.ant-fullcalendar-today .ant-fullcalendar-value{box-shadow:none;}.month{padding:10px;text-align:center;position:relative;.records{position:absolute;right:10px;top:5px;color:#fff;background:", ";padding:5px;border-radius:50px;}}table{tr{td{.case1{border-radius:5px;background:#cce28c;}.case2{border-radius:5px;background:#6abb03;color:#fff;}.case3{border-radius:5px;background:#287d20;color:#fff;}}}}"], _common_css_constant__WEBPACK_IMPORTED_MODULE_20__["themeColor"]);
var DateTd = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div.withConfig({
  displayName: "Calendar__DateTd",
  componentId: "sc-1mq0gob-3"
})(["text-align:center;padding:10px;cursor:pointer;"]);
var PopTable = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.table.withConfig({
  displayName: "Calendar__PopTable",
  componentId: "sc-1mq0gob-4"
})(["tr td{text-align:left;padding:0 5px;img{height:24px;}}"]);

var CalendarWrap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarWrap, _React$Component);

  function CalendarWrap() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarWrap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarWrap)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false
    });

    _defineProperty(_assertThisInitialized(_this), "fetchRecords",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee() {
      var timestamp, params, ret, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              timestamp = new Date().getTime();
              params = {
                username: 'suncihai@gmail.com'
              };
              _context.next = 4;
              return Object(_common_js_axios__WEBPACK_IMPORTED_MODULE_10__["axiosClient"])({
                method: 'GET',
                url: '/api/get_record',
                params: params
              });

            case 4:
              ret = _context.sent;

              if (ret.code === 0) {
                data = ret.data;

                _this.insertName(data.currMonthRecord);

                _this.insertName(data.lastMonthRecord);

                _this.insertName(data.prevMonthRecord);

                _this.props.getRecords(data);
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "insertName", function (arr) {
      arr.map(function (list) {
        if (list.length > 0) {
          list.map(function (ele) {
            ele.name = _common_js_const__WEBPACK_IMPORTED_MODULE_12__["problemList"][ele.problem - 1];
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getListData", function (value, arr, month) {
      var date = value.date();
      var cell;

      if (month - value.month() == 1) {
        if (arr[date - 1]) {
          cell = {
            count: arr[date - 1].length,
            problems: arr[date - 1]
          };
        }
      }

      return cell;
    });

    _defineProperty(_assertThisInitialized(_this), "dateFullCellRender", function (value, arr, month) {
      var cell = _this.getListData(value, arr, month);

      if (cell) {
        var cellStyle = classname__WEBPACK_IMPORTED_MODULE_16___default()({
          'case1': cell.count >= 1 && cell.count <= 2,
          'case2': cell.count >= 3 && cell.count <= 4,
          'case3': cell.count >= 5
        });
        var text;

        if (cell.count === 0) {
          text = '你这天偷懒了！';
        } else if (cell.count > 0 && cell.count < 5) {
          text = "\u4F60\u8FD9\u5929\u5237\u4E86".concat(cell.count, "\u9898\uFF01");
        } else {
          text = "\u597D\u68D2\uFF01\u4F60\u8FD9\u5929\u5237\u4E86".concat(cell.count, "\u9898\uFF01");
        }

        if (cell.count > 0) {
          var content = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(PopTable, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", null, cell.problems.map(function (ele, index) {
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
              key: index
            }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, ele.problem), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, ele.name), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, function () {
              if (ele.language === 'java') {
                return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
                  src: _assets_img_java_png__WEBPACK_IMPORTED_MODULE_18___default.a
                });
              } else {
                return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
                  src: _assets_img_javascript_png__WEBPACK_IMPORTED_MODULE_19___default.a
                });
              }
            }()));
          })));
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_5___default.a, {
            placement: "bottom",
            trigger: "click",
            content: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, content)
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_7___default.a, {
            title: text
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(DateTd, {
            className: cellStyle
          }, value.date())));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_7___default.a, {
            title: text
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(DateTd, {
            className: cellStyle
          }, value.date()));
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(DateTd, null, value.date());
      }
    });

    return _this;
  }

  _createClass(CalendarWrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchRecords();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var loading = this.state.loading;
      var records = this.props.records;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Body, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
        spinning: loading
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(CalendarRow, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(CalendarBox, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        dateFullCellRender: function dateFullCellRender(value) {
          return _this2.dateFullCellRender(value, records.prevMonthRecord, moment__WEBPACK_IMPORTED_MODULE_15___default()().subtract(2, 'months').startOf('month').format('M'));
        },
        value: moment__WEBPACK_IMPORTED_MODULE_15___default()().subtract(2, 'months').startOf('month'),
        fullscreen: false,
        headerRender: function headerRender() {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "month"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, moment__WEBPACK_IMPORTED_MODULE_15___default()().subtract(2, 'months').startOf('month').format('MMM')), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "records"
          }, records.prevMonthCount));
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(CalendarBox, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        dateFullCellRender: function dateFullCellRender(value) {
          return _this2.dateFullCellRender(value, records.lastMonthRecord, moment__WEBPACK_IMPORTED_MODULE_15___default()().subtract(1, 'months').startOf('month').format('M'));
        },
        value: moment__WEBPACK_IMPORTED_MODULE_15___default()().subtract(1, 'months').startOf('month'),
        fullscreen: false,
        headerRender: function headerRender() {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "month"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, moment__WEBPACK_IMPORTED_MODULE_15___default()().subtract(1, 'months').startOf('month').format('MMM')), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "records"
          }, records.lastMonthCount));
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(CalendarBox, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        dateFullCellRender: function dateFullCellRender(value) {
          return _this2.dateFullCellRender(value, records.currMonthRecord, moment__WEBPACK_IMPORTED_MODULE_15___default()().subtract(0, 'months').startOf('month').format('M'));
        },
        fullscreen: false,
        headerRender: function headerRender() {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "month"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, moment__WEBPACK_IMPORTED_MODULE_15___default()().format("MMM")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "records"
          }, records.currMonthCount));
        }
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_AddRecord__WEBPACK_IMPORTED_MODULE_17__["default"], {
        updateRecords: this.fetchRecords
      }));
    }
  }]);

  return CalendarWrap;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var mapDispatchToProps = {
  getRecords: _store__WEBPACK_IMPORTED_MODULE_14__["getRecords"]
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var records = _ref2.records,
      problems = _ref2.problems;
  return {
    records: records,
    problems: problems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, mapDispatchToProps)(CalendarWrap));

/***/ }),

/***/ "./components/layout/CheckLogin.js":
/*!*****************************************!*\
  !*** ./components/layout/CheckLogin.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./store.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CheckLogin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckLogin, _React$Component);

  function CheckLogin() {
    _classCallCheck(this, CheckLogin);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckLogin).apply(this, arguments));
  }

  _createClass(CheckLogin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('testUserName')) {
        this.props.login(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('testUserName'));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }
  }]);

  return CheckLogin;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapDispatchToProps = {
  login: _store__WEBPACK_IMPORTED_MODULE_2__["login"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(CheckLogin));

/***/ }),

/***/ "./components/layout/Footer.js":
/*!*************************************!*\
  !*** ./components/layout/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_css_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/css/constant */ "./common/css/constant.js");



var Bar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Bar",
  componentId: "sc-1714oml-0"
})(["background:", ";height:65px;line-height:65px;color:#fff;text-align:center;"], _common_css_constant__WEBPACK_IMPORTED_MODULE_2__["themeColor"]);

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, null, "Copyright 2019 \xA9 code , All Rights Reserved"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider/style/css */ "antd/lib/divider/style/css");
/* harmony import */ var antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/logo.png */ "./assets/img/logo.png");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CheckLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CheckLogin */ "./components/layout/CheckLogin.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./store.js");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_css_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/css/constant */ "./common/css/constant.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var Bar = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Header__Bar",
  componentId: "sc-1dlmmob-0"
})(["background:transparent;position:fixed;top:0;color:", ";height:50px;padding-top:8px;padding-left:10px;width:100%;transition:ease 0.5s;z-index:100;&.isDark{background:#0e1118;}&.light{background:transparent;color:", ";}"], _common_css_constant__WEBPACK_IMPORTED_MODULE_12__["themeColor"], _common_css_constant__WEBPACK_IMPORTED_MODULE_12__["themeColor"]);
var Navi = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li.withConfig({
  displayName: "Header__Navi",
  componentId: "sc-1dlmmob-1"
})(["margin:0 15px;display:inline-block;cursor:pointer;&:hover{opacity:0.7;}"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1dlmmob-2"
})(["display:inline-block;height:35px;vertical-align:middle;cursor:pointer;"]);
var LoginBoxUl = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul.withConfig({
  displayName: "Header__LoginBoxUl",
  componentId: "sc-1dlmmob-3"
})(["position:absolute;top:12px;right:20px;li{&:hover{opacity:0.7;}}"]);
var naviList = ['Record'];

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "logout",
    value: function logout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.remove('testUserName');
      this.props.logout();
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.replace('/');
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var bgClass = classname__WEBPACK_IMPORTED_MODULE_9___default()({
        'isDark': this.props.isDark,
        'light': this.props.light
      });
      var ls = {
        display: 'inline-block',
        cursor: 'pointer'
      };
      var loginBox;

      if (this.props.user) {
        loginBox = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LoginBoxUl, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: ls
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, this.props.user)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "vertical"
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: ls
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          onClick: function onClick() {
            return _this.logout();
          }
        }, "Log Out")));
      } else {
        loginBox = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LoginBoxUl, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: ls
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/register"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Register"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "vertical"
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: ls
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/login"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Login"))));
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CheckLogin__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Bar, {
        className: bgClass
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, {
        src: !this.props.light ? _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a : _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          display: 'inline-block',
          marginLeft: '30px'
        }
      }, naviList.map(function (ele, index) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Navi, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/".concat(ele.toLowerCase())
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, ele)));
      })), loginBox));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

var mapDispatchToProps = {
  logout: _store__WEBPACK_IMPORTED_MODULE_8__["logout"]
};

var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.user;
  return {
    user: user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/layout/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/layout/Footer.js");




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isDark: props.isDark,
    light: props.light
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/css/style.css */ "./common/css/style.css");
/* harmony import */ var _common_css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_css_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_code_Calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/code/Calendar */ "./components/code/Calendar.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Body = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Body",
  componentId: "sc-1ao6dy1-0"
})(["background:#ebeef0;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1ao6dy1-1"
})(["min-height:93vh;padding-top:50px;.title{padding-top:180px;width:1000px;margin:0 auto;}img{width:290px;margin:5px;}.ant-carousel{padding-top:180px;.slick-slider{height:300px;width:1200px;margin:0 auto;}.slick-slide{img{display:inline-block;}}h2{font-size:30px;color:#fff;}}"]);

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isDark: false
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function () {
      if (window.scrollY > 250) {
        _this.setState({
          isDark: true
        });
      } else {
        _this.setState({
          isDark: false
        });
      }
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var isDark = this.state.isDark;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        isDark: isDark,
        className: _common_css_style_css__WEBPACK_IMPORTED_MODULE_4__["sovleNextBug"]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.slim.js"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_code_Calendar__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, getRecords, getProblems, login, logout, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecords", function() { return getRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProblems", function() { return getProblems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);


var InitialState = {
  user: null,
  records: {
    prevMonthRecord: [],
    lastMonthRecord: [],
    currMonthRecord: []
  },
  problems: []
};
var actionTypes = {
  GETRECORDS: 'GETRECORDS',
  GETPROBLEMS: 'GETPROBLEMS',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.GETRECORDS:
      return Object.assign({}, state, {
        records: action.payload
      });

    case actionTypes.GETPROBLEMS:
      return Object.assign({}, state, {
        problems: action.payload
      });

    case actionTypes.LOGIN:
      return Object.assign({}, state, {
        user: action.payload
      });

    case actionTypes.LOGOUT:
      return Object.assign({}, state, {
        user: null
      });

    default:
      return state;
  }
}; // ACTIONS

var getRecords = function getRecords(data) {
  return {
    type: actionTypes.GETRECORDS,
    payload: data
  };
};
var getProblems = function getProblems(data) {
  return {
    type: actionTypes.GETPROBLEMS,
    payload: data
  };
};
var login = function login(data) {
  return {
    type: actionTypes.LOGIN,
    payload: data
  };
};
var logout = function logout(data) {
  return {
    type: actionTypes.LOGOUT
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])()));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style/css":
/*!********************************************!*\
  !*** external "antd/lib/button/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style/css");

/***/ }),

/***/ "antd/lib/calendar":
/*!************************************!*\
  !*** external "antd/lib/calendar" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/calendar");

/***/ }),

/***/ "antd/lib/calendar/style/css":
/*!**********************************************!*\
  !*** external "antd/lib/calendar/style/css" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/calendar/style/css");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/col/style/css":
/*!*****************************************!*\
  !*** external "antd/lib/col/style/css" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style/css");

/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/divider/style/css":
/*!*********************************************!*\
  !*** external "antd/lib/divider/style/css" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider/style/css");

/***/ }),

/***/ "antd/lib/drawer":
/*!**********************************!*\
  !*** external "antd/lib/drawer" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ "antd/lib/drawer/style/css":
/*!********************************************!*\
  !*** external "antd/lib/drawer/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer/style/css");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/form/style/css":
/*!******************************************!*\
  !*** external "antd/lib/form/style/css" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/style/css");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/message/style/css":
/*!*********************************************!*\
  !*** external "antd/lib/message/style/css" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message/style/css");

/***/ }),

/***/ "antd/lib/popover":
/*!***********************************!*\
  !*** external "antd/lib/popover" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "antd/lib/popover/style/css":
/*!*********************************************!*\
  !*** external "antd/lib/popover/style/css" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover/style/css");

/***/ }),

/***/ "antd/lib/radio":
/*!*********************************!*\
  !*** external "antd/lib/radio" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),

/***/ "antd/lib/radio/style/css":
/*!*******************************************!*\
  !*** external "antd/lib/radio/style/css" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio/style/css");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/row/style/css":
/*!*****************************************!*\
  !*** external "antd/lib/row/style/css" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style/css");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/select/style/css":
/*!********************************************!*\
  !*** external "antd/lib/select/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style/css");

/***/ }),

/***/ "antd/lib/spin":
/*!********************************!*\
  !*** external "antd/lib/spin" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "antd/lib/spin/style/css":
/*!******************************************!*\
  !*** external "antd/lib/spin/style/css" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin/style/css");

/***/ }),

/***/ "antd/lib/switch":
/*!**********************************!*\
  !*** external "antd/lib/switch" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch");

/***/ }),

/***/ "antd/lib/switch/style/css":
/*!********************************************!*\
  !*** external "antd/lib/switch/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch/style/css");

/***/ }),

/***/ "antd/lib/tooltip":
/*!***********************************!*\
  !*** external "antd/lib/tooltip" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "antd/lib/tooltip/style/css":
/*!*********************************************!*\
  !*** external "antd/lib/tooltip/style/css" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip/style/css");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classname":
/*!****************************!*\
  !*** external "classname" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classname");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "crypto-js/md5":
/*!********************************!*\
  !*** external "crypto-js/md5" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto-js/md5");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map