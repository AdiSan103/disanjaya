// get value from input sender
let allDataUrl = window.location.search;
let getDataUrl = new URLSearchParams(allDataUrl);
let receiverUrl = getDataUrl.get('HJkaL');
let messageUrl = getDataUrl.get('MGJiK');
let senderUrl = getDataUrl.get('LpOUI');
let copy = document.getElementsByClassName('copy')[1];

// make url
if(copy) {
    copy.addEventListener('click', function() {
        copy.classList.remove('salin');
        copyData();
    });
}

// 1.1
function copyData() {
    let receiverCopy = document.getElementsByClassName('receiverCopy')[0];
    let messageCopy = document.getElementsByClassName('messageCopy')[0];
    let senderCopy = document.getElementsByClassName('senderCopy')[0];
    // get data from main form
    receiverCopy.value = document.getElementById('HJkaL').value;
    messageCopy.value = document.getElementById('MGJiK').value;
    senderCopy.value = document.getElementById('LpOUI').value;
    // if
    let make = document.getElementsByClassName('salin')[0];
    if(make) {
        baseUrl();
    }
}


// default
if(receiverUrl === null && senderUrl === null) {        
    if(messageUrl === null) {
        copy.classList.remove('salin');
    }
}


// make url
    if(receiverUrl || senderUrl) {        
        if(messageUrl) {
            // back page
                    if(copy) {
                        copy.innerHTML = "Salin link";
                        copy.classList.add('salin');
                }
        }
    }

// copy url
if(document.getElementsByClassName('salin')[0]) {
    let make = document.getElementsByClassName('salin')[0];
    make.addEventListener('click', function() {
        baseUrl();
    })
}

// 2.1s
function baseUrl() {
    let urlBase = document.getElementById('baseUrl');
    urlBase.value = 'https://adisan103.github.io/projeck/xatemp.html?' + getDataUrl;
    copyUrl();
}
// 2.2
function copyUrl() {
    copy.classList.add('back');
    let urlBase = document.getElementById('baseUrl');
    urlBase.select();
    document.execCommand("copy");
    alert("link berhasil dicopy");
    // let receiverCopy = document.getElementsByClassName('receiverCopy')[0];
    // let messageCopy = document.getElementsByClassName('messageCopy')[0];
    // let senderCopy = document.getElementsByClassName('senderCopy')[0];
    // // post data to url
    // receiverCopy.value = 'false';
    // messageCopy.value = 'false';
    // senderCopy.value = 'false';
}


// output
let receiverValue = document.getElementsByClassName('receiverData')[0]; 
// jika class receiverData ada (mencegah errior)
if(receiverValue){
    receiverValue.innerHTML = receiverUrl;

    let messageValue = document.getElementsByClassName('messageData')[0];
    messageValue.innerHTML = messageUrl;
    
    let senderValue = document.getElementsByClassName('senderData')[0];
    senderValue.innerHTML = senderUrl;
}
