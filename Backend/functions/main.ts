import createLolly from "./createLolly";
import getLolly from "./getLolly";
import lollyType from "./lollyType";

type AppSyncEvent = {
  info: {
    fieldName: string;
  };
  arguments: {
    id: string;
    Lolly: lollyType;
  };
};

exports.handler = async (event: AppSyncEvent) => {
  switch (event.info.fieldName) {
    case "createLolly":
      return await createLolly(event.arguments.Lolly);
    case "getLolly":
      return await getLolly(event.arguments.id);
    default:
      return null;
  }
};
