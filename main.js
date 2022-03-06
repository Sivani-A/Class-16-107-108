function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true, video:false});
    Classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bJyQT1wFt/models/q_8DFzMge/model.json', modelReady);
    console.log(Classifier)
    }
  var dog= 0
  var cat= 0
  var bird= 0
  var lion= 0
    function modelReady(){
        console.log("Hi")
        Classifier.classify(gotResults);
    }
    
    function gotResults (error,result){
    console.log("Hi")
        if (error){
        console.log(error);
    } 
       else{
        console.log(result);
        r= (Math.floor(Math.random()*255)+1);
        g= (Math.floor(Math.random()*255)+1);
        b= (Math.floor(Math.random()*255)+1);
    
        document.getElementById("hear").innerHTML=result[0].label
        document.getElementById("accuracy").innerHTML= (result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("hear").style,color="rgb("+r+","+g+","+b+")";
        document.getElementById("accuracy").style,color="rgb("+r+","+g+","+b+")";
    
        img= document.getElementById("ear_img");
    
    
    if (result[0].label=="Barking"){
      img.src='Dog.png'
    }
    
    else if(result[0].label=="Meowing"){
        img.src='car,png.jpg'

    }
    
    else if(result[0].label=="Chirping"){
        img.src='bird,png.png'
     
    }
    
    else if(result[0].label=="Roaring"){
       img.src=' Lion PNG.jpg'
    }
    
    else {
     img.src= 'Ear png.jpg'
    }
}}