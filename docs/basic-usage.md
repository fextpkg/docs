After installation you can use fext via command:
```sh
fext <command> [options]
```

All fext commands are similar to pip commands, except that fext has a shorted
version of them. For example:
```sh
fext i requests # fext install requests
fext u requests # fext uninstall requests
```

To install a specific version of a package:
```sh
fext i requests==2.0.0
fext i requests<2.1.0!=2.0.1>=2
```

To install extra packages:
```sh
fext i requests[socks,security]
```
