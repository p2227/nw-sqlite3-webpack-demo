export default function configRouter(router) {
    router.map({
        // basic example
        '/login': {
            component: require('./../modules/login/index.vue')
        }
    })
}
