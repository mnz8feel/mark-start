import { Link } from 'react-router-dom';
import routes from '@/../config/routes';
import type { typeMyRoute } from '@/../config/routes';

export default function Sider() {
  const routesLi: any = [];
  function transMenu(param: typeMyRoute[]) {
    param.forEach((ele) => {
      if (ele?.name) {
        routesLi.push(
          <li key={ele.name}>
            <Link to={ele.path as string}>{ele.name}</Link>
          </li>,
        );
      }
      if (ele?.children) {
        transMenu(ele?.children);
      }
    });
  }
  transMenu(routes);

  return <ul style={{ width: '100%' }}>{routesLi}</ul>;
}
