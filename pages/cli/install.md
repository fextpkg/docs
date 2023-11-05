# fext install
Install the specified package along with their dependencies, including recursive dependencies.
By default, it searches for the latest version of the package, but you can specify conditional operator if desired.

## Usage
```sh
fext i <packages> [options]
fext install <packages> [options]
```

## Details
The command searches for the specified packages in the [PyPI](https://pypi.org/) repository,
filtering versions based on the [wheel format](https://peps.python.org/pep-0427/) and selecting those that match the
system and Python tags. Then compare all specified comparison operators.
If a suitable version is found, it proceeds with downloading and unpacking into the
[user's site-packages directory](https://peps.python.org/pep-0370/).

## Options
| Definition                         | Description                                      |
|:-----------------------------------|:-------------------------------------------------|
| `-n`, `--no-dependencies`          | Install packages without their dependencies      |
| `-q`, `--quiet` (`-s`, `--silent`) | Enable quiet mode. Only errors will be displayed |
| `-r`, `--requirements`             | Enable package reading from specified files      |

## Examples
Install latest package version:
```sh
fext i requests
fext i requests aiohttp # multiple packages
```

Install extra packages:
```sh
fext i requests[socks]
fext i requests[socks,security] # multiple extras
```

Install the required version based on comparison operators:
```sh
fext i requests==2.1.1 # strictly specified version
fext i requests<2.1.1>2!=2.0.1 # within a range of versions
fext i "requests <2.1.1, >2, !=2.0.1" # equivalent to the above query
fext i requests==2.1.1 aiohttp==4 # multiple packages
```

Install from requirements files:
```sh
fext i -r requirements/base.txt # equivalent to pip
fext i -r requirements/base.txt requirements/dev.txt # but no need to repeat
fext i -r requirements/* # you can also use a star
```