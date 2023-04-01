`pnpm -F "./start-solid*" dev`
`pnpm -F "./start-astro*" dev`
`pnpm -F "./start-astro*" -F "./start-solid*" dev`
`pnpm -F "./start-astro*" -F "./start-solid*" --workspace-concurrency Infinity dev`
`pnpm -r --workspace-concurrency Infinity dev`

--workspace-concurrency
Default: 4
Type: Number

Set the maximum number of tasks to run simultaneously. For unlimited concurrency use `Infinity`.

You can set the `workpace-concurrency` as `<= 0` and it will use amount of cores of the host as: `max(1, (number of cores) - abs(workspace-concurrency))`

`pnpm -F "./start-nest/**" start`
