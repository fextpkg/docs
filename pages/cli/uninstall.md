# fext uninstall
Removes the specified packages.

## Usage
```sh
fext u <packages> [options]
fext uninstall <packages> [options]
```

## Details
The command searches for the meta-directory of packages in the
[user's site-packages directory](https://peps.python.org/pep-0370/).
If found, it deletes all associated directories ([.data](https://peps.python.org/pep-0427/#the-data-directory),
[.dist-info](https://peps.python.org/pep-0427/#the-dist-info-directory)), as well as the package itself.
Currently, the [RECORD file](https://peps.python.org/pep-0627/#optional-record-file) is not used and there are no plans for its future usage.

## Options
| Definition             | Description                              |
|------------------------|------------------------------------------|
| `-d`, `--dependencies` | Enable recursive removal of dependencies |

## Examples
Remove packages:
```sh
fext u requests # remove only package
fext u requests aiohttp # multiple packages
fext u requests aiohttp -d # also remove their dependencies
```