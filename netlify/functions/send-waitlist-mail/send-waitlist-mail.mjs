import nodemailer from "nodemailer";

const tmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "doerga1@gmail.com",
    pass: "doerga2002",
  },
});

const sendMail = () => {
  tmail.sendMail(
    {
      from: "doerga1@gmail.com",
      to: "hello@talkbattles.com",
      subject: "Yo test?",
      text: "Easy skizz",
    },
    (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
};

export default (request, context) => {
  try {
    sendMail();

    return new Response(`Hello 'nibber`);
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    })
  }
}
