#!/usr/bin/env bash
base_port="80"
check_port=`lsof -i:${base_port} | awk '{print $2}'`
while [ "$check_port"!="" ]
do
  let base_port=base_port+1
  check_port=`lsof -i:${base_port}`
done
echo ${base_port}

