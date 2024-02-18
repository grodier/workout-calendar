import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const title = body.get("title");
  return redirect(`/to-pdf/${title}`);
}

export default function ToPDF() {
  return (
    <div>
      <form target="_blank" method="POST">
        <input type="text" name="title" />
        <button type="submit">Create PDF</button>
      </form>
    </div>
  );
}
