Very primitive hot reloading example.

Run `npm run build` to build it once. Then, run `./bin/watch` to watch
the source files for changes and it'll automatically rebuild.

Now, run `./bin/serve` to start the local web server and go to
`http://localhost:4000/`. You'll see a string in the console. Open
`src/main.re` and change the string and you'll see the new string
printed in the console after it rebuilds.