const input = document.querySelector('#url-text');
const button = document.querySelector('#generate');

button.addEventListener('click', (event) => {
  console.log(input.value)
  generateQRCode(input);
})

function generateQRCode(input) {
  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    type: "svg",
    data: `"${input.value}"`,
    image: "./assets/github.svg",
    dotsOptions: {
        color: "#3685FE",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#e9ebee",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 5,
        imageSize: 0.3
    }
  });
  
  qrCode.append(document.querySelector(".container-image"));
}
