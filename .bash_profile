export PS1='
\u@\H:\w
→ '

########## Aliases ###################
alias cd..="cd .."
alias :='cd ..'
alias ::='cd ../..'
alias :::='cd ../../..'
alias rm='rm -i'
alias ll='ls -lah'

alias get-current-branch="git branch 2>/dev/null | grep '^*' | colrm 1 2"
alias get-current-color="if [[ \$(get-current-branch) == \"master\" ]] ; then echo \"1;33m\" ; else echo \"0m\" ; fi"

if [ $(uname) = 'Linux' ]; then
unalias ls
fi;

########## Bash ###################
#bash only stuff
if [ "$SHELL" = "/bin/bash" ]; then
  #magical new tab to last directory trick
  #source: http://gist.github.com/132456
  function pathed_cd () {
      if [ "$1" == "" ]; then
          cd
      else
          cd "$1"
      fi
      pwd > ~/.cdpath
  }
  alias cd="pathed_cd"
 
  if [ -f ~/.cdpath ]; then
    cd "$(cat ~/.cdpath)"
  fi
  
  
  # history options
  export HISTCONTROL=erasedups # don't store duplicate lines
  export HISTSIZE=100000 #remember 100k unique lines
  shopt -s histappend
  
  
  #include the current git branch in the prompt (source http://gist.github.com/168835 )
  #I added a bright yellow color if on the master branch
  export PS1="\\W:\[\033[\$(get-current-color)\]\$(get-current-branch)\\[\033[0m\]\$ "
fi

########## Git ###################
alias gs='git status' #I use this obsessively, I feel blind without it
alias g='git'
alias gb='git checkout -b'
alias gc='git commit -v'
alias gca='git commit -v -a'
alias gd='git diff | $EDITOR'
alias ga='git add'
alias gl='git log'

########## Misc ###################
# general path munging
PATH=${PATH}:~/bin
PATH=${PATH}:/usr/local/bin

########## X11 ###################
export DISPLAY=:0.0
PATH=${PATH}:/usr/X11R6/bin
