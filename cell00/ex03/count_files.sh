#!/bin/bash

file_count=$(find . -maxdepth 1 -type f | wc -l)

dir_count=$(find . -maxdepth 1 -type d | wc -l)

echo "Regular files: $file_count"
echo "Directories: $dir_count"
