#! /bin/sh

set -x
set -e

# set NPM command
if [ $NODE_ENV = "production" ]; then
    RUN npm ci --omit=dev  # in production image
    NPM_CMD="build"
else
    # install dev dependencies not included in the production build
    npm install
    NPM_CMD="dev"
fi

echo "Running in ${NODE_ENV} environment"

exec npm run $NPM_CMD