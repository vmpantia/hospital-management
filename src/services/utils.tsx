import Constants from "../models/Constants";

export default class Utils {

    public static ConvertStatusToString(type: number) {
        switch(type){
            case Constants.STAT_ENABLED_INT:
                return Constants.STAT_ENABLED_STRING;
            case Constants.STAT_DISABLED_INT:
                return Constants.STAT_DISABLED_STRING;
            case Constants.STAT_DELETION_INT:
                return Constants.STAT_DELETION_STRING;
        }
    }

    public static ConvertStatusToInt(type: string) {
        switch(type){
            case Constants.STAT_ENABLED_STRING:
                return Constants.STAT_ENABLED_INT;
            case Constants.STAT_DISABLED_STRING:
                return Constants.STAT_DISABLED_INT;
            case Constants.STAT_DELETION_STRING:
                return Constants.STAT_DELETION_INT;
        }
    }
}