const output = document.getElementById("output");

function startSpeech() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition not supported in this browser");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";

  let lastTranscript = "";

  recognition.onresult = function (event) {
   const result = event.results[event.results.length - 1];
   const text = result[0].transcript;

  // Only add when sentence is complete
  if (result.isFinal && text !== lastTranscript) {
    output.innerHTML += text + "<br>";
    lastTranscript = text;
  }
  output.scrollTop = output.scrollHeight;

};

  recognition.start();
}

// ----------------------
// GESTURE RECOGNITION JS
// ----------------------

const videoElement = document.getElementById("video");
const gestureOutput = document.getElementById("gestureOutput");

// Load MediaPipe Hands
const hands = new Hands({
  locateFile: (file) =>
    `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7,
});

// When results come
hands.onResults((results) => {
  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    gestureOutput.innerText = "Hand Raised: Student has a question";
    gestureOutput.className = "detected";
  } else {
    gestureOutput.innerText = "No gesture detected";
    gestureOutput.className = "not-detected";
  }
});


// Start camera
const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({ image: videoElement });
  },
  width: 640,
  height: 480,
});

camera.start();
