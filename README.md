# parse-vue-auth-router

## 1.Project setup
```
yarn install
```

## 2. Set up parse env
creating a file `.env`, with `VUE_APP_SERVER_URL` and `VUE_APP_APP_ID`
```sh
# .env
VUE_APP_SERVER_URL=http://1.2.3.4:1337/parse
VUE_APP_APP_ID=YOUR_APP_ID
```

## 3. Run
```
yarn dev
```
![image](https://user-images.githubusercontent.com/5538753/71544536-bde8df80-29bb-11ea-8fd7-cd05f94e2042.png)


### 3.1 Routing
The routing logic, the often seen types are `requiredPublic`, `requiredLogin` and `requiredLogout`. And config the type on each `route item`, inside `meta: {permission}`

```js
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {permission: requiredPublic},
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: {permission: requiredLogout},
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {permission: requiredLogin},
    component: Logout
  },
  {
    path: '/secret',
    name: 'secret',
    meta: {permission: requiredLogin},
    component: Secret
  },
  {
    path: '/error',
    name: 'error',
    meta: {permission: requiredPublic},
    component: () => import('../views/Error.vue')
  }
]
```



### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
