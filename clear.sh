#!/usr/bin/env bash

find . -type d -name "node_modules" -exec rm -rf {} \;
find . -type d -name "dist" -exec rm -rf {} \;
find . -type d -name ".next" -exec rm -rf {} \;
find . -type d -name ".cache" -exec rm -rf {} \;
find . -type d -name ".svelte-kit" -exec rm -rf {} \;
