"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout";
exports.ids = ["pages/api/checkout"];
exports.modules = {

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ "bs58":
/*!***********************!*\
  !*** external "bs58" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("bs58");

/***/ }),

/***/ "@metaplex-foundation/js":
/*!******************************************!*\
  !*** external "@metaplex-foundation/js" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@metaplex-foundation/js");;

/***/ }),

/***/ "@solana/spl-token":
/*!************************************!*\
  !*** external "@solana/spl-token" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("@solana/spl-token");;

/***/ }),

/***/ "(api)/./pages/api/checkout.ts":
/*!*******************************!*\
  !*** ./pages/api/checkout.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/spl-token */ \"@solana/spl-token\");\n/* harmony import */ var _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metaplex-foundation/js */ \"@metaplex-foundation/js\");\n/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bs58 */ \"bs58\");\n/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__, _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_2__]);\n([_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__, _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// Update these variables!\n// This is returned by nft-upload/upload.js\nlet METADATA_URI = \"https://arweave.net/OZNYTG1Kh3b2p0RPpYCkchLiiAX_1po5PSvOCPSsu3s\";\nconst myAddress = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(\"GPaVkHjVRgDxzyqrK95RqcmEKRrfzwUnXGUwiDKq22vS\");\n// Devnet 'fake' USDC, you can get these tokens from https://spl-token-faucet.com/\nconst USDC_ADDRESS = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(\"Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr\");\n// Mainnet USDC, uncomment if using mainnet\n// const USDC_ADDRESS = new PublicKey(\"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v\")\n// Connection endpoint, switch to a mainnet RPC if using mainnet\nconst ENDPOINT = (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.clusterApiUrl)('devnet');\n// This is the name your created NFT will have. Other metadata comes from METADATA_URI\nconst NFT_NAME = \"Video NFT\";\n// The amount to charge in USDC\nconst PRICE_USDC = 0.1;\nfunction get(res) {\n    res.status(200).json({\n        label: \"Video Wiki\",\n        icon: \"https://solana.com/src/img/branding/solanaLogoMark.svg\"\n    });\n}\nasync function postImpl(account) {\n    const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Connection(ENDPOINT);\n    // Get the shop keypair from the environment variable\n    const shopPrivateKey = \"3rTqFycRK7URNXihwZheXG5i4byaY94fUXE9FdRCZsvjRzR7sGUGhGJsGQc3oV7nkJoHyTcA963qayq2dcvxtdsa\" /*process.env.SHOP_PRIVATE_KEY*/ ;\n    if (!shopPrivateKey) throw new Error('SHOP_PRIVATE_KEY not found');\n    const shopKeypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Keypair.fromSecretKey(bs58__WEBPACK_IMPORTED_MODULE_3___default().decode(shopPrivateKey));\n    // Initialise Metaplex with our shop keypair\n    const metaplex = _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_2__.Metaplex.make(connection).use((0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_2__.keypairIdentity)(shopKeypair));\n    const nfts = metaplex.nfts();\n    // The mint needs to sign the transaction, so we generate a new keypair for it\n    const mintKeypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Keypair.generate();\n    // Create a transaction builder to create the NFT\n    const transactionBuilder = await nfts.builders().create({\n        uri: METADATA_URI,\n        name: NFT_NAME,\n        tokenOwner: account,\n        updateAuthority: shopKeypair,\n        sellerFeeBasisPoints: 100,\n        useNewMint: mintKeypair\n    });\n    // Next we create an instruction to transfer USDC from the buyer to the shop\n    // This will be added to the create NFT transaction\n    // Get the buyer's USDC address\n    const fromUsdcAddress = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.getOrCreateAssociatedTokenAccount)(connection, shopKeypair, USDC_ADDRESS, account);\n    // Get the shop's USDC address\n    const toUsdcAddress = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.getOrCreateAssociatedTokenAccount)(connection, shopKeypair, USDC_ADDRESS, myAddress);\n    const usdcMint = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.getMint)(connection, USDC_ADDRESS);\n    const decimals = usdcMint.decimals;\n    const usdcTransferInstruction = (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.createTransferCheckedInstruction)(fromUsdcAddress.address, USDC_ADDRESS, toUsdcAddress.address, account, PRICE_USDC * 10 ** decimals, decimals);\n    // Create a guest identity for buyer, so they will be a required signer for the transaction\n    const identitySigner = new _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_2__.GuestIdentityDriver(account);\n    // Add the USDC payment to the NFT transaction\n    transactionBuilder.prepend({\n        instruction: usdcTransferInstruction,\n        signers: [\n            identitySigner\n        ]\n    });\n    // transactionBuilder.setFeePayer(payerKeypair)\n    // Convert to transaction\n    const latestBlockhash = await connection.getLatestBlockhash();\n    const transaction = transactionBuilder.toTransaction(latestBlockhash);\n    // Partially sign the transaction, as the shop and the mint\n    // The account is also a required signer, but they'll sign it with their wallet after we return it\n    transaction.sign(shopKeypair, mintKeypair);\n    // Serialize the transaction and convert to base64 to return it\n    const serializedTransaction = transaction.serialize({\n        requireAllSignatures: false // account is a missing signature\n    });\n    const base64 = serializedTransaction.toString('base64');\n    const message = \"Mint your NFT Video!\";\n    // Return the serialized transaction\n    return {\n        transaction: base64,\n        message\n    };\n}\nasync function post(req, res) {\n    // const { query } = req;\n    // const { address, METADATA_URI } = query;\n    // res.end(`The address is ${address} and the METADATA_URI is ${METADATA_URI}`);\n    const { account  } = req.body;\n    console.log(req.body);\n    if (!account) {\n        res.status(400).json({\n            error: \"No account provided\"\n        });\n        return;\n    }\n    try {\n        const mintOutputData = await postImpl(new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(account));\n        res.status(200).json(mintOutputData);\n        return;\n    } catch (error) {\n        account;\n        console.error(error);\n        res.status(500).json({\n            error: 'error creating transaction'\n        });\n        return;\n    }\n}\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        console.log(req.body);\n        console.log(\"GET\");\n        return get(res);\n    } else if (req.method === \"POST\") {\n        console.log(req.body);\n        console.log(\"POST\");\n        return await post(req, res);\n    } else {\n        return res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLEVBQUVsRCxHQUFHO0lBQzVCLENBQUMsTUFBTSxDQUFDO1FBQ04sTUFBTSxDQUFDQSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNvRCxLQUFLLEVBQUUsQ0FBb0I7UUFBQyxDQUFDO0lBQzdELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRhaWx3aW5kY3NzLXR5cGVzY3JpcHQtc3RhcnRlci8uL3BhZ2VzL2FwaS9jaGVja291dC50cz8zMTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyBjbHVzdGVyQXBpVXJsLCBDb25uZWN0aW9uLCBLZXlwYWlyLCBQdWJsaWNLZXkgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCJcbmltcG9ydCB7IGdldE9yQ3JlYXRlQXNzb2NpYXRlZFRva2VuQWNjb3VudCwgY3JlYXRlVHJhbnNmZXJDaGVja2VkSW5zdHJ1Y3Rpb24sIGdldE1pbnQgfSBmcm9tIFwiQHNvbGFuYS9zcGwtdG9rZW5cIlxuaW1wb3J0IHsgR3Vlc3RJZGVudGl0eURyaXZlciwga2V5cGFpcklkZW50aXR5LCBNZXRhcGxleCB9IGZyb20gXCJAbWV0YXBsZXgtZm91bmRhdGlvbi9qc1wiXG5pbXBvcnQgYmFzZTU4IGZyb20gJ2JzNTgnXG5cbi8vIFVwZGF0ZSB0aGVzZSB2YXJpYWJsZXMhXG4vLyBUaGlzIGlzIHJldHVybmVkIGJ5IG5mdC11cGxvYWQvdXBsb2FkLmpzXG5sZXQgTUVUQURBVEFfVVJJID0gXCJodHRwczovL2Fyd2VhdmUubmV0L09aTllURzFLaDNiMnAwUlBwWUNrY2hMaWlBWF8xcG81UFN2T0NQU3N1M3NcIjtcblxuY29uc3QgbXlBZGRyZXNzID0gbmV3IFB1YmxpY0tleShcIkdQYVZrSGpWUmdEeHp5cXJLOTVScWNtRUtScmZ6d1VuWEdVd2lES3EyMnZTXCIpXG5cbi8vIERldm5ldCAnZmFrZScgVVNEQywgeW91IGNhbiBnZXQgdGhlc2UgdG9rZW5zIGZyb20gaHR0cHM6Ly9zcGwtdG9rZW4tZmF1Y2V0LmNvbS9cbmNvbnN0IFVTRENfQUREUkVTUyA9IG5ldyBQdWJsaWNLZXkoXCJHaDlad0VtZExKOERzY0tOVGtUcVBiTndMTk5CanVTemFHOVZwMktHdEtKclwiKVxuXG4vLyBNYWlubmV0IFVTREMsIHVuY29tbWVudCBpZiB1c2luZyBtYWlubmV0XG4vLyBjb25zdCBVU0RDX0FERFJFU1MgPSBuZXcgUHVibGljS2V5KFwiRVBqRldkZDVBdWZxU1NxZU0ycU4xeHp5YmFwQzhHNHdFR0drWnd5VER0MXZcIilcblxuLy8gQ29ubmVjdGlvbiBlbmRwb2ludCwgc3dpdGNoIHRvIGEgbWFpbm5ldCBSUEMgaWYgdXNpbmcgbWFpbm5ldFxuY29uc3QgRU5EUE9JTlQgPSBjbHVzdGVyQXBpVXJsKCdkZXZuZXQnKVxuXG4vLyBUaGlzIGlzIHRoZSBuYW1lIHlvdXIgY3JlYXRlZCBORlQgd2lsbCBoYXZlLiBPdGhlciBtZXRhZGF0YSBjb21lcyBmcm9tIE1FVEFEQVRBX1VSSVxuY29uc3QgTkZUX05BTUUgPSBcIlZpZGVvIE5GVFwiXG5cbi8vIFRoZSBhbW91bnQgdG8gY2hhcmdlIGluIFVTRENcbmNvbnN0IFBSSUNFX1VTREMgPSAwLjFcblxudHlwZSBJbnB1dERhdGEgPSB7XG4gIGFjY291bnQ6IHN0cmluZyxcbn1cblxudHlwZSBHZXRSZXNwb25zZSA9IHtcbiAgbGFiZWw6IHN0cmluZyxcbiAgaWNvbjogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBQb3N0UmVzcG9uc2UgPSB7XG4gIHRyYW5zYWN0aW9uOiBzdHJpbmcsXG4gIG1lc3NhZ2U6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgUG9zdEVycm9yID0ge1xuICBlcnJvcjogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIGdldChyZXM6IE5leHRBcGlSZXNwb25zZTxHZXRSZXNwb25zZT4pIHtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIGxhYmVsOiBcIlZpZGVvIFdpa2lcIixcbiAgICBpY29uOiBcImh0dHBzOi8vc29sYW5hLmNvbS9zcmMvaW1nL2JyYW5kaW5nL3NvbGFuYUxvZ29NYXJrLnN2Z1wiLFxuICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0SW1wbChhY2NvdW50OiBQdWJsaWNLZXkpOiBQcm9taXNlPFBvc3RSZXNwb25zZT4ge1xuICBjb25zdCBjb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24oRU5EUE9JTlQpXG5cbiAgLy8gR2V0IHRoZSBzaG9wIGtleXBhaXIgZnJvbSB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVcbiAgY29uc3Qgc2hvcFByaXZhdGVLZXkgPSBcIjNyVHFGeWNSSzdVUk5YaWh3WmhlWEc1aTRieWFZOTRmVVhFOUZkUkNac3ZqUnpSN3NHVUdoR0pzR1FjM29WN25rSm9IeVRjQTk2M3FheXEyZGN2eHRkc2FcIi8qcHJvY2Vzcy5lbnYuU0hPUF9QUklWQVRFX0tFWSovXG4gIGlmICghc2hvcFByaXZhdGVLZXkpIHRocm93IG5ldyBFcnJvcignU0hPUF9QUklWQVRFX0tFWSBub3QgZm91bmQnKVxuICBjb25zdCBzaG9wS2V5cGFpciA9IEtleXBhaXIuZnJvbVNlY3JldEtleShiYXNlNTguZGVjb2RlKHNob3BQcml2YXRlS2V5KSlcblxuICAvLyBJbml0aWFsaXNlIE1ldGFwbGV4IHdpdGggb3VyIHNob3Aga2V5cGFpclxuICBjb25zdCBtZXRhcGxleCA9IE1ldGFwbGV4XG4gICAgLm1ha2UoY29ubmVjdGlvbilcbiAgICAudXNlKGtleXBhaXJJZGVudGl0eShzaG9wS2V5cGFpcikpXG5cbiAgY29uc3QgbmZ0cyA9IG1ldGFwbGV4Lm5mdHMoKVxuXG4gIC8vIFRoZSBtaW50IG5lZWRzIHRvIHNpZ24gdGhlIHRyYW5zYWN0aW9uLCBzbyB3ZSBnZW5lcmF0ZSBhIG5ldyBrZXlwYWlyIGZvciBpdFxuICBjb25zdCBtaW50S2V5cGFpciA9IEtleXBhaXIuZ2VuZXJhdGUoKVxuXG4gIC8vIENyZWF0ZSBhIHRyYW5zYWN0aW9uIGJ1aWxkZXIgdG8gY3JlYXRlIHRoZSBORlRcbiAgY29uc3QgdHJhbnNhY3Rpb25CdWlsZGVyID0gYXdhaXQgbmZ0cy5idWlsZGVycygpLmNyZWF0ZSh7XG4gICAgdXJpOiBNRVRBREFUQV9VUkksIC8vIHVzZSBvdXIgbWV0YWRhdGFcbiAgICBuYW1lOiBORlRfTkFNRSwgLy8gbmFtZSBvZiB0aGUgTkZUXG4gICAgdG9rZW5Pd25lcjogYWNjb3VudCwgLy8gTkZUIGlzIG1pbnRlZCB0byB0aGUgd2FsbGV0IHN1Ym1pdHRpbmcgdGhlIHRyYW5zYWN0aW9uIChidXllcilcbiAgICB1cGRhdGVBdXRob3JpdHk6IHNob3BLZXlwYWlyLCAvLyB3ZSByZXRhaW4gdXBkYXRlIGF1dGhvcml0eVxuICAgIHNlbGxlckZlZUJhc2lzUG9pbnRzOiAxMDAsIC8vIDElIHJveWFsdHlcbiAgICB1c2VOZXdNaW50OiBtaW50S2V5cGFpciwgLy8gd2UgcGFzcyBvdXIgbWludCBpbiBhcyB0aGUgbmV3IG1pbnQgdG8gdXNlXG4gIH0pXG5cbiAgLy8gTmV4dCB3ZSBjcmVhdGUgYW4gaW5zdHJ1Y3Rpb24gdG8gdHJhbnNmZXIgVVNEQyBmcm9tIHRoZSBidXllciB0byB0aGUgc2hvcFxuICAvLyBUaGlzIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGNyZWF0ZSBORlQgdHJhbnNhY3Rpb25cblxuICAvLyBHZXQgdGhlIGJ1eWVyJ3MgVVNEQyBhZGRyZXNzXG4gIGNvbnN0IGZyb21Vc2RjQWRkcmVzcyA9IGF3YWl0IGdldE9yQ3JlYXRlQXNzb2NpYXRlZFRva2VuQWNjb3VudChcbiAgICBjb25uZWN0aW9uLFxuICAgIHNob3BLZXlwYWlyLFxuICAgIFVTRENfQUREUkVTUyxcbiAgICBhY2NvdW50LFxuICApXG5cbiAgLy8gR2V0IHRoZSBzaG9wJ3MgVVNEQyBhZGRyZXNzXG4gIGNvbnN0IHRvVXNkY0FkZHJlc3MgPSBhd2FpdCBnZXRPckNyZWF0ZUFzc29jaWF0ZWRUb2tlbkFjY291bnQoXG4gICAgY29ubmVjdGlvbixcbiAgICBzaG9wS2V5cGFpcixcbiAgICBVU0RDX0FERFJFU1MsXG4gICAgbXlBZGRyZXNzLFxuICApXG5cbiAgY29uc3QgdXNkY01pbnQgPSBhd2FpdCBnZXRNaW50KGNvbm5lY3Rpb24sIFVTRENfQUREUkVTUylcbiAgY29uc3QgZGVjaW1hbHMgPSB1c2RjTWludC5kZWNpbWFsc1xuXG4gIGNvbnN0IHVzZGNUcmFuc2Zlckluc3RydWN0aW9uID0gY3JlYXRlVHJhbnNmZXJDaGVja2VkSW5zdHJ1Y3Rpb24oXG4gICAgZnJvbVVzZGNBZGRyZXNzLmFkZHJlc3MsIC8vIGZyb20gVVNEQyBhZGRyZXNzXG4gICAgVVNEQ19BRERSRVNTLCAvLyBVU0RDIG1pbnQgYWRkcmVzc1xuICAgIHRvVXNkY0FkZHJlc3MuYWRkcmVzcywgLy8gdG8gVVNEQyBhZGRyZXNzXG4gICAgYWNjb3VudCwgLy8gb3duZXIgb2YgdGhlIGZyb20gVVNEQyBhZGRyZXNzICh0aGUgYnV5ZXIpXG4gICAgUFJJQ0VfVVNEQyAqICgxMCAqKiBkZWNpbWFscyksIC8vIG11bHRpcGx5IGJ5IDEwXmRlY2ltYWxzXG4gICAgZGVjaW1hbHNcbiAgKVxuXG4gIC8vIENyZWF0ZSBhIGd1ZXN0IGlkZW50aXR5IGZvciBidXllciwgc28gdGhleSB3aWxsIGJlIGEgcmVxdWlyZWQgc2lnbmVyIGZvciB0aGUgdHJhbnNhY3Rpb25cbiAgY29uc3QgaWRlbnRpdHlTaWduZXIgPSBuZXcgR3Vlc3RJZGVudGl0eURyaXZlcihhY2NvdW50KVxuXG4gIC8vIEFkZCB0aGUgVVNEQyBwYXltZW50IHRvIHRoZSBORlQgdHJhbnNhY3Rpb25cbiAgdHJhbnNhY3Rpb25CdWlsZGVyLnByZXBlbmQoe1xuICAgIGluc3RydWN0aW9uOiB1c2RjVHJhbnNmZXJJbnN0cnVjdGlvbixcbiAgICBzaWduZXJzOiBbaWRlbnRpdHlTaWduZXJdXG4gIH0pXG5cbiAgLy8gdHJhbnNhY3Rpb25CdWlsZGVyLnNldEZlZVBheWVyKHBheWVyS2V5cGFpcilcblxuICAvLyBDb252ZXJ0IHRvIHRyYW5zYWN0aW9uXG4gIGNvbnN0IGxhdGVzdEJsb2NraGFzaCA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0TGF0ZXN0QmxvY2toYXNoKClcbiAgY29uc3QgdHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbkJ1aWxkZXIudG9UcmFuc2FjdGlvbihsYXRlc3RCbG9ja2hhc2gpXG5cbiAgLy8gUGFydGlhbGx5IHNpZ24gdGhlIHRyYW5zYWN0aW9uLCBhcyB0aGUgc2hvcCBhbmQgdGhlIG1pbnRcbiAgLy8gVGhlIGFjY291bnQgaXMgYWxzbyBhIHJlcXVpcmVkIHNpZ25lciwgYnV0IHRoZXknbGwgc2lnbiBpdCB3aXRoIHRoZWlyIHdhbGxldCBhZnRlciB3ZSByZXR1cm4gaXRcbiAgdHJhbnNhY3Rpb24uc2lnbihzaG9wS2V5cGFpciwgbWludEtleXBhaXIpXG5cbiAgLy8gU2VyaWFsaXplIHRoZSB0cmFuc2FjdGlvbiBhbmQgY29udmVydCB0byBiYXNlNjQgdG8gcmV0dXJuIGl0XG4gIGNvbnN0IHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uLnNlcmlhbGl6ZSh7XG4gICAgcmVxdWlyZUFsbFNpZ25hdHVyZXM6IGZhbHNlIC8vIGFjY291bnQgaXMgYSBtaXNzaW5nIHNpZ25hdHVyZVxuICB9KVxuICBjb25zdCBiYXNlNjQgPSBzZXJpYWxpemVkVHJhbnNhY3Rpb24udG9TdHJpbmcoJ2Jhc2U2NCcpXG5cbiAgY29uc3QgbWVzc2FnZSA9IFwiTWludCB5b3VyIE5GVCBWaWRlbyFcIlxuXG4gIC8vIFJldHVybiB0aGUgc2VyaWFsaXplZCB0cmFuc2FjdGlvblxuICByZXR1cm4ge1xuICAgIHRyYW5zYWN0aW9uOiBiYXNlNjQsXG4gICAgbWVzc2FnZSxcbiAgfVxuICBcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UG9zdFJlc3BvbnNlIHwgUG9zdEVycm9yPlxuKSB7XG4gIC8vIGNvbnN0IHsgcXVlcnkgfSA9IHJlcTtcbiAgLy8gY29uc3QgeyBhZGRyZXNzLCBNRVRBREFUQV9VUkkgfSA9IHF1ZXJ5O1xuXG4gIC8vIHJlcy5lbmQoYFRoZSBhZGRyZXNzIGlzICR7YWRkcmVzc30gYW5kIHRoZSBNRVRBREFUQV9VUkkgaXMgJHtNRVRBREFUQV9VUkl9YCk7XG4gIGNvbnN0IHsgYWNjb3VudCB9ID0gcmVxLmJvZHkgYXMgSW5wdXREYXRhXG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICBpZiAoIWFjY291bnQpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIk5vIGFjY291bnQgcHJvdmlkZWRcIiB9KVxuICAgIHJldHVyblxuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgbWludE91dHB1dERhdGEgPSBhd2FpdCBwb3N0SW1wbChuZXcgUHVibGljS2V5KGFjY291bnQpKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihtaW50T3V0cHV0RGF0YSlcbiAgICByZXR1cm5cbiAgfSBjYXRjaCAoZXJyb3IpIHthY2NvdW50XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ2Vycm9yIGNyZWF0aW5nIHRyYW5zYWN0aW9uJyB9KVxuICAgIHJldHVyblxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxHZXRSZXNwb25zZSB8IFBvc3RSZXNwb25zZSB8IFBvc3RFcnJvcj5cbikge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcbiAgICBjb25zb2xlLmxvZyhcIkdFVFwiKTtcbiAgICByZXR1cm4gZ2V0KHJlcylcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcbiAgICBjb25zb2xlLmxvZyhcIlBPU1RcIik7XG4gICAgcmV0dXJuIGF3YWl0IHBvc3QocmVxLCByZXMpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNsdXN0ZXJBcGlVcmwiLCJDb25uZWN0aW9uIiwiS2V5cGFpciIsIlB1YmxpY0tleSIsImdldE9yQ3JlYXRlQXNzb2NpYXRlZFRva2VuQWNjb3VudCIsImNyZWF0ZVRyYW5zZmVyQ2hlY2tlZEluc3RydWN0aW9uIiwiZ2V0TWludCIsIkd1ZXN0SWRlbnRpdHlEcml2ZXIiLCJrZXlwYWlySWRlbnRpdHkiLCJNZXRhcGxleCIsImJhc2U1OCIsIk1FVEFEQVRBX1VSSSIsIm15QWRkcmVzcyIsIlVTRENfQUREUkVTUyIsIkVORFBPSU5UIiwiTkZUX05BTUUiLCJQUklDRV9VU0RDIiwiZ2V0IiwicmVzIiwic3RhdHVzIiwianNvbiIsImxhYmVsIiwiaWNvbiIsInBvc3RJbXBsIiwiYWNjb3VudCIsImNvbm5lY3Rpb24iLCJzaG9wUHJpdmF0ZUtleSIsIkVycm9yIiwic2hvcEtleXBhaXIiLCJmcm9tU2VjcmV0S2V5IiwiZGVjb2RlIiwibWV0YXBsZXgiLCJtYWtlIiwidXNlIiwibmZ0cyIsIm1pbnRLZXlwYWlyIiwiZ2VuZXJhdGUiLCJ0cmFuc2FjdGlvbkJ1aWxkZXIiLCJidWlsZGVycyIsImNyZWF0ZSIsInVyaSIsIm5hbWUiLCJ0b2tlbk93bmVyIiwidXBkYXRlQXV0aG9yaXR5Iiwic2VsbGVyRmVlQmFzaXNQb2ludHMiLCJ1c2VOZXdNaW50IiwiZnJvbVVzZGNBZGRyZXNzIiwidG9Vc2RjQWRkcmVzcyIsInVzZGNNaW50IiwiZGVjaW1hbHMiLCJ1c2RjVHJhbnNmZXJJbnN0cnVjdGlvbiIsImFkZHJlc3MiLCJpZGVudGl0eVNpZ25lciIsInByZXBlbmQiLCJpbnN0cnVjdGlvbiIsInNpZ25lcnMiLCJsYXRlc3RCbG9ja2hhc2giLCJnZXRMYXRlc3RCbG9ja2hhc2giLCJ0cmFuc2FjdGlvbiIsInRvVHJhbnNhY3Rpb24iLCJzaWduIiwic2VyaWFsaXplZFRyYW5zYWN0aW9uIiwic2VyaWFsaXplIiwicmVxdWlyZUFsbFNpZ25hdHVyZXMiLCJiYXNlNjQiLCJ0b1N0cmluZyIsIm1lc3NhZ2UiLCJwb3N0IiwicmVxIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1pbnRPdXRwdXREYXRhIiwiaGFuZGxlciIsIm1ldGhvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout.ts"));
module.exports = __webpack_exports__;

})();