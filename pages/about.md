# Introduction
The Fext package manager was developed as an alternative to [PIP](https://pip.pypa.io/en/stable/),
with the aim of being a faster, more modern and user-friendly option.
However, it was not possible to fully meet all these criteria simultaneously,
so the decision was made to [remove legacy support](/differences#without-legacy-support) from Fext.

## Overview
Fext, written in Go, is a lightweight package manager that eliminates unnecessary dependencies.
It follows all [PEP](https://peps.python.org/topic/packaging/) standards for backward compatibility,
allowing for a seamless transition from PIP to Fext.
However, transitioning back may pose challenges.
Fext retains all commands from PIP, with only minor modifications to certain flags.

## Features
### 🚀 Speed
Fext stands out for its remarkable speed, surpassing PIP by **1.5–5 times**.
This impressive performance is achieved through the power of Go,
as Fext operates by effectively scanning directories and files without any need for Python involvement.

### ♻️ Dependencies free
Fext is designed with minimal dependencies, ensuring its speed and lightweight nature.
It is currently packaged as a single **8MB** binary file.

### ⚡ Shortcuts
Fext simplifies command entry by offering convenient single-letter abbreviations for commonly used commands,
reducing the need for repetitive typing.

### ♾️ Backward compatibility
Fext fully compiles with PEP standards, ensuring seamless backward compatibility with PIP.
The only difference you may encounter is in slightly modified flags.