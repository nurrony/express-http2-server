Simple HTTP2 Server using ExpressJS
------------------------------------
This is a simple HTTP 2.0 server using ExpressJS. It is a demonstration how to create HTTP 2.0 server using ExpressJS.
This is not for production usage and made for learning and playing with HTTP 2.0 only

Generating Self Signed key
--------------------------
HTTPS is needed for HTTP 2.0 protocol. Though it is not a requirement for HTTP 2.0 protocol itself but most major
browsers implement HTTP 2.0 only over TLS. To generate self signed certificate run the following commands on your
terminal

```sh
$ cd project-root
$ mkdir certs && cd $_
$ cd certs
$ openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
...
$ openssl rsa -passin pass:x -in server.pass.key -out http2-express-server.key
writing RSA key
$ rm server.pass.key
$ openssl req -new -key http2-express-server.key -out http2-express-server.csr
...
Country Name (2 letter code) [AU]:BD
State or Province Name (full name) [Some-State]:Dhaka
...
A challenge password []:
...
$ openssl x509 -req -sha256 -days 365 -in http2-express-server.csr -signkey http2-express-server.key -out http2-express-server.crt
```
