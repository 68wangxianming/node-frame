#!/usr/bin/env bash
base_port="80"
check_port=`lsof -i:${base_port} | wc -l`
echo $check_port
while [ $check_port -gt 0 ]
do
  base_port=`expr $base_port + 1`
  check_port=`lsof -i:${base_port} | wc -l`
done
echo ${base_port}
