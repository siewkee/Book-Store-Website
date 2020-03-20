/*
name: Hung Siew Kee
Student ID: 5986606
-->*/

function person(fullname, email, contact, date, address)
{
            this.fullname = fullname;
            this.email = email;
            this.contact = contact;
            this.date = date;
            this.address = address;
            this.person = function()
            {
                return this.fullname + "\n" + this.email + "\n"
                                        + this.contact + "\n" 
                                        + this.date + "\n" 
                                        + this.address+ "\n" 
            }
};

function add_to_cart(n)
{
    document.getElementById(n).addEventListener("click", func_addtocart_alert)
}

function func_addtocart_alert()
{
    alert("Book has been added to cart!");
}


function check()
{
    var check = true;
    var name = document.forms["info"]["fullname"].value;
    var email = document.forms["info"]["email"].value;
    var contact = document.forms["info"]["contact"].value;
    var date = document.forms["info"]["dateofdelivery"].value;
    var address = document.forms["info"]["address"].value;
    var cc = document.forms["info"]["cc"].value;
        
    if (name === "" || email === "" || contact === "" || date === "" || address === "" || cc === "")
    {
        check = false;
    }

    if (check === true)
    {
        var me = new person (name, email, contact, date, address);
        alert("Delivery Information \n\n" + me.person());
    }
    else
    {
        alert("Please fill in all the fields!");
    }

}


