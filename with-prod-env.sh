#!/usr/bin/env bash
#
# with-prod-deploy-test.sh
#   1) Temporarily swap in backend/.env.production → backend/.env
#   2) Temporarily swap in frontend/.env.production → frontend/.env
#   3) Validate backend mail settings
#   4) Run your full Forge-style deploy steps
#   5) Restore the original .env files
#

set -euo pipefail

############## CONFIG ##############
BACKEND_DIR="backend"
BACKEND_LOCAL_ENV="$BACKEND_DIR/.env"
BACKEND_PROD_ENV="$BACKEND_DIR/.env.production"
BACKEND_BACKUP_ENV="$BACKEND_DIR/.env.localbak"

FRONTEND_DIR="frontend"
FRONT_LOCAL_ENV="$FRONTEND_DIR/.env"
FRONT_PROD_ENV="$FRONTEND_DIR/.env.production"
FRONT_BACKUP_ENV="$FRONTEND_DIR/.env.localbak"

# Which mail vars must be present in your prod .env
REQUIRED_MAIL_VARS=(
  MAIL_MAILER
  MAIL_HOST
  MAIL_PORT
  MAIL_USERNAME
  MAIL_PASSWORD
  MAIL_FROM_ADDRESS
  MAIL_FROM_NAME
  CONTACT_FORM_TO
)
#####################################

echo "────────────────────────────────────────────────────────"
echo "  🔥  Stellar Progress » Production-style deploy test"
echo "────────────────────────────────────────────────────────"

# --- BACKUP & SWAP ENVIRONMENTS ---
echo
echo "➤ Backing up & swapping .env files…"

# Backend
if [ -f "$BACKEND_LOCAL_ENV" ]; then
  cp "$BACKEND_LOCAL_ENV" "$BACKEND_BACKUP_ENV"
  echo "  • Backed up $BACKEND_LOCAL_ENV → $BACKEND_BACKUP_ENV"
fi
cp "$BACKEND_PROD_ENV" "$BACKEND_LOCAL_ENV"
echo "  • Using $BACKEND_PROD_ENV → $BACKEND_LOCAL_ENV"

# Frontend
if [ -f "$FRONT_LOCAL_ENV" ]; then
  cp "$FRONT_LOCAL_ENV" "$FRONT_BACKUP_ENV"
  echo "  • Backed up $FRONT_LOCAL_ENV → $FRONT_BACKUP_ENV"
fi
cp "$FRONT_PROD_ENV" "$FRONT_LOCAL_ENV"
echo "  • Using $FRONT_PROD_ENV → $FRONT_LOCAL_ENV"

# --- VALIDATE MAIL SETTINGS ---
echo
echo "➤ Validating backend mail config…"
for var in "${REQUIRED_MAIL_VARS[@]}"; do
  val="$(grep -E "^${var}=" "$BACKEND_LOCAL_ENV" || true)"
  # if the line is missing or empty after the =
  if [[ -z "$val" || "$val" =~ ^${var}=\ *$ ]]; then
    echo "  ✖️  ERROR: '$var' is missing or empty in $BACKEND_LOCAL_ENV"
    exit 1
  fi
done
echo "  ✔︎ All required MAIL_* vars are set."

# --- RUN DEPLOY STEPS ---
echo
echo "➤ Running production-style deploy steps…"

# 1) Backend deploy
echo
echo "  → Backend (Laravel) …"
(
  cd "$BACKEND_DIR"
  composer install --no-interaction --prefer-dist --optimize-autoloader
  php artisan config:cache
  php artisan route:cache
  php artisan view:cache
  php artisan migrate --force     # uncomment if you ever need migrations
  php artisan queue:restart       # uncomment if you run queue workers
)
echo "  ✔︎ Backend deploy commands done."

# 2) Frontend deploy
echo
echo "  → Frontend (React/Vite) …"
(
  cd "$FRONTEND_DIR"
  npm ci
  npm run build
)
echo "  ✔︎ Frontend deploy commands done."

# --- RESTORE ORIGINAL ENVS ---
echo
echo "➤ Restoring your local .env files…"

# Backend
if [ -f "$BACKEND_BACKUP_ENV" ]; then
  mv "$BACKEND_BACKUP_ENV" "$BACKEND_LOCAL_ENV"
  echo "  • Restored $BACKEND_LOCAL_ENV from backup"
else
  rm "$BACKEND_LOCAL_ENV"
  echo "  • Removed temporary $BACKEND_LOCAL_ENV"
fi

# Frontend
if [ -f "$FRONT_BACKUP_ENV" ]; then
  mv "$FRONT_BACKUP_ENV" "$FRONT_LOCAL_ENV"
  echo "  • Restored $FRONT_LOCAL_ENV from backup"
else
  rm "$FRONT_LOCAL_ENV"
  echo "  • Removed temporary $FRONT_LOCAL_ENV"
fi

echo
echo "✅  All done — your production-style deploy test is complete."
