const input = document.querySelector('#url-text');
const button = document.querySelector('#generate');
const modal = document.querySelector('.modal');
const download = document.querySelector('.download');

button.addEventListener('click', (event) => {
  generateQRCode(input);
});

function generateQRCode(input) {
  if (input.value != '') {
    const qrCode = new QRCodeStyling({
      width: 250,
      height: 250,
      type: "jpeg",
      data: `"${input.value}"`,
      image: "",
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

    download.addEventListener('click', (e) => {
      qrCode.download({ name: "qr", extension: "jpeg" });
    });

  } else {
    alert('Input cannot be empty.')
  }
}
