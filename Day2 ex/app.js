const osInfo = require('./osInfo'); 
const DOSDetector = require('./dosDetector');

const dosDetector = new DOSDetector(10000);

dosDetector.on('DOSDetected', (arg) => {
    console.log('Dos Detector called', arg)
});

const url = 'www.derp.dk';
dosDetector.addUrl(url);

setTimeout(() => dosDetector.addUrl(url),2000);

console.log(osInfo);