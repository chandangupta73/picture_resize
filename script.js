const fileInput = document.getElementById('fileInput');
const previewImage = document.getElementById('previewImage');
const smallPreviewImage = document.getElementById('s-previewImage');

fileInput.addEventListener('change', function () {
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            smallPreviewImage.src = e.target.result;
            previewImage.src = e.target.result;
        };

        reader.readAsDataURL(file);

    }
});
function resizeBanner() {
    const inputWidthElement = document.getElementById("bannerWidthInput");
    const inputHeightElement = document.getElementById("bannerHeightInput");
    const bannerElement = document.getElementsById("banner");
    const newWidth = inputWidthElement.value;
    const newHeight = inputHeightElement.value;

    if (newWidth) {
        bannerElement.style.width = newWidth + "px";
    }
    if (newHeight) {
        bannerElement.style.height = newHeight + "px";
    }
}

