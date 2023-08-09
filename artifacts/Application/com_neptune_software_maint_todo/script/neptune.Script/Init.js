sap.ui.getCore().attachInit(function(startParams) {

    modelListToDo.setData([{
        iconSrc: "sap-icon://fa-solid/barcode",
        iconColor: "2",
        iconSize: "2rem",
        type: "Action",
        title: "Test Zebra scanner",
        description: "Deploy BlueWorx onto the Zebra scanner and test that it works",
        source: "System Notification",
        date: "09:05 pm"
    },{
        iconSrc: "sap-icon://add-equipment",
        iconColor: "3",
        iconSize: "2rem",
        type: "Action",
        title: "Reset Password",
        description: "Your password is about to expire",
        source: "System Notification",
        date: "09:05 pm"
    },{
        iconSrc: "sap-icon://request",
        iconColor: "11",
        iconSize: "2rem",
        type: "Action",
        title: "Approve Purchase Requisition",
        description: "Approve maintenance department requisitions",
        source: "System Notification",
        date: "09:05 pm"
    },{
        iconSrc: "sap-icon://instance",
        iconColor: "12",
        iconSize: "2rem",
        type: "Action",
        title: "Approve Hours",
        description: "Approve work hours of personnel",
        source: "System Notification",
        date: "09:05 pm"
    }]);
});
