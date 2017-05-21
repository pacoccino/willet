let cameras = null;
let camera = null;
let noCamera = null;

function initialize() {
  return Instascan.Camera.getCameras().then((foundCameras) => {
    if (foundCameras.length > 0) {
      cameras = foundCameras;
      camera = foundCameras[0];
      return camera;
    } else {
      console.error('No cameras found.');
      noCamera = true;
      return null;
    }
  }).catch((e) => {
    console.error(e);
    noCamera = true;
    return null;
  });
}

export function getCamera() {
  if(noCamera) return Promise.resolve(null);
  if(camera) {
    return Promise.resolve(camera);
  }
  return initialize();
}

export function nextCamera() {
  return getCamera().then(currentCamera => {
    const currentIndex = cameras.findIndex(c => c === currentCamera);
    const newIndex = (currentIndex + 1) % cameras.length;
    camera = cameras[newIndex];
    return camera;
  });
}

export function getNumberOfCameras() {
  return cameras.length;
}
