import { connect, disconnect } from '../data/index.js'
import { removePost } from './removePost.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return removePost('683761c9b4629e917e6c4bd0', '683dff220e7c41c756c3212d')
                .then(() => console.log('post removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())