# Morse-commandline
Translate a message into Morse, get letters and symbols or play the 'guess the symbol' minigame.

To run the application:
```
node app
```

App mode:
```
$ node app.js

Morse -- --- .-. ... .

Select your input method: message | letter | morse | guess

message - convert a message to morse
letter - get its morse symbol
morse - get the corresponding letter
guess - write the correct symbol
```

Message:
```
> message
Type your message:
> hello world
H   ....
E   .
L   ._..
L   ._..
O   ___

W   .__
O   ___
R   ._.
L   ._..
D   _..
   ....   .   ._..   ._..   ___       .__   ___   ._.   ._..   _..

```

Letter:
```
> letter
Type a letter:
> W
W   .__
```

Morse:
```
> morse
Type a morse symbol:
> ...
S
```

Guess:
```
> guess
C
> .._
Your answer is:   .._   U
The correct answer is:   _._. C
```
