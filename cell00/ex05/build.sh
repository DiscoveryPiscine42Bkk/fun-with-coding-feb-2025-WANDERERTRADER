#!/bin/bash

# Check if there are no arguments
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Loop through all the arguments and create folders with "ex" prefix
    for arg in "$@"; do
        mkdir "ex$arg"
	echo "ex$arg"
    done
fi
