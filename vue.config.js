module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'view': '@/view',
                'components': '@/components',
                'network': '@/network',
                'common': '@/common',
            }
        }
    }
}