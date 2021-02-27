const express = require('express'),
      router = express.Router(),
      middleware = require('../middleware'),
      Education = require('../models/education'),
      Job = require('../models/jobs'),
      Qualification = require('../models/qualifications');


// =================
// RESUME ROUTES
// =================

// Index
router.get('/', (req, res) => {
    Education.find({}, (err, education) => {
        if(err) {
            res.redirect('back');
        } else {
            Job.find({}, (err, jobs) => {
                if(err) {
                    res.redirect('back');
                } else {
                    Qualification.find({}, (err, qualifications) => {
                        if(err) {
                            res.redirect('back');
                        } else {
                            res.render('resume/index', {
                                education: education, 
                                jobs: jobs, 
                                qualifications: qualifications
                            });
                        }
                    })
                }
            })
        }
    });
});



// NEW EDUCATION
router.get('/education/new', middleware.loggedIn, (req, res) => {
    res.render('resume/education/new');
});

// CREATE NEW EDUCATION
router.post('/education',middleware.loggedIn, (req, res) => {
    Education.create(req.body.education, (err, createdEdu) => {
        if(err) {
            res.redirect('back');
        } else {
            res.redirect('/resume');
        }
    });
});

// EDIT EDUCATION
router.get('/education/:id/edit', middleware.loggedIn, (req, res) => {
    Education.findById(req.params.id, (err, education) => {
        if(err) {
            res.redirect('back');
        } else {
            res.render('resume/education/edit', {education: education});
        }
    });
});

// UPDATE EDUCATION
router.put('/education/:id', middleware.loggedIn, (req, res) => {
    Education.findByIdAndUpdate(req.params.id, req.body.education, (err, education) => {
        if(err) {
            res.redirect('back');
        } else {
            res.redirect('/resume');
        }
    });
});

// DELETE EDUCATION
router.delete('/education/:id',middleware.loggedIn, (req, res) => {
    Education.findByIdAndDelete(req.params.id, (err) => {
        if(err) {
            res.redirect('back');
        } else {
            res.redirect('/resume');
        }
    })
});


// NEW EXPERIENCE
router.get('/experience/new',middleware.loggedIn, (req, res) => {
    res.render('resume/experience/new');
});

// CREATE NEW EXPERIENCE
router.post('/experience',middleware.loggedIn, (req, res) => {
    Job.create(req.body.job, (err, createdJob) => {
        if(err) {
            res.redirect('back');
        } else {
            res.redirect('/resume');
        }
    });
});

// EDIT EXPERIENCE
router.get('/experience/:id/edit', middleware.loggedIn, (req, res) => {
    Job.findById(req.params.id, (err, experience) => {
        if(err) {
            res.redirect('back');
        } else {
            res.render('resume/experience/edit', {experience: experience});
        }
    });
});

// UPDATE EXPERIENCE
router.put('/experience/:id', middleware.loggedIn, (req, res) => {
    Job.findByIdAndUpdate(req.params.id, req.body.job, (err, experience) => {
        if(err) {
            res.redirect('back');
        } else {
            res.redirect('/resume');
        }
    });
});

// DELETE EXPERIENCE
router.delete('/experience/:id', middleware.loggedIn, (req, res) => {
    Job.findByIdAndDelete(req.params.id, (err) => {
        if(err) {
            res.redirect('back');
        } else {
            res.redirect('/resume');
        }
    })
});



// NEW QUALIFICATION
router.get('/qualifications/new', middleware.loggedIn, (req, res) => {
    res.render('resume/skills/new');
});

// CREATE NEW QUALIFICATION
router.post('/qualifications',middleware.loggedIn, (req, res) => {
    let points = req.body.qualification.points;
    let newPoints = [];
    (function pointsArr() {
        if(typeof points !== 'string') {
            return points.forEach(point => {
                newPoints.push({point});
            });
        }
        console.log('this is a string')
        return newPoints.push({point: points});
    })();

    req.body.qualification.points = newPoints;
    
    Qualification.create(req.body.qualification, (err, qualification) => {
        if(err) {
            res.redirect('back');
        } else {
            res.redirect('/resume');
        }
    });
});

// EDIT QUALIFICATION
router.get('/qualifications/:id/edit', middleware.loggedIn, (req, res) => {
    Qualification.findById(req.params.id, (err, qualification) => {
        if(err) {
            res.redirect('back');
        } else {
            res.render('resume/skills/edit', {qualification: qualification});
        }
    });
});

// UPDATE QUALIFICATION
router.put('/qualifications/:id', middleware.loggedIn, (req, res) => {
    let points = req.body.qualification.points;
    let newPoints = [];
    (function pointsArr() {
        if(typeof points !== 'string') {
            return points.forEach(point => {
                newPoints.push({point});
            });
        }
        console.log('this is a string')
        return newPoints.push({point: points});
    })();

    req.body.qualification.points = newPoints;

    Qualification.findByIdAndUpdate(req.params.id, req.body.qualification, (err, qualification) => {
        if(err) {
            res.redirect('back');
        } else {
            res.redirect('/resume');
        }
    });
});

// DELETE QUALIFICATION
router.delete('/qualifications/:id', middleware.loggedIn, (req, res) => {
    Qualification.findByIdAndDelete(req.params.id, (err) => {
        if(err) {
            res.redirect('back');
        } else {
            res.redirect('/resume');
        }
    })
});

function createList(points) {
    let newPoints = [];
    if(typeof points !== 'string') {
        return points.forEach(point => {
            newPoints.push({point});
        });
    }
    console.log('this is a string')
    return newPoints.push({point: points});
};


module.exports = router;