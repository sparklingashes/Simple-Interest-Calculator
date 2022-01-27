function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getELementById("years").value;
    a = p+((p*r*t)/100);
    y = new Date().getFullYear();
    document.write("If you deposit ",p);
    document.write("at an interest rate of ",r,"%");
    document.write("You will receive an amount of ",a);
    document.write("in the year",t+y);
    
}
        
