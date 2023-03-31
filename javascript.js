// // Define social media buttons data
// const socialMediaButtonsData = [
//     {
//       label: "Facebook",
//       iconClass: "fab fa-facebook-f",
//       url: "https://www.facebook.com/"
//     },
//     {
//       label: "Twitter",
//       iconClass: "fab fa-twitter",
//       url: "https://twitter.com/"
//     },
//     {
//       label: "Instagram",
//       iconClass: "fab fa-instagram",
//       url: "https://www.instagram.com/"
//     }
//   ];
//   // Create social media buttons
//   const socialMediaButtonsElement = document.getElementById("social-media-buttons");
//   socialMediaButtonsData.forEach(data => {
//     const button = document.createElement("a");
//     button.setAttribute("href", data.url);
//     button.setAttribute("target", "_blank");
//     button.innerHTML = `<i class="${data.iconClass}"></i> ${data.label}`;
//     socialMediaButtonsElement.appendChild(button);
//   });

const images = document.querySelectorAll('#image-container img');

images.forEach(img => {
  img.addEventListener('click', () => {
    // do something when the image is clicked
    console.log(`Image ${img.alt} was clicked`);
  });
});
