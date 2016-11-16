/**
 * Payment_transactionController
 *
 * @description :: Server-side logic for managing payment_transactions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    find: function (req, res) {

        PaymentService.find({}, function (response) {
            res.json(response);
        })

    },
    findById: function (req, res) {
        var id = parseInt(req.params.id);
        if (!id) {
            res.json({
                'field': 'id',
                'status': 'fail',
                "message": 'Missing field id'
            });
            return;
        } else {
            PaymentService.find({
                id: id
            }, function (response) {
                res.json(response);
            })
        }

    },
    findByStudentId: function (req, res) {
        var student_id = parseInt(req.params.id);
        if (!student_id) {
            res.json({
                'field': 'id',
                'status': 'fail',
                "message": 'Missing field id'
            });
            return;
        } else {
            
            PaymentService.find({
                student_id: student_id
            }, function (response) {
                res.json(response);
            })
        }

    },
    findByBatchId: function (req, res) {
        var batch_id = parseInt(req.params.id);
        if (!batch_id) {
            res.json({
                'field': 'id',
                'status': 'fail',
                "message": 'Missing field id'
            });
            return;
        } else {
            sails.log(req.params.id)
            batch_id = req.params.id;
            PaymentService.find({
                batch_id: batch_id
            }, function (response) {
                res.json(response);
            })
        }

    },
    findByCourseId: function (req, res) {
        var course_id = parseInt(req.params.id);
        if (!course_id) {
            res.json({
                'field': 'id',
                'status': 'fail',
                "message": 'Missing field id'
            });
            return;
        } else {
            sails.log(req.params.id)
            course_id = req.params.id;
            PaymentService.find({
                course_id: course_id
            }, function (response) {
                res.json(response);
            })
        }

    },
    findByTypeId: function (req, res) {
        var type_id = parseInt(req.params.id);
        if (!type_id) {
            res.json({
                'field': 'id',
                'status': 'fail',
                "message": 'Missing field id'
            });
            return;
        } else {
            sails.log(req.params.id)
            type_id = req.params.id;
            PaymentService.find({
                payment_type: type_id
            }, function (response) {
                res.json(response);
            })
        }

    },

    findByMethodId: function (req, res) {
        var method_id = parseInt(req.params.id);
        if (!method_id) {
            res.json({
                'field': 'id',
                'status': 'fail',
                "message": 'Missing field id'
            });
            return;
        } else {            
            PaymentService.find({
                payment_method: method_id
            }, function (response) {
                res.json(response);
            })
        }

    },
    addStudentPayment : function (req, res) {
        var payment = req.body;
        PaymentService.addPayment(payment, function (response) {
            res.json(response);
        })
    }
};