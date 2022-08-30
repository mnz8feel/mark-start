export default function ChildApp() {
  return (
    <div>
      <h1>子应用</h1>
      <micro-app
        name="app1" // name(必传)：应用名称
        url="http://localhost:5173/" // url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
        baseroute="/child-app" // baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
      />
    </div>
  );
}
