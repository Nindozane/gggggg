var images = 
["Janice_templeton_boss_baby.png", "Ted_templeton_boss_baby.png", "merlin_189782901_af372257-acfe-472f-87de-59477a5f9d43-superJumbo.jpg", "6f9faabf99bff3aa1466c2fb4d4e502.jpg"];

var names = ["My Beautiful Mom - Priyanka Sharma", "My Awesome Dad - Abishek Trivedi", "My Naughty Little Brother - Aansh Trivedi", 
"The One And Only :- Me - Saurabh Kishor"];

var i = 0;
function update() {
i++;
var number_of_family_members_in_array = 4
if(i > number_of_family_members_in_array)
{
i = 0;
}
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
}