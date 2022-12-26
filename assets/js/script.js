const input = document.querySelector('#url-text');
const inputImage = document.querySelector('#select-file');
const inputImageName = document.querySelector('.image-name');
const button = document.querySelector('#generate');
const modal = document.querySelector('.modal');
const download = document.querySelector('.download');

button.addEventListener('click', (event) => {
  generateQRCode(input);
});

let showImage = '';

inputImage.addEventListener('change', (evento) => {
  inputImageName.value = inputImage.value;

  showImage = URL.createObjectURL(evento.target.files[0]);
});

function generateQRCode(input) {
  if (input.value != '') {
    const qrCode = new QRCodeStyling({
      width: 250,
      height: 250,
      type: "jpeg",
      data: `${input.value}`,
      image: `${showImage}`,
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
