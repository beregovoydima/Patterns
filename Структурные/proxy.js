class Download {
    start() {
        console.log('dowload file');
    }
    remove() {
        console.log('stop download');
    }
}
class DownloadProxy {
    constructor(download) {
        this.download = download;
    }
    acces(push) {
        if (this.click(push)) {
            this.download.start();
        }
        else {
            console.log('download denied');
        }
    }
    click(push) {
        return push === 'click';
    }
    remove() {
        this.download.remove();
    }
    nextVideo() {
        console.log('download next video');
    }
}
const proxy = new DownloadProxy(new Download());
proxy.acces('q');
proxy.acces('click');
proxy.remove();
proxy.nextVideo();
