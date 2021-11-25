import * as cdk from "@aws-cdk/core";
import * as appsync from "@aws-cdk/aws-appsync";
import * as ddb from "@aws-cdk/aws-dynamodb";
import * as lambda from "@aws-cdk/aws-lambda";

export class VLollyBackend extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new appsync.GraphqlApi(this, "Api", {
      name: "cdk-vLolly-appsync-api",
      schema: appsync.Schema.fromAsset("schema/schema.gql"),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
          apiKeyConfig: {
            expires: cdk.Expiration.after(cdk.Duration.days(365)),
          },
        },
      },
    });

    const v_lollyLambda = new lambda.Function(this, "ApsyncVLollyHandler", {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: "main.handler",
      code: lambda.Code.fromAsset("functions"),
      memorySize: 1024,
    });
    const lambdaDs = api.addLambdaDataSource("lambdaDatasource", v_lollyLambda);

    lambdaDs.createResolver({
      typeName: "Query",
      fieldName: "getLolly",
    });

    lambdaDs.createResolver({
      typeName: "Mutation",
      fieldName: "createLolly",
    });

    const lollyTable = new ddb.Table(this, "CDKLOLLYTABLE", {
      partitionKey: {
        name: "id",
        type: ddb.AttributeType.STRING,
      },
    });

    lollyTable.grantFullAccess(v_lollyLambda);
    v_lollyLambda.addEnvironment("LOLLY_TABLE", lollyTable.tableName);

    // Prints out the AppSync GraphQL endpoint to the terminal
    new cdk.CfnOutput(this, "GraphQLAPIURL", {
      value: api.graphqlUrl,
    });

    // Prints out the AppSync GraphQL API key to the terminal
    new cdk.CfnOutput(this, "GraphQLAPIKey", {
      value: api.apiKey || "",
    });

    // Prints out the AppSync GraphQL API ID to the terminal
    new cdk.CfnOutput(this, "GraphQLAPIID", {
      value: api.apiId || "",
    });

    // Prints out the stack region to the terminal
    new cdk.CfnOutput(this, "Stack Region", {
      value: this.region,
    });
  }
}
