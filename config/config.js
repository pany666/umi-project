export default {
    plugins: [
        ['umi-plugin-react', {
          antd: true,
          dva: true,
        }],
      ],
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
          {path: '/',component: 'index'},
          {path: '/index',component: 'index'},
          {
            path: '/diary',
            routes: [
              { path: '/diary', component: 'diary/diary_1_1' },
              { path: '/diary/diary_1_1', component: 'diary/diary_1_1' },
              { path: '/diary/diary_1_2', component: 'diary/diary_1_2' },
              { path: '/diary/diary_1_3', component: 'diary/diary_1_3' },
              { path: '/diary/diary_1_4', component: 'diary/diary_1_4' },
              { path: '/diary/diary_1_5', component: 'diary/diary_1_5' },
            ]
          },
          {
            path: '/summary',
            routes: [
              { path: '/summary', component: 'summary/sum1' },
              { path: '/summary/sum1', component: 'summary/sum1' },
            ]
          },
        ]
      }],
};
