start-nest -> default
change to workspace

nest new microservice/calc -g
pnpm -F calc add @nestjs/microservices

nest new microservice/qing-long -g
pnpm -F qing-long add @nestjs/microservices

`pnpm -F "./microservice/*" start`
http://localhost:3000/?num=1,2,3

nest new microservice/log -g
pnpm -F log add @nestjs/microservices
http://localhost:3000/?num=1,2,3

`pnpm -F=\!start-nest start` [Excluding](https://pnpm.io/filtering#excluding)
"!" should be escaped: `\!`.
