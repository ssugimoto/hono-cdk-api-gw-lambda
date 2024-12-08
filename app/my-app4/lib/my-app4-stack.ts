import * as cdk from 'aws-cdk-lib';
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigw from "aws-cdk-lib/aws-apigateway";

export class MyApp4Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const honoLambda = new NodejsFunction(this, "lambda", {
      entry: "lambda/index.ts",
      depsLockFilePath: './package-lock.json',
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_20_X,
      environment: {
        ENV: process.env.ENV ? process.env.ENV : "",
        BASIC_USERNAME: process.env.BASIC_USERNAME
          ? process.env.BASIC_USERNAME
          : "",
        BASIC_PASSWORD: process.env.BASIC_PASSWORD
          ? process.env.BASIC_PASSWORD
          : "",
      },
    });

    const apiGw = new apigw.LambdaRestApi(this, "hono-my-app4-Api", {
      handler: honoLambda,
    });

    // API GatewayのエンドポイントURLを出力
    new cdk.CfnOutput(this, "ApiEndpoint", {
      value: apiGw.url,
      description: "API Gateway endpoint URL",
    });
  }
}
