#! /usr/bin/env zsh

gecko 'launching funes-couchdb'

docker run -itd --publish 5984:5984 --name=funes-couchdb -e NODENAME='couchdb-0.local.com' \
 --mount 'source=funes-couchdb,target=/opt/couchdb/data' couchdb:2.3.0
