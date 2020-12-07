rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:SuperPowerZhang/flower-ui-website.git &&
git push -f -u origin main
git remote add gitee git@gitee.com:tammiezhang/flower-ui-website.git &&
git push -f -u gitee main &&
cd -
echo https://superpowerzhang.github.io/flower-ui-website/index.html#/  https://superpowerzhang.github.io/flower-ui-website/index.html#/