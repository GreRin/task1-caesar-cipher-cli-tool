# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

- git clone - [link](https://github.com/GreRin/task1-caesar-cipher-cli-tool/tree/task1-caesar-cipher-cli-tool)

## Installing NPM modules

```
npm install
```

## Running application from command line

```
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

# Description

CLI tool accept 4 options (short alias and full name):

- -s, --shift: a shift
- -i, --input: an input file
- -o, --output: an output file
- -a, --action: an action encode/decode

#Usage example:

1. _-a (--action)_ is **encode**

```
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

```
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```
> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**  
   _Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```
$ node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
```

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> plain.txt
> `This is secret. Message about "_" symbol!`

