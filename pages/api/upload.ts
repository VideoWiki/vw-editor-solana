import { NextApiRequest, NextApiResponse } from "next"
import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js"
import { getOrCreateAssociatedTokenAccount, createTransferCheckedInstruction, getMint } from "@solana/spl-token"
import { toMetaplexFile, bundlrStorage, GuestIdentityDriver, keypairIdentity, Metaplex } from "@metaplex-foundation/js"
import base58 from 'bs58'
import { Blob } from 'blob';

import fileReaderStream from "filereader-stream";
import * as dotenv from "dotenv";
import * as fs from "fs";
dotenv.config();

type GetResponse = {
    message: string,
}

export type PostResponse = {
    message: string,
}

export type PostError = {
    error: string
}

// update these variables!
// Connection endpoint, switch to a mainnet RPC if using mainnet
const ENDPOINT = clusterApiUrl("devnet");

// Devnet Bundlr address
const BUNDLR_ADDRESS = "https://devnet.bundlr.network";

// Mainnet Bundlr address, uncomment if using mainnet
// const BUNDLR_ADDRESS = "https://node1.bundlr.network"

// NFT metadata
const NFT_NAME = "Test";
const NFT_DESCRIPTION = "Testing using solana pay";
const NFT_IMAGE_PATH = "nft-upload/testImg.jpg";
const NFT_IMG_NAME = "testImg.jpg";
const NFT_VIDEO_PATH =
    "https://api.video.wiki/media/temporary/2023/01/02/7f3fe67f-73ea-48ba-a331-a6430ad5352b.webm";
const NFT_VID_NAME = "testVid.webm";

interface File extends Blob {
    readonly lastModified: number;
    readonly name: string;
}

declare var File: {
    prototype: File;
    new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
};

var dataStream;
// fetch(
//     "https://api.video.wiki/media/temporary/2023/01/02/7f3fe67f-73ea-48ba-a331-a6430ad5352b.webm"
// ).then(async (response) => {
    
//     const contentType = response.headers.get("content-type");
//     const blob = await response.blob();
//     const file = new Blob([blob], { type: contentType });
//     // const file = new File([blob], "PREVIEW.webm", { type: contentType });
//     // setFileSize(file.size);
//     dataStream = fileReaderStream(file);
// });


async function main() {
    // Get the shop keypair from the environment variable
    const shopPrivateKey =
        "3rTqFycRK7URNXihwZheXG5i4byaY94fUXE9FdRCZsvjRzR7sGUGhGJsGQc3oV7nkJoHyTcA963qayq2dcvxtdsa"; /* process.env.SHOP_PRIVATE_KEY */
    if (!shopPrivateKey) throw new Error("SHOP_PRIVATE_KEY not found");
    const shopKeypair = Keypair.fromSecretKey(base58.decode(shopPrivateKey));

    const connection = new Connection(ENDPOINT);

    const nfts = Metaplex.make(connection, { cluster: "devnet" })
        .use(keypairIdentity(shopKeypair))
        .use(
            bundlrStorage({
                address: BUNDLR_ADDRESS,
                providerUrl: ENDPOINT,
                timeout: 60000,
            })
        )
        .nfts();

    const imageBuffer = fs.readFileSync(NFT_IMAGE_PATH);
    const fileImg = toMetaplexFile(imageBuffer, NFT_IMG_NAME);

    // const videoBuffer = fs.readFileSync(NFT_VIDEO_PATH);
    // const fileVid = toMetaplexFile(videoBuffer, NFT_VID_NAME);

    const uploadedMetadata = await nfts.uploadMetadata({
        name: NFT_NAME,
        // symbol: NFT_SYMBOL,
        description: NFT_DESCRIPTION,
        image: fileImg,
        video: dataStream,
    });

    console.log(`Uploaded metadata: ${uploadedMetadata.uri}`);
    return uploadedMetadata.uri
}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<GetResponse | PostResponse | PostError>
) {
    if (req.method === "GET") {
        return res.status(200).json({ message: "My Store" })
    } else if (req.method === "POST") {
        // const result = await main()
        console.log(req.body)
        return res.status(200).json({ message: "Succesfull" })
    } else {
        return res.status(405).json({ error: "Method not allowed" })
    }
}
