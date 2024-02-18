import { LoaderFunctionArgs } from "@remix-run/node";
import { renderToStream } from "@react-pdf/renderer";
// this is your PDF document component created with React PDF
import { PDF } from "~/components/Pdf";

export async function loader({ params }: LoaderFunctionArgs) {
  const title = params.name || "";

  // render the PDF as a stream so you do it async
  let stream = await renderToStream(<PDF title={title} />);

  // and transform it to a Buffer to send in the Response
  let body: Buffer = await new Promise((resolve, reject) => {
    let buffers: Uint8Array[] = [];
    stream.on("data", (data) => {
      buffers.push(data);
    });
    stream.on("end", () => {
      resolve(Buffer.concat(buffers));
    });
    stream.on("error", reject);
  });

  let headers = new Headers({ "Content-Type": "application/pdf" });
  return new Response(body, { status: 200, headers });
}
