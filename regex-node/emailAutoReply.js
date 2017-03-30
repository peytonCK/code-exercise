//通过接收过来的邮件，提取有用的信息，然后组织成自动的回复内容

let emailStr = "From elvis Thu Feb 29 11:15 2007 \n";
emailStr += "Received: from elvis@localhost by tabloid.org id KA*CMY \n";
emailStr += "Received: from tabloid.org by gateway.net id N*XBK \n";
emailStr += "To: jfriedl@regex.info (Jeffrey Friedl) \n";
emailStr += "From: elvis#tabloid.org(The King) \n";
emailStr += "Date: Thu,Feb 29 2007 11:15 \n";
emailStr += "Message-Id: <2007022939939.KA*CMY@tabloid.org> \n";
emailStr += "Subject: Be seein' ya around \n";
emailStr += "Reply-To: elvis@hh.tabloid.org \n";
emailStr += "X-Mailer: Madam Zelda's Psychic Orb [version 3.7 PL92] \n";
emailStr += "\n";
emailStr += "Sorry I haven't been around lately. A few years back I checked into \n";
emailStr += "that ole heartbreak hotel in the sky, if ya know what I mean.\n";
emailStr += "The Duke says 'hi'.\n";
emailStr += "        Elvis \n";

console.log("Receive one email:\n" + emailStr);

let lines = emailStr.split("\n");

//需要提取  to  from  subject  date name content
let toStr, fromStr, subjectStr, dateStr, nameStr, contentStr = "";

let toReg = /^To:\s(.*)/,
    fromReg = /^From:\s(.+)\((.+)\)/,
    dateReg = /^Date:\s(.*)/,
    subjectReg = /^Subject:\s(.*)/;

let current = 'header';

for (let i = 0; i < lines.length; i++) {
    let str = lines[i];
    if (!str.length && current == 'header') {
        current = 'body';
    }
    if (str.length && i < (lines.length - 1)) {
        if (current == 'body') {
            contentStr += ">|" + str+"\n";
        } else {
            if (toReg.test(str)) {
                str.replace(toReg, function(match, firCon) {
                    toStr = firCon;

                });
                continue;
            }

            if (fromReg.test(str)) {
                str.replace(fromReg, function(match, firCon, secCon) {
                    fromStr = firCon;
                    nameStr = secCon;

                });
                continue;
            }

            if (subjectReg.test(str)) {
                str.replace(subjectReg, function(match, firCon) {
                    subjectStr = firCon;
                })
                continue;
            }

            if (dateReg.test(str)) {
                str.replace(dateReg, function(match, firCon) {
                    dateStr = firCon;
                })
                continue;
            }
        }

    }
}

console.log("Auto reply content:");
console.log("To: "+fromStr+" ("+nameStr+")");
console.log("From: "+toStr);
console.log("Subject: Re: "+subjectStr);
console.log("");
console.log("on "+dateStr+" "+nameStr+" wrote:");
console.log(contentStr);