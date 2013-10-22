/*
 * EditMode.js
 * 
 * Simple javascript object meant to be used within a CQ development to understand on a Javascript side which my Edit Mode is.
 * 
 * USAGE:
 *      1) Drop the file in your clientlib
 *      2) Reference it in your js.txt
 *      
 *      You can now use it as it will automatically create an "editmode" object
 *              (editmode.isEditMode())    ? "I'm Authoring"   : ""
 *              (editmode.isPreviewMode()) ? "I'm in Preview"  : ""
 *              (editmode.isDesignMode())  ? "I'm in Design"   : ""
 *              (editmode.isDisabled())    ? "I'm in Disabled" : ""
 */
function EditMode(){
    this.isEditMode=function(){
        return (CQ.WCM)?CQ.WCM.isEditMode(true):false;
    };
    this.isPreviewMode=function(){
        return (CQ.WCM)?CQ.WCM.isPreviewMode(true):false;
    };
    this.isDesignMode=function(){
        return (CQ.WCM)?CQ.WCM.isDesignMode(true):false;
    };
    this.isDisabled=function(){
        return (!CQ.WCM);
    }
};

var editmode = new EditMode();