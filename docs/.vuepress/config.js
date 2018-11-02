module.exports = {
  title: '戴林波博客',
  description: '主要用于记录技术',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'tech-blog', link: '/technical/' },
      { text: 'vue', link: '/vue/' }
    ],
    sidebar:{
      '/vue/':genSidebarConfig ('vue')
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'framwork'
      ]
    }
  ]
}