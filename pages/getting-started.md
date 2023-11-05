---
title: Getting started
---

# Preface
The Fext has some [differences](/differences), so it is recommended to use only one
package manager. 

## Usage
The interface for interacting with Fext is as follows:
```sh
fext <command> [options]
```
Options can be specified between any arguments, but for better reading it is
recommended to specify them only on one side.

## Examples
All commands are the same as in [PIP](https://pip.pypa.io/en/stable/cli/index.html),
but using Fext you can shorten them:
```sh
fext i requests # fext install requests
fext u requests # fext uninstall requests
fext f # fext freeze
```

The package installation interface is also identical:
```sh
fext i requests==2.0.0 # install strictly version 2.0.0
fext i requests<2.1.1!=2.0.1>2 # multiple operators will work too
fext i requests[socks,security] # install multiple extras
```

You can also install packages from a file, but when using the `-r` flag, Fext
only accepts files containing a list of packages. This means you won't be able
to specify additional packages.
::: code-group
```sh [Fext]
fext i -r requirements/base.txt requirements/dev.txt # ok
fext i -r requirements/base.txt -r requirements/dev.txt # ok
fext i -r requirements/* # ok
fext i -r requirements/base.txt requests # error here
```

```sh [PIP]
pip install -r requirements/base.txt requirements/dev.txt # error here
pip install -r requirements/base.txt -r requirements/dev.txt # ok
pip install -r requirements/* # error here
pip install -r requirements/base.txt requests # ok
```