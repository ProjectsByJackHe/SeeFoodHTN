const runeURL = "https://see-food-htn.vercel.app/thicc.rune";
var runtime;
let input;
let output;
//create capability and output classes
class ImageCapability {
    parameters = {};
    generate(dest,id) {
        dest.set(input, 0);
    }
    setParameter(key, value) {
        this.parameters[key] = value;
    }
}

class SerialOutput {
    consume(data) {
        const utf8 = new TextDecoder();
        output=JSON.parse(utf8.decode(data));
    }
}
const imageCap = new ImageCapability(); 
const imports = {
        createCapability: () => imageCap,
        createOutput: () => new SerialOutput(),
        createModel: (mime, model_data) => rune.TensorFlowModel.loadTensorFlowLite(model_data),
        log: (log) => { console.log(log) },
};

async function loadRune() {
    document.getElementById("loader").style.visibility = "visible";
    const response = await fetch(runeURL);
    const bytes = new Uint8Array(await response.arrayBuffer());
    runtime = await rune.Runtime.load(bytes.buffer,imports);
    document.getElementById("log").innerHTML=JSON.stringify(imageCap.parameters);
    document.getElementById("rune").style.visibility = "visible";
    document.getElementById("loader").style.visibility = "hidden";
    startCamera();
}

async function runRune() {

//get input and resize
let video = document.getElementById("video");
input = rune.TensorFlowModel.resizeImage(video,224);
runtime.call();


//get output and convert to image

const result = JSON.stringify(output[0].elements);
console.log(result);
document.getElementById('result').innerHTML=result;
document.getElementById("loader").style.visibility = "hidden";
}

//image and video functions
document.getElementById("rune").style.visibility = "hidden";

let video = document.getElementById("video");
let click_button = document.getElementById("click-photo");
let canvas = document.getElementById("capture");

async function startCamera() {
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.setAttribute("playsinline", true);
    video.srcObject = stream;
}

window.onload = function() {
    loadRune();
};
document.getElementById("loader").style.visibility = "hidden";