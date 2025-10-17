// Update the current time in milliseconds
function updateTime() {
  const timeElement = document.getElementById("time");
  timeElement.textContent = Date.now();
}

// Initial call + optional live update every second
updateTime();
setInterval(updateTime, 1000);

// Handle avatar updates
const imageUpload = document.getElementById("imageUpload");
const imageUrlInput = document.getElementById("imageUrl");
const applyButton = document.getElementById("applyImage");
const avatarImg = document.getElementById("avatar-img");

applyButton.addEventListener("click", () => {
  const imageUrl = imageUrlInput.value.trim();

  // If user provided a URL
  if (imageUrl) {
    avatarImg.src = imageUrl;
    imageUrlInput.value = "";
    return;
  }

  // If user uploaded a file
  const file = imageUpload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      avatarImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
