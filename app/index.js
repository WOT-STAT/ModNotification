import express from 'express'
import cors from 'cors'
import config from 'config'

import version from './version/index.js'

const app = express()

app.use(express.json())
app.use(cors());
app.options('*', cors());

app.use('/api/modnotification/version', version)

async function Start() {
    const port = config.get('appPort') || 5000
    try {
        app.listen(port, () => {
            console.log(`App listening at http://localhost:${port}/api/modnotification/version`)
        })
    }
    catch (e) {
        console.error(`Server error: ${e.message}`)
        process.exit(1)
    }
}

Start()
