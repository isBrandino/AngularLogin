#!/usr/bin/env bash
#!/usr/bin/env bash

async1()
{
yarn install
ng serve 
kill -INT 888
}


echo "Hi"
async1
kill -INT 888
