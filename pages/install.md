---
title: Installation
---

## Installation script
Using this script, the Fext will be installed directly into the python packages
directory and will be listed as a separate package. It can also overwrite
older versions, which means it can be used to update the Fext.
```sh
curl https://cdn.lunte.dev/get-fext.py -o get-fext.py
python get-fext.py
```

## From sources
Installation from sources requires Go 1.13+.
You can conveniently install the Fext via next command:
```sh
go install github.com/fextpkg/cli/fext
```
