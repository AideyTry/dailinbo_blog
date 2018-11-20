module.exports = {
  title: '戴林波博客',
  description: '主要用于记录技术',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'tech-blog', link: '/technical/' },
      { text: 'vue', link: '/vue/' },
      { text:'project',link:'/project/'}
    ],
    // sidebar:[
    //   {title:'vue',collapsable:false,link:'/vue/framwork.md'}
    // ]
    sidebar:{
      '/vue/':genSidebarConfig ('vue',{name:'framwork'}),
      // '/project/':genSidebarConfig ('vue',{name:'project'}),
      '/vue/':genSidebarConfig ('vue',{name:'base'})
    }
  }
}

function genSidebarConfig (title,obj) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        obj.name
        // {link:''},
        // {link:'framwork.md'}
      ]
    }
  ]
}