https://teachablemachine.withgoogle.com/models/Sh9nvfCxz/

prediction1 = "";
prediction2 = "";

Webcam.set({
    quality: '90',
    format: 'png',
    height: 300,
    width: 350
});

camera = document.getElementById("camera");

Webcam.attach("camera");

function snappy(){
    Webcam.snap(function(saved_pic){
        document.getElementById("result").innerHTML = '<img id="captured_pic" src="'+saved_pic+'">';
    })
}

function speak(){
    var synth = window.speechSynthesis;
    speak_1 = "The first prediction is " + prediction1;
    speak_2 = "The second prediction is " + prediction2;
    utterThis = new SpeechSynthesisUtterance(speak_1 + speak_2);
    synth.speak(utterThis)
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Sh9nvfCxz/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function predictemoji(){
    img = document.getElementById("captured_pic");
    classifier.classify(img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;

        prediction1 = result[0].label;
        prediction2 = result[1].label;
        speak();

        if(result[0].label == "Rockstar"){
            document.getElementById("update_emoji").innerHTML = "&#129304;"
        }

        if(result[0].label == "ok"){
            document.getElementById("update_emoji").innerHTML = "&#128076;"
        }

        if(result[0].label == "thumbsup"){
            document.getElementById("update_emoji").innerHTML = "&#128077;"
        }

        if(result[0].label == "peace"){
            document.getElementById("update_emoji").innerHTML = "&#9996;"
        }

        if(result[0].label == "handsup"){
            document.getElementById("update_emoji").innerHTML = "&#9995;"
        }




        if(result[1].label == "Rockstar"){
            document.getElementById("update_emoji2").innerHTML = "&#129304;"
        }

        if(result[1].label == "ok"){
            document.getElementById("update_emoji2").innerHTML = "&#128076;"
        }

        if(result[1].label == "thumbsup"){
            document.getElementById("update_emoji2").innerHTML = "&#128077;"
        }

        if(result[1].label == "peace"){
            document.getElementById("update_emoji2").innerHTML = "&#9996;"
        }

        if(result[1].label == "handsup"){
            document.getElementById("update_emoji2").innerHTML = "&#9995;"
        }
    }
}

