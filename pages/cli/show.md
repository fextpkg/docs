# fext show <Badge type="new">new in v0.4</Badge>
Displays meta-information about the specified package.

## Usage
```sh
fext show <package>
```

## Details
It scans the [metadata](https://peps.python.org/pep-0426/)
file and extracts all the essential information useful during development.

Dependencies and extra-dependencies are marked in <span class="correct">**green**</span>
if they are <span class="correct">**correctly installed**</span>,
in <span class="incorrect">**red**</span> if there's an <span class="incorrect">**issue**</span>,
that can be checked via [check](/cli/check) command.
Normal color is applied to extra dependencies that are not installed.

## Examples
Display info about `requests` package:
```sh
fext show requests
```