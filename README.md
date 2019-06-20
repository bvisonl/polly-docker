Polly
=====

[DockerHub](https://hub.docker.com/r/bvisonl/polly)

## Usage

```bash
docker run -e AWS_ACCESS_KEY_ID=[KEY_HERE] -e AWS_SECRET_ACCESS_KEY=[KEY_HERE] -v "${PWD}/outdir:/outdir" bvisonl/polly:latest "This a test using Docker to do TTS" "outfile" wav
```

Note: the `outfile` shouldn't contain the extension. If the `wav` parameter is not passed, the output format will be `mp3`.
