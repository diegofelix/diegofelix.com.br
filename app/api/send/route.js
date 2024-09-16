import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Site Diego Felix <site@diegofelix.com.br>",
      to: ["contato@diegofelx.com.br"],
      subject: "Você recebeu um contato através do seu site",
      react: EmailTemplate({ firstName, lastName, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
