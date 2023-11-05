# fext freeze
Display a list of installed packages in the system.

## Usage
```sh
fext f [options]
fext freeze [options]
```

## Details
The command scans the [user's site-packages directory](https://peps.python.org/pep-0370/) for package meta-directories.
It parses the [METADATA file](https://peps.python.org/pep-0426/) of each package,
and if a package is successfully loaded without errors, it is included in the list.
Otherwise, the behavior depends on the selected print mode.

## Options
| Definition              | Description                                                           |
|:------------------------|:----------------------------------------------------------------------|
| `-m`, `--mode=<string>` | Set the print mode. The available modes are listed in the table below |

Available modes:

| Mode  | Description                                                                                                              | Broken packages                               |
|:-----:|:-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| human | Displays a list of packages in a human-readable format, including additional info about the total weight of the packages | Will be shown at the end as a warning message |
|  pip  | Displays a list of packages in a s similar manner to PIP, but with additional annotations                                | Will be commented-out                         |

_**Broken packages** are packages that failed to load_

## Examples
Display a list of packages using print mode:
```sh [human]
fext f # default: human mode
fext f -m=pip # pip freeze
```