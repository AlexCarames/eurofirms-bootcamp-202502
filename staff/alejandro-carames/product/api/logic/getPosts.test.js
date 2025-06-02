import { connect, disconnect } from '../data/index.js'
import { getPosts } from './getPosts.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return getPosts('683761c9b4629e917e6c4bd0')
                .then(posts => console.log('posts', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())