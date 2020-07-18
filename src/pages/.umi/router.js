import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layout').default,
    routes: [
      {
        path: '/',
        component: require('../index').default,
        exact: true,
      },
      {
        path: '/index',
        component: require('../index').default,
        exact: true,
      },
      {
        path: '/diary',
        routes: [
          {
            path: '/diary',
            component: require('../diary/diary_1_1').default,
            exact: true,
          },
          {
            path: '/diary/diary_1_1',
            component: require('../diary/diary_1_1').default,
            exact: true,
          },
          {
            path: '/diary/diary_1_2',
            component: require('../diary/diary_1_2').default,
            exact: true,
          },
          {
            path: '/diary/diary_1_3',
            component: require('../diary/diary_1_3').default,
            exact: true,
          },
          {
            path: '/diary/diary_1_4',
            component: require('../diary/diary_1_4').default,
            exact: true,
          },
          {
            path: '/diary/diary_1_5',
            component: require('../diary/diary_1_5').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('G:/umi-project/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/summary',
        routes: [
          {
            path: '/summary',
            component: require('../summary/sum1').default,
            exact: true,
          },
          {
            path: '/summary/sum1',
            component: require('../summary/sum1').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('G:/umi-project/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('G:/umi-project/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('G:/umi-project/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}