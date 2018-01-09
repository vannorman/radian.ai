source ~/.profile

printf "\n $green git add, commit, push $nocolor \n\n"
git add -A
git commit -m "'$1'"
git push

printf "\n $green ssh to server and git pull $nocolor \n\n"
ssh -i ~/.ssh/radian.ai.pem ubuntu@ec2-13-57-89-48.us-west-1.compute.amazonaws.com '
cd radian.ai;
git pull;
sudo service apache2 restart;
'
