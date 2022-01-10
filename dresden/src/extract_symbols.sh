#!/bin/bash

SCRIPT_DIR=$(dirname $0)

BASE_IMG=$SCRIPT_DIR/Pagan_religions_symbols_-_3_rows.png
OUT=$SCRIPT_DIR/symbols

for x in $(seq 0 2); do
    for y in $(seq 0 2); do
        filename="symbol_${x}_${y}.png"
        echo "($x,$y) => $filename"
        convert $BASE_IMG -crop 200x200+$(($x*200))+$(($y*200)) $OUT/$filename
    done
done