document.getElementById("myform").addEventListener("submit", function (e) {
  e.preventDefault();
});

async function createticket() {
  let fields = {
    name: document.getElementById("name").value,
    email: document.getElementById("inputEmail4").value,
    subject: document.getElementById("Subject").value,
    description: document.getElementById("issue").value,
  }
  
  let URL = "https://newaccount1608025958165.freshdesk.com/api/v2/tickets";
  try {
    let senddata = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-type" : "application/json",
        Authorization: "Basic " + btoa("afpRxa1ksuu4MFIQcUhI:X"),
      },
    });
    if(senddata.ok)
    {
      return senddata;
    }
    else{
      console.log("error");
    }
  } catch (err) {
    console.error("error");
  }
}
