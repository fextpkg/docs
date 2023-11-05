---
title: Differences
---

# TL;DR
Fext differs in certain aspects due to its indirect usage of Python through auxiliary commands.
While it maintains backward compatibility, its adherence to [PEP](https://peps.python.org/topic/packaging/) standards remains its primary focus.

## Packages directory
Fext uses [per user site-packages directory](https://peps.python.org/pep-0370/), instead of global site-packages.
There are a number of reasons for this:
- Reduce conflicts between package managers
- Difficulties in obtaining a global directory

## Without legacy support
Fext was originally conceived as a modern and convenient package manager. It
does not seek to support outdated projects. There is a [PIP](https://github.com/pypa/pip) for this.
Based on this, Fext doesn't support:
- Python 2
- [Egg packages](https://setuptools.pypa.io/en/latest/deprecated/python_eggs.html)
- All [Linux tags](https://github.com/pypa/manylinux) except `manylinux_x_y`