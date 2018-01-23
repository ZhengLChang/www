#Makefile

CC=gcc
#INCLUDES = `mysql_config --include` -I./include
INCLUDES = -I./include -I./iniparser/include -I./json
#LIBS = `mysql_config --libs` libfcgi/fcgiapp.c libfcgi/fcgi_stdio.c libfcgi/strerror.c libfcgi/os_unix.c mysql_lib.c
LIBS=libfcgi/fcgiapp.c libfcgi/fcgi_stdio.c libfcgi/strerror.c libfcgi/os_unix.c 
INIPARSERLIBS=iniparser/src/iniparser.c \
	iniparser/src/dictionary.c \
	iniparser/src/util.c \
	iniparser/src/log.c \
	iniparser/src/buffer.c \
	json/json.c
#CFLAGS=-g -Wall -Werror -D_REENTRANT  -D_GNU_SOURCE ${LIBS} ${INIPARSERLIBS} ${INCLUDE}
CFLAGS=-g ${LIBS} ${INIPARSERLIBS} ${INCLUDE}

MainFile=echo.c
OutPut=$(patsubst %.c, %.fcgi, ${MainFile})

springcleaning=$(patsubst %.c, %, $(wildcard ./*.c))
springcleaning=$(patsubst %.c, %.fcgi, $(wildcard ./*.c))
springcleaning+=$(patsubst %.c, %.o, $(wildcard ./*.c))
springcleaning+=$(patsubst %.c, %.o, ${src})

.PHONY: all clean
all: $(OutPut)

$(OutPut):
	$(CC) -o cgiMain.fcgi ${CFLAGS} ${INCLUDES} ${MainFile}

clean:
	rm -f ${springcleaning}
