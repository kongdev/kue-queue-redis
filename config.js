class Config {
    constructor() {
        this.server = [
            {
                host: '192.168.2.84',
                port: 7001
            }, {
                host: '192.168.2.84',
                port: 7002
            }, {
                host: '192.168.2.84',
                port: 7003
            }, {
                host: '192.168.2.84',
                port: 7004
            }, {
                host: '192.168.2.84',
                port: 7005
            }, {
                host: '192.168.2.84',
                port: 7006
            }
        ]
    }

    getConfig(){
        return this.server;
    }

}

module.exports = Config;
