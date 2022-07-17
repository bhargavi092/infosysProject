function feedback(){
	document.getElementById("feedback").style.display="none"
	document.getElementById("feedback1").style.display="block"
	document.querySelector(".transparent5").style.display="block"
}
function feedback1(){
	document.getElementById("feedback").style.display="block"
	document.getElementById("feedback1").style.display="none"
	document.querySelector(".transparent5").style.display="none"

}
var wrong=document.getElementById('x');
let filename=document.querySelector('.filename');
let imagediv=document.querySelector('.img')
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
const dropZoneElement = inputElement.closest(".drop-zone");
const dropZoneButton = document.querySelector("#drop");
const msg=document.querySelector('addDiv');
dropZoneButton.addEventListener("click", (e) => {
    inputElement.click();
});

inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
    updateThumbnail(dropZoneElement, inputElement.files[0]);

    }
});

dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
});

["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
    dropZoneElement.classList.remove("drop-zone--over");
    });
});

dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
    inputElement.files = e.dataTransfer.files;
    updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
});
});

function updateThumbnail(dropZoneElement, file) {
let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

// First time - there is no thumbnail element, so lets create it
if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    filename.appendChild(thumbnailElement);
    wrong.style.display='block';
    document.getElementById('addDiv').style.display='block';
    document.getElementById('progressbar').style.display='block';
    document.getElementById('img5').style.display='block';
    setInterval((e)=>{
        document.getElementById('progressbar').value='50';
    },1000)
    setInterval((e)=>{
        document.getElementById('progressbar').value='100';
    },1000)

    setInterval((e)=>{
        document.getElementById('addDiv').innerHTML=file.name+' file added';
    },1000)
    setInterval((e)=>{
        document.getElementById('addDiv').style.display='none';
    },2000)
}
thumbnailElement.dataset.label = file.name;

wrong.addEventListener('click',(e)=>{
    thumbnailElement.classList.remove("drop-zone__thumb");
    document.getElementById('img5').style.display='none';
    document.getElementById('progressbar').style.display='none';
    wrong.style.display='none';
})
// Show thumbnail for image files
if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
    imagediv.style.backgroundImage = `url('${reader.result}')`;
    };
} else {
    imagediv.style.backgroundImage = null;
}
}


// Showing Error when next button is clicked without uploading any file
const fi=document.getElementById("input");

function fileValidation(){
    if(fi.files.length>0){
        for(const i=0;i<=fi.files.length-1; i++){
            const fsize =fi.files.item(i).size;
            const file = Math.round((fsize/1024));
            if(file>=5020){
                
                return false
            }
        }
    }
    else{
        document.getElementById("redDiv").style.display="block";
        document.getElementById("tableDiv").style.display="block";
        return false;
    }
    return true;
}
