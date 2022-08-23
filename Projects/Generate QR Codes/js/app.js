

const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

        showSpinner();
        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size);

            setTimeout(()=>{
                const saveUrl = qr.querySelector('img').src;
                creatSaveBtn(saveUrl);
            },50)
        } , 1000);
            
        
};

const clearUI = () => {
    qr.innerHTML ='';
    const saveBtn = document.getElementById('save-link');
    if (saveBtn) saveBtn.remove();
}
const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

const generateQRCode = (url, size) => {
    const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size
    });
};

const creatSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrcode.png';
    link.innerHTML = 'Save Image';
    document.getElementById("generated").appendChild(link);
    
};

hideSpinner();
form.addEventListener('submit', onGenerateSubmit);