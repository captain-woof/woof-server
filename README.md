# Woof Server

### Introduction 📝

<p align="center">
<img src="https://drive.google.com/uc?export=download&id=1ZDQcVVRJ-7yRoYiXVZnti6GwhdEzQX15">
</p>

'Woof Server' is an HTTP server written in NodeJS, **capable of providing simultaneous file download and upload functionality.** 🚀🚀

### Where can I use this? 🧐

Since this is more of an utility, examples usage scenarios include:

- You need to set up a quick server for file transfers between 2 hosts in both directions. 💻
- You are pentesting or playing CTFs, and you need to keep transferring files to and from the attackbox and victim machine. 😏

### Usage ⛷️

##### Getting it 🚀
```bash
git clone https://github.com/captain-woof/woof-server.git
cd woof-server
```

##### Spinning it up 🚀
```bash
Usage: node main.js listen-ip listen-port upload-dir download-dir
# Defaults are -> 0.0.0.0 80 . .
```

##### Uploads & Downloads 🚀

```bash
# Download
curl -O http://server-ip:port/filename # GET request

# Upload
curl -F "anything=@location/of/file" http://server-ip:port/ # POST request
```

### Author 🏃

##### CaptainWoof

![Twitter Follow](https://img.shields.io/twitter/follow/realCaptainWoof)
