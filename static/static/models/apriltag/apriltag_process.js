import * as Comlink from "./comlink.mjs";

var detections = [];

async function init() {
  // WebWorkers use `postMessage` and therefore work with Comlink.
  let apriltag_url = new URL('./static/models/apriltag/apriltag.js', location.href).href

  const Apriltag = Comlink.wrap(new Worker(apriltag_url));

  return new Promise(async (resolve) => {
    // must call this to init apriltag detector; argument is a callback for when the detector is ready
    window.apriltag = await new Apriltag(Comlink.proxy(() => {

      // set camera info; we must define these according to the device and image resolution for pose computation
      //window.apriltag.set_camera_info(double fx, double fy, double cx, double cy)
      window.apriltag.set_camera_info(320.71937537753894, 327.43302776981824, 240, 180)
      // window.apriltag.set_tag_size(5, .05);
      resolve()
      // start processing frames
      // window.requestAnimationFrame(process_frame);
    }));
  })

}

async function process_frame(imageData) {

  let imageDataPixels = imageData.data;
  let grayscalePixels = new Uint8Array(imageData.width * imageData.height); // this is the grayscale image we will pass to the detector

  for (var i = 0, j = 0; i < imageDataPixels.length; i += 4, j++) {
    let grayscale = Math.round((imageDataPixels[i] + imageDataPixels[i + 1] + imageDataPixels[i + 2]) / 3);
    grayscalePixels[j] = grayscale; // single grayscale value
    imageDataPixels[i] = grayscale;
    imageDataPixels[i + 1] = grayscale;
    imageDataPixels[i + 2] = grayscale;
  }
  // ctx.putImageData(imageData, 0, 0);

  // detect aprilTag in the grayscale image given by grayscalePixels
  detections = await apriltag.detect(grayscalePixels, imageData.width, imageData.height);

  return detections;
  // window.requestAnimationFrame(process_frame);
}

export {
  init, process_frame
}