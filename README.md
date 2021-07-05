# Woof Server

### Introduction 📝

<p align="center">
<img src="https://drive.google.com/uc?export=download&id=1ZDQcVVRJ-7yRoYiXVZnti6GwhdEzQX15">
</p>

'Woof Server' is an HTTP server written in NodeJS, **capable of providing simultaneous file download and upload functionality.** 🚀🚀

### Where can I use this? 🧐

Since this is more of an utility, examples usage scenarios include:

- You need to set up a quick server for **file transfers between 2 hosts in both directions.** 💻
- You are **pentesting or playing CTFs**, and you need to keep transferring files to and from the attackbox and victim machine. 😏
- You just need to set up a **quick download server**. 🤷‍♂️
- Or, you just need to set up a **quick upload server**. 🤷

### Usage ⛷️

#### Where to get it from? 🚀

As of now, you'll find **standalone release binaries** for Windows, Linux and MacOS. Checkout **[releases](https://github.com/captain-woof/woof-server/releases)**.

#### Spinning it up 🚀
```bash
Usage: ./woof-server listen-ip listen-port upload-dir download-dir
# Defaults are -> 0.0.0.0 80 . .
# Type "-h" for help.
```

#### Uploads & Downloads 🚀

```bash
# To download, make a GET request like:
curl -O http://server-ip:port/filename

# To upload, make a POST request with mime-type multipart/form-data like:
curl -F "anything=@location/of/file" http://server-ip:port/
```

### Author 🏃

##### CaptainWoof

![Twitter Follow](https://img.shields.io/twitter/follow/realCaptainWoof)
