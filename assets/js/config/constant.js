define(["app"], function(app) {
    var baseUrl = "http://192.168.1.5:3000";

    app.register.constant("API", {
        baseUrl: "http://192.168.1.5:3000",
        User: {
            login: {
                url: baseUrl + "/api/User/login",
                method: "POST"
            },
            register: {
                url: baseUrl + "/api/Users",
                method: "POST"
            },
            profile: {
                url: baseUrl + "/api//users/profile",
                method: "GET"
            },
            list: {
                url: baseUrl + "/users",
                method: "GET"
            },
            find: {
                url: baseUrl + "/users/find/:id",
                method: "GET"
            },
            update: {
                url: baseUrl + "/users/:id",
                method: "PUT"
            },
            create: {
                url : baseUrl + "/users/create",
                method : "POST"
            }

        },
        Student: {
            list: {
                url: baseUrl + "/api/student/list",
                method: "GET"
            },
            find: {
                url: baseUrl + "/api/student/:id",
                method: "GET"
            },
            payment: {
                url: baseUrl + "/api/payment/student/:id",
                method: "GET"
            },
            update: {
                url: baseUrl + "/api/student/update/:id",
                method: "PUT"
            },
            create: {
                url : baseUrl + "/api/student/create",
                method : "POST"
            }
        },
        Course: {
            list: {
                url: baseUrl + "/api/course/list",
                method: "GET"
            },
            find: {
                url: baseUrl + "/api/course/:id",
                method: "GET"
            },
            update: {
                url: baseUrl + "/courses/:id",
                method: "PUT"
            },
            create: {
                url: baseUrl + "/courses/create",
                method: "POST"
            },
        },

        Batch: {
            list: {
                url: baseUrl + "/batch/list",
                method: "GET"
            },
            find: {
                url: baseUrl + "/batch/:id",
                method: "GET"
            },
            update: {
                url: baseUrl + "/batch/:id",
                method: "PUT"
            },
            create: {
                url: baseUrl + "/batch",
                method: "POST"
            },
        },
        Payment: {
            list: {
                url: baseUrl + "/api/payment",
                method: "GET"
            },
            find: {
                url: baseUrl + "/api/payment/:id",
                method: "GET"
            },
            update: {
                url: baseUrl + "/api/payment",
                method: "PUT"
            },
            create: {
                url: baseUrl + "/api/payment",
                method: "POST"
            },
        },
        PaymentMethod:{
            list: {
                url: baseUrl + "/payment_method",
                method: "GET"
            },
            find: {
                url: baseUrl + "/payment_method/find/:id",
                method: "GET"
            },
            update: {
                url: baseUrl + "/payment_method/:id",
                method: "PUT"
            },
            create: {
                url: baseUrl + "/payment_method/create",
                method: "POST"
            },
        },

        PaymentType:{
            list: {
                url: baseUrl + "/payment_type",
                method: "GET"
            },
            find: {
                url: baseUrl + "/payment_type/find/:id",
                method: "GET"
            },
            update: {
                url: baseUrl + "/payment_type/:id",
                method: "PUT"
            },
            create: {
                url: baseUrl + "/payment_type/create",
                method: "POST"
            },
        },
        PaymentTransaction : {
            create: {
                url: baseUrl + "/api/payment/student/add",
                method: "POST"
            }
        },
        Dashboard : {
            resultCount : {
                url : baseUrl + "/api/dashboard/resultcount",
                method : "GET"
            },
            latestStudent : {
                url : baseUrl + "/api/dashboard/student/latest",
                method : "GET"
            },
            latestBatch : {
                url : baseUrl + "/api/dashboard/batch/latest",
                method : "GET"
            },
            latestPayment : {
                url : baseUrl + "/api/dashboard/payment/latest",
                method : "GET"
            },
            latestDues : {
                url : baseUrl + "/api/dashboard/dues/latest",
                method : "GET"
            }
        }
        

    });
})