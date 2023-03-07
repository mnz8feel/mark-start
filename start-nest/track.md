start-nest -> default
change to workspace

nest new microservice/calc -g
pnpm -F calc add @nestjs/microservices

nest new microservice/qing-long -g
pnpm -F qing-long add @nestjs/microservices

`pnpm -F "./microservice/*" start` # pnpm filter Excluding 没有成功
http://localhost:3000/?num=1,2,3

nest new microservice/log -g
pnpm -F log add @nestjs/microservices
http://localhost:3000/?num=1,2,3
