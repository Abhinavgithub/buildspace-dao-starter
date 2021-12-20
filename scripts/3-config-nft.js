import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x0045F12560594b748Db895260e5FbbE80912a43a",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Man Utd Logo",
        description: "This NFT will give you access to ManUdIndiaDAO!",
        image: readFileSync("scripts/assets/manutd.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()