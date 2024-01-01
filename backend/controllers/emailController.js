import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // `true` for port 465, `false` for all other ports
    auth: {
        user: 'deiseval26@gmail.com',
        pass: 'pgnprrwlhysbuezr',
    },
});

//    message = {
// 	  from: 'deiseval26@gmail.com', // sender address
// 	  to: "deiseval26@gmail.com", // list of receivers
// 	  subject: "Deis Eval", // Subject line
// 	  text: "Hello world?", // plain text body
// 	  html: "<b>Hello world?</b>", // html body
// 	}

async function sendEmail(req, res) {
	const {email} = req.body;

    // send mail with defined transport object
	try{
    const info = await transporter.sendMail(email);
	}catch(err){
		console.log(err);
		return res.status(500).json({ error: err.message });
	}
    // console.log('Message sent: %s', info.messageId);
	res.status(200).json({ message: 'Email sent' });
}

export { sendEmail };
