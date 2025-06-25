#!/usr/bin/env bash
#
# dump_frontend.sh
# Generates a full dump of frontend/src (excluding assets/) into frontend-dump.txt

# Configuration
SRC_DIR="frontend/src"
OUT_FILE="frontend-dump.txt"
DELIM="------------------------------------------------------------"

# Start fresh
rm -f "$OUT_FILE"

{
  echo "=== Directory tree of $SRC_DIR ==="
  # list all dirs and files, but prune assets/
  find "$SRC_DIR" -path "$SRC_DIR/assets" -prune -o -print

  echo
  echo "=== File contents ==="
  echo

  # For each file under src (excluding assets), dump name + content
  find "$SRC_DIR" -path "$SRC_DIR/assets" -prune -o -type f -print | sort | while read -r file; do
    echo "$DELIM"
    echo "File: $file"
    echo "$DELIM"
    cat "$file"
    echo
  done
} >> "$OUT_FILE"

echo "Done! Output written to $OUT_FILE"
