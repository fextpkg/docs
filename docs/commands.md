#### Available commands:
* [install](#install) (Install a packages)
* [uninstall](#uninstall) (Uninstall a packages)
* [freeze](#freeze) (List of installed packages)
* [debug](#debug) (Debug information)

## Install
Syntax: `fext i [options] <package(s)>`

Installs selected packages, dependencies and dependencies of dependencies.
By default, it searches the latest package version, but you can specify comparison operator.
You can write them however as you want:
```sh
fext i aiohttp<=3
fext i "aiohttp (<=3 >=1)"
```
Also, you can install extra packages as:

```sh
fext i requests[socks,security]
```

Available options:

* `-n`, `--no-dependencies` - Installs single package without dependencies
* `-s`, `--silent` - Installs package silently. Output only error messages
* `-r`, `--requirements` - Install from files. Fext will accept the names of files with a list of packages,
instead of package names

## Uninstall
Syntax: `fext u [options] <package(s)>`

Uninstalls single packages without dependencies.<br>

Available options:

* `-d`, `--dependencies` - Uninstalls dependencies also

## Freeze
Syntax: `fext freeze`

Shows list of installed packages

## Debug
Syntax: `fext debug`

Shows debug info.
