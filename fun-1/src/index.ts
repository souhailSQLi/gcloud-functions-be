import { Request, Response } from "@google-cloud/functions-framework";

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
export const helloTSHttp = (req: Request, res: Response) => {
  const { headers } = req;
  if (headers.accept === "application/json") {
    return res.json({ message: "Hello World from TS Function 1" });
  }
  return res.send("Hello World from TS Function 1");
};

