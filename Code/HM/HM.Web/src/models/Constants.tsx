export default class Constants {
    static API:string = "https://localhost:7254/api/Patient/";

    static STAT_ENABLED_INT:number = 0;
    static STAT_DISABLED_INT:number = 1;
    static STAT_DELETION_INT:number = 2;
    static STAT_ENABLED_STRING:string = "Enabled";
    static STAT_DISABLED_STRING:string = "Disabled";
    static STAT_DELETION_STRING:string = "Deletion";

    static Gender:string[] = [
        "Male",
        "Female"
    ]
    static CivilStatus:string[] = [
        "Single",
        "Married",
        "Divorced",
        "Separated",
        "Widowed"
    ]
}