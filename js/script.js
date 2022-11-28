const input = document.querySelector('#url-text');
const button = document.querySelector('#generate');

button.addEventListener('click', (event) => {
  console.log(input.value)
  generateQRCode(input);
})

function generateQRCode(input) {
  const qrCode = new QRCodeStyling({
    width: 290,
    height: 290,
    type: "svg",
    data: `"${input.value}"`,
    image: "./assets/github.svg",
    dotsOptions: {
      color: "#3685FE",
      type: "classy"
    },
    backgroundOptions: {
      color: "#e9ebee",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 5,
      imageSize: 0.3
    },
    qrOptions: {
      errorCorrectionLevel: "H"
    },
    cornersSquareOptions: {
      color: "#225cb4"
    }
  });
  
  qrCode.append(document.querySelector(".container-image"));
}
