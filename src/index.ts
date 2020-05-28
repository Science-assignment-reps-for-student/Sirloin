import app from './app/index'

import config from './config/appConfig'

app.listen(config.port, config.host, () => {
    console.log("* Running on http://"+config.host+":"+config.port)
})