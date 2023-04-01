nest new microservice/calc -g
pnpm -F calc add @nestjs/microservices

nest new microservice/qing-long -g
pnpm -F qing-long add @nestjs/microservices

`pnpm -F "./microservice/**" start`
http://localhost:60003/?num=1,2,3

nest new microservice/log -g
pnpm -F log add @nestjs/microservices
http://localhost:60003/?num=1,2,3

end

`pnpm -F "./microservice/**" start` 启动 microservice 下所有，默认并发 4
`pnpm -F=\!nest-monolithic start` 启动除 nest-monolithic 所有

`!` must be escaped: `\!`.
[Excluding](https://pnpm.io/filtering#excluding)

`pnpm -r start` 启动当前目录下所有
`pnpm -F "./**" start` 启动当前目录下所有
