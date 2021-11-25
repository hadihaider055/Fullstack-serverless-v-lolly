const AWS = require("aws-sdk");
const DocClient = new AWS.DynamoDB.DocumentClient();

async function getLolly(id: string) {
  const params = {
    TableName: process.env.LOLLY_TABLE,
    Key: {
      id: id,
    },
  };

  try {
    const result = await DocClient.get(params).promise();
    return result.Item;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default getLolly;
