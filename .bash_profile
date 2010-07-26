########## ENV Vars ###################

export PS1='
\u@\H:\w
→ '





########## Aliases ###################

alias rm='rm -i'
alias ll='ls -lah'

if [ $(uname) = 'Linux' ]; then
	unalias ls
fi;