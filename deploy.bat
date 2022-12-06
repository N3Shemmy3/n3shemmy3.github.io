set e-

npm run build

cd build

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:N3Shemmy3/n3shemmy3.github.io.git master:gh-pages

cd -