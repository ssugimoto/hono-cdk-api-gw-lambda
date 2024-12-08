# Hono

see, in Japanese site:
https://qiita.com/drafts/7f12e26376348171d6fe/

Web Frameworks and libraries used, [Hono](https://hono.dev/) , [AWS Lambda](https://aws.amazon.com/jp/lambda/) , [API Gateway](https://aws.amazon.com/jp/api-gateway/), [CDKv2](https://docs.aws.amazon.com/ja_jp/cdk/v2/guide/home.html) .
The first page to refer to is https://hono.dev/docs/getting-started/aws-lambda .

# Requirement
- docker
- VSCode

# Usage

+ 1 git clone this repository.
+ 2 cd this dir.
+ 3 docker compose up
+ 4 Start VSCode, Open remote explorer feature. 
+ 5 Find this contaner Name「cdk-node20-hono-2」. Attach in New Window.
+ 6 Open View Terminal ,and VSCode Explorer Menu Window Open.
+ 7 
```
cd app/my-app4
npm install
npm install --save-dev esbuild@0
```
+ 8 Use [Bun](https://bun.sh/), `npm run dev`
+ 9 Deploy application code with CDK on AWS cloud.
```
cd app/my-app4
cdk deploy
```
+ 10 Delete AWS resources created from the AWS cloud
```
cd app/my-app4
cdk destroy
```

## Getting Started (入門ガイド)





