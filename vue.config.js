module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views'
			}
		},
    // 运行npm run serve时，自动打开浏览器
    devServer: {
      open: true,
    }
	}
}
