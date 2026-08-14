#!/usr/bin/env bash
set -euo pipefail

REF="${VERCEL_GIT_COMMIT_REF:-}"

if [[ "$REF" == "main" || "$REF" == "master" ]]; then
  echo "Build: release merged to $REF"
  exit 1
fi

echo "Skip: Vercel builds only after release merge to main/master (got: ${REF:-empty})"
exit 0
