#!/usr/bin/env bash

script_dir="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )" || exit 1

docker pull node:lts

interactive=
if [ -t 1 ] ; then
	interactive=-it
fi

exec docker run \
	--rm \
	$interactive \
	--mount "type=bind,src=$script_dir,dst=/workspace" \
	--workdir /workspace \
	node:lts \
	node --test
