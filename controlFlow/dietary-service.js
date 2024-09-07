let authenticated = true;
let userType = "employee";

switch(userType){
    case "employee":
        console.log("You have access to Dietary Service");
        break;
    case "enrolledMember":
        console.log("You have access to Dietary Service and one-on-one with a dietician");
        break;
    case "subscriber":
        console.log("authorized to have partial access to facilitate Dietary Services");
        break;
    default:
        console.log("You need to enroll or at least subscribe first to avail this facility.");
}