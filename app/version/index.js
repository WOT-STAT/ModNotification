import Router from 'express'
import config from 'config'
import path from 'path'

const router = Router()


router.get('/versions', (req, res) => {
    res.json(config.get('version'))
})

router.get('/versions/download', (req, res) => {
    const file = path.resolve(`../modVersions/wotStat_${config.get('version').version}.wotmod`)
    res.download(file);
})


export default router
