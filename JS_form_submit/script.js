let uploads = []; // empty array called uploads to store the image uploads.
let idCounter = 0; //variable idCounter initialized to 0, used to assign unique IDs to each upload.
let totalLikes = 0; // used to count the total number of likes.

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const imageURL = document.getElementById("imageURL").value;
  const imageCaption = document.getElementById("imageCaption").value;
  const errorMessage = document.getElementById("errorMessage");

  if (!isImgUrl(imageURL)) {
    //เข้า functionให้ค่าออกมาเป็น Flase เเละใส่ ! ให้เป็นTrueเผื่อให้ทำงานหรอ?
    errorMessage.textContent = "Please enter a valid image URL.";
    return;
  }

  if (imageCaption.length < 3 || imageCaption.length > 255) {
    errorMessage.textContent =
      "Please describe your image (at least 3 characters, and not over 255 characters).";
    return;
  }

  const newUpload = {
    id: idCounter++,
    imageURL: imageURL,
    caption: imageCaption,
    likes: false,
  };

  uploads.push(newUpload);
  displayUpload(newUpload);
  errorMessage.textContent = "";
  document.getElementById("form").reset();
});

// การกด Reset เเล้วให้เเทนค่า errorMessage ให้ "" ว่างเปล่า
document.querySelector("button[type='reset']").addEventListener("click", () => {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = "";
});

// function dusplayUpload
function displayUpload(upload) {
  const displaySection = document.getElementById("displaySection");
  const card = document.createElement("div"); // Create card div element
  card.className = "bg-white p-4 rounded-lg shadow-lg"; // setting css

  card.innerHTML = `
  <img src="${upload.imageURL}" alt="${upload.caption}" class="w-full aspect-[4/3] rounded-md mb-4 object-cover">
<p class="text-gray-700 font-semibold text-2xl text-balance overflow-hidden my-4 p-4">${upload.caption}</p>
<label class="inline-flex items-center mt-2 text-2xl px-4">
<input type="checkbox" class="w-8 h-8 text-2xl accent-rose-600" data-id="${upload.id}" onchange="toggleLike(event)">
<span class="ml-2 text-gray-700 font-semibold">Love this 😍!</span>
</label>
`; // card.innerHTML inssert code to card for create cart layout by get info form upload.caption

  displaySection.appendChild(card);
  updateLikeCounter();
}

function toggleLike(event) {
  const checkbox = event.target;
  const uploadId = parseInt(checkbox.getAttribute("data-id"));
  const upload = uploads.find((upload) => upload.id === uploadId);

  if (upload) {
    upload.likes = checkbox.checked;
    updateLikeCounter();
  }
}

function updateLikeCounter() {
  totalLikes = uploads.filter((upload) => upload.likes).length;
  document.getElementById(
    "likeCounter"
  ).textContent = `Total Likes ${totalLikes}`;
}

// Validating image URLs using RegEx
function isImgUrl(imageURL) {
  const input = new URL(imageURL);
  return /\.(jpg|jpeg)$/.test(input.pathname);
}

