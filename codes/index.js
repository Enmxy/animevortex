fetch("http://www.google.com").then(res => {
    console.log(res);
    console.log("İkinci burası");
}).catch(err => {
    console.log('Hata var: ', err);
});

console.log("İlk burası");