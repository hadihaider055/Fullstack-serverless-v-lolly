const AWS = require("aws-sdk");
const DocClient = new AWS.DynamoDB.DocumentClient();
import lollyType from "./lollyType";

async function createLolly(Lolly: lollyType) {
  const params = {
    TableName: process.env.LOLLY_TABLE,
    Item: Lolly,
  };
  try {
    await DocClient.put(params).promise();
    return Lolly;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default createLolly;
