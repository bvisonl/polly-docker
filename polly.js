// Load the SDK
const AWS = require('aws-sdk')
const Fs = require('fs')

const text = process.argv[2];
const filename = process.argv[3];
const format = process.argv[4];


// will produce wav file on provided dir

// Create an Polly client
const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-east-1'
})

let params = {
    'Text': text,
    'OutputFormat': 'mp3',
    'VoiceId': 'Kimberly'
}

Polly.synthesizeSpeech(params, (err, data) => {
    if (err) {
        console.log(err.code)
    } else if (data) {
        if (data.AudioStream instanceof Buffer) {
            Fs.writeFile("/outdir/" + filename + ".mp3", data.AudioStream, function(err) {
                if (err) {
                    return console.log(err)
                }

                if(format == "wav") {
                    const Lame = require("node-lame").Lame;
 
                    const decoder = new Lame({
                        output: "/outdir/" + filename + ".wav"
                    }).setFile("/outdir/" + filename + ".mp3");

                     decoder
                        .decode()
                        .then(() => {
                            Fs.unlinkSync("/outdir/" + filename + ".mp3")
                        })
                        .catch(error => {
                            console.log(error)
                        });
                }

                console.log("The file was saved!")
            })
        }
    }
})
