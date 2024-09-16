import axios from "axios";
import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { firstName, lastName, email, message, recaptchaToken } =
      await req.json();

    // Checks for recaptcha validation
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );

    console.log(recaptchaResponse);

    const { success } = recaptchaResponse.data;

    if (!success) {
      return new Response(
        JSON.stringify({ error: "reCAPTCHA validation failed" }),
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Site Diego Felix <site@diegofelix.com.br>",
      to: ["contato@diegofelix.com.br"],
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
