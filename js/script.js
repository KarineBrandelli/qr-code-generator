const input = document.querySelector('#url-text');
const button = document.querySelector('#generate');
const modal = document.querySelector('.modal');

button.addEventListener('click', (event) => {
  generateQRCode(input);
});

function generateQRCode(input) {
  if (input.value != '') {
    const qrCode = new QRCodeStyling({
      width: 250,
      height: 250,
      type: "svg",
      data: `"${input.value}"`,
      image: "./assets/github.svg",
      dotsOptions: {
        color: "#3685FE",
        type: "classy"
      },
      backgroundOptions: {
        color: "#FFFFFF",
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

    modal.showModal();
  } else {
    alert('Input cannot be empty.')
  }
}
