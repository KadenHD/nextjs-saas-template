#!/bin/bash

set -e
set -u

if [ -n "${POSTGRES_DBS:-}" ]; then
    echo ">> Creating multiple DBs: $POSTGRES_DBS"

    for db in ${POSTGRES_DBS//,/ }; do
        echo ">>  Creating DB '$db'"
        createdb --username "$POSTGRES_USER" "$db"
    done

    echo ">> Multiple DBs created"
fi
